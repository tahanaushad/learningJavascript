const products = [{
    title: "Shirt",
    price: 500,
    description: "lorem",
    image: "https://images.unsplash.com/photo-1705798261243-b6892fd6821f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    title: "Pant",
    price: 400,
    description: "lorem",
    image: "https://images.unsplash.com/photo-1682685795579-37e731bfefab?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    title: "Shoe",
    price: 1000,
    description: "lorem",
    image: "https://images.unsplash.com/photo-1705338560918-5225147f34de?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    title: "Pen",
    price: 70,
    description: "lorem",
    image: "https://images.unsplash.com/photo-1682687220640-9d3b11ca30e5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    title: "Book",
    price: 100,
    description: "lorem",
    image: "https://images.unsplash.com/photo-1705779235006-4111cb1a889e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    title: "Pen",
    price: 70,
    description: "lorem",
    image: "https://images.unsplash.com/photo-1682687220640-9d3b11ca30e5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}];

function createProductCard(product) {
    //list of all the elements
    let card = document.createElement("div");
    const imageDiv = document.createElement("img")
    let productName = document.createElement("h3");
    let productPrice = document.createElement("p");
    const buttonEl = document.createElement("button");
    buttonEl.innerHTML = "Add to Cart"

    card.className = "card1";
    imageDiv.className = "imgBox";
    imageDiv.innerHTML = "IMAGE"
    imageDiv.src = product.image;
    card.appendChild(imageDiv)
    productName.innerText = product.title;
    card.appendChild(productName)
    productPrice.innerText = product.price;
    card.appendChild(productPrice)
    buttonEl.innerText = "Add to Card";
    buttonEl.id = "addToCartBtn";
    buttonEl.addEventListener("click", addToCartFn)
    card.append(buttonEl)
    
    return card;

}

let productContainer = document.getElementById("list")

for (let i = 0; i < products.length; i++) {
    let productCard = createProductCard(products[i]);
    productContainer.appendChild(productCard);

}

let counter = 0;

function addToCartFn() {

const cartNum = document.getElementById("cartNumber");
counter = counter+1; 
cartNum.innerText = counter ;

}

function removeItem (){
    if (counter > 0) {
    const cartNum = document.getElementById("cartNumber");
    counter = counter-1; 
    cartNum.innerText = counter ;
}
}


