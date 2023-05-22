// ahora la parte del servicio, los metodos para poder incluir y operar los datos
// nos pide que importamos la informacion en el tipo product, para que no marque error, se requiere importar la informacion

import { Product } from './product.model';

// solo importamos Product porque es lo que requerimos, tambien podria ser Size pero ahora no es necesario.

// Se tiene que inicialziar

export const products: Product[] = [];

export const createProduct = (data: Product) => {
  products.push(data);
}

// con export definimos que se puede usar el codigo de forma externa.
// se define como se incertan datos en el array

export const calcStock = (): number => {
  let total = 0;
  products.forEach((item)=> {
    total += item.stock;
  });
  return total;
}


