/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo.vercel.app/api/avo";
const BaseUrl = "https://platzi-avo.vercel.app";

const appNode = document.querySelector('#app');

//web api
// Conectarnos al servidor
window.fetch(url)
// procesar la respuesta y convertirla a JSON
.then(response => response.json())
//JSON --> Data --> Renderizar la info del browser
.then(responseJson => {

    const allItems = [];

    responseJson.data.forEach(item => {

        //crear imagen
        const image = document.createElement('img');
        image.src = `${BaseUrl}${item.image}`;  // URL de la imagen


        //crear el titulo
        const title = document.createElement('h2');
        title.textContent = item.name;

        //crear el precio
        const price = document.createElement('div');
        price.textContent = item.price;

        const container = document.createElement('div');
        container.append(image, title, price);
        
        allItems.push(container);
    });


    appNode.append(...allItems);
});