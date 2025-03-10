const section = document.querySelector("section");

async function  fetchOffers() {
    const response = await fetch("https://dummyjson.com/products");
    const datas = await response.json();
    const products = datas.products;
    let content = "";
    for (const product of products) {
        content += `<div class="card-product">
            <div class="categorie">
                <p>${product.category}</p>
            </div>
            <div class="img-content">
                <img src="https://picsum.photos/200/300" alt="">
            </div>
            <div class="txt-content">
                <p class="name">${product.title}</p>
                <p class="description">${product.description}</p>
                <div>
                <p class="price">${product.price}$</p>
                <button>Buy</button>
                </div>
            </div>
        </div>`
    }
    section.innerHTML = content;
}

fetchOffers();