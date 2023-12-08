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
    renderProducts();
}

function renderProducts() {
    console.log(products[0]);
    
}