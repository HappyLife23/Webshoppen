const all = document.querySelector('.all-btn');
const mensClothing = document.querySelector('.mens-clothing-btn');
const jewelery = document.querySelector('.jewelery-btn');

all.addEventListener('click', () => {
    filterCategories('all');
});
mensClothing.addEventListener('click', (e) => {
    filterCategories("men's clothing");
});
jewelery.addEventListener('click', (e) => {
    filterCategories('jewelery');
});

const filterCategories = (filterBtn)=>{
    if (filterBtn === 'all'){
        renderProducts(products);
    } else {
        const filteredProducts = products.filter((product) => {
            return product.category === filterBtn;
        });
        renderProducts(filteredProducts);
    };
}

const nav = document.querySelector('.nav');
nav.addEventListener('click', (e) => {
    all.style.backgroundColor = "#fab005";
    mensClothing.style.backgroundColor = "#fab005";
    jewelery.style.backgroundColor = "#fab005";
    e.target.style.backgroundColor = "#9a6d03";
});
