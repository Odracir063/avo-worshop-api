/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo.vercel.app/api/avo";
const BaseUrl = "https://platzi-avo.vercel.app";

const appNode = document.querySelector('#app');
appNode.className = "grid grid-cols-2";


const formatPrice = (price) => {

    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: "currency",
        currency: "USD",
    }).format(price);

    return newPrice;
}

//Intl
//1 - format fechas
//2 - format monedas


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
        image.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
        

        //crear el titulo
        const title = document.createElement('h2');
        title.textContent = item.name;
        title.className = "text-lg text-green-600";

        //crear el precio
        const price = document.createElement('div');
        price.className = "text-gray-600";
        price.textContent = formatPrice(item.price);


        //metemos el precio y el titulo en un div
        const priceAndTitle = document.createElement("div")
        priceAndTitle.className = "text-center md:text-left";
        priceAndTitle.appendChild(title);
        priceAndTitle.appendChild(price);

        // creamos un div que contenga todo
        const card = document.createElement("div");
        card.className = "md:flex bg-white rounded-lg p-6 hover:bg-green-300";
        card.append(image, priceAndTitle);

        const container = document.createElement('div');
        container.append(card);
        

        
        allItems.push(container);
    });


    appNode.append(...allItems);
});