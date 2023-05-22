(()=>{
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  // definiremos la estructura del objeto

  type Product = {
    title: String,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }
  // ahora tenemos un tipado especial que se puede reutilizar
  // ahora el tipado representa una estructura mas compleja

  const products: Product[] = [];
  // con este cambio decimos que realmente es un array de objetos que cumplen con el tipado.

  const addProduct = (data: Product) => {
    products.push(data);
  }

  addProduct({
    title: "Thor's hammer",
    createdAt: new Date(955, 1, 1),
    stock: 1,
    // no agrego el parametro size porque es un parametro opcional
  })

  addProduct({
    title: "Iron Man's Armour",
    createdAt: new Date(2010, 6, 13),
    stock: 3,
    size: 'L',
    // no agrego el parametro size porque es un parametro opcional
  })

  console.log(products);
  products.push({
    title: "Scarlet Witch's Crown",
    createdAt: new Date(2020,9,14),
    stock: 1,
    size: 'S',
  })

  console.log(products);

  // no es valido porque ahora cualquier objeto debe de cumplir con la estructura
  // products.push({});

  // ahora me permite insertar cualquier tipo de dato
  // ahora marca error, porque no cumple con la estructura de producto o definida
  // products.push(3141592365);
  // products.push(`3141592365`);
})();
