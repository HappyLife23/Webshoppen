const product = [
    { id: 1, name: 'T-shirt', category: 'kläder', price: 100 },
    { id: 2, name: 'Hörlurar', category: 'elektronik', price: 250 },
    { id: 3, name: 'Keps', category: 'kläder', price: 50 },
    { id: 4, name: 'Mobiltelefon', category: 'elektronik', price: 500 }
]; 
// ta bort detta när jag är klar, finns redan..

const initialValue = 0;

const sum = product.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
}, 0);

let shoppingCart = [];


// console.log(sum);
