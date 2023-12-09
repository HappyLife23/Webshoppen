let cart = [];

function addProduct() {
    const titles = document.querySelectorAll('.product-title');
    const prices = document.querySelectorAll('.product-price');
    const amounts = document.querySelectorAll('.product-amount');
    const addBtns = document.querySelectorAll('.product-add-btn');
    const addBtnsArray = Object.values(addBtns);

    addBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = addBtnsArray.indexOf(e.target);
            const amount = amounts[index].value;
            const price = prices[index].value;
            const title = titles[index].value;
            addToCart(amount, price, title);
        })
    });
}

function addToCart(amount, price, title) {
    const choisedProduct = {
        "title": title, 
        "price": price,
        "amount": amount
    }
    cart.push(choisedProduct);
}