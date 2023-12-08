let items = [
    { id: 1, name: 'T-shirt', category: 'kläder', price: 100 },
    { id: 2, name: 'Hörlurar', category: 'elektronik', price: 250 },
    { id: 3, name: 'Keps', category: 'kläder', price: 50 },
    { id: 4, name: 'Mobiltelefon', category: 'elektronik', price: 500 }
];

const all = document.querySelector('.all-btn');
const mensClothing = document.querySelector('.mens-clothing-btn');
const jewelery = document.querySelector('.jewelery-btn');

all.addEventListener('click', (e) => {
    filterCategories();
    console.log(e.target.value);
});
mensClothing.addEventListener('click', (e) => {
    filterCategories();
    console.log(e.target.value);
});
jewelery.addEventListener('click', (e) => {
    filterCategories();
    console.log(e.target.value);
});

const filterCategories = (filterBtn)=>{
    const filteredProducts = items.filter((product) => {
        console.log(product.category);
        return product.category === filterBtn;
    });
}

