getAPI();

const products = [];

async function getAPI() {
    for (let i = 1; i <= 8; i++) {
        const response = await fetch(`https://fakestoreapi.com/products/${i}`);
        products.push(await response.json());
        if (response.ok) {
            console.log('ok');
        } else {
            console.log('response code: ' + response.ok);
        }
    }
    renderProducts(products);
}

function renderProducts(products) {
    const productContioner = document.getElementById('product-container');
    productContioner.innerHTML = '';
    products.forEach(product => {
        productContioner.innerHTML += `
        <div class="products">
        <img class="product-img" src="${product.image}" alt="${product.category}">
        <div>
            <h3 class="product-title">${product.title}</h3>
            <p class="product-description">${product.description}</p>
            <p class="product-price">${product.price}</p>
            <div>
                <div class="add-btn">
                    <button>-</button>
                    <button class="product-amount-btn">0</button>
                    <button>+</button>
                </div>
                <button class="product-add-btn">add</button>
            </div>
        </div>
    </div>
    `
    });
    addProduct();
}