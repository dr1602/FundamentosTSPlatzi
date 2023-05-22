// ahora utilizaremos todo el programa con programacion modular

import { createProduct, calcStock, products } from './product.services';

createProduct({
  name: "Thor's hammer",
  createdAt: new Date(2015, 1, 1),
  stock: 2,
});

createProduct({
  name: "Iron Man's Armour",
  createdAt: new Date(2018, 6, 13),
  stock: 15,
  size: 'L',
});

/*
addProduct({
  title: "Thor's hammer",
  createdAt: new Date(2015, 1, 1),
  stock: 2,
});

addProduct({
  title: "Iron Man's Armour",
  createdAt: new Date(2018, 6, 13),
  stock: 15,
  size: 'L',
});
*/


console.log(products);

const total = calcStock();
console.log(total);

// el poder de hacer tipado de esas estructuras

// al cambiar el tipado, te marca el error en todos los archivos, esa es su magia.
