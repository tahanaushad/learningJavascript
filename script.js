


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

function removeItem() {

    if (counter > 0) {
    const cartNum = document.getElementById("cartNumber");
    counter = counter-1; 
    cartNum.innerText = counter ;
}
}


