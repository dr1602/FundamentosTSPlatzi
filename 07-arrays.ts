(()=>{
  let prices = [343,723,512,1603, 'micro', true];
  // prices.push('asas');
  // prices.push(true);
  // prices.push({});
  //tener cuidado con el tipado.

  prices.push(1619);
  console.log(prices);

  prices = [121,13212,3554];
  console.log(prices);

  let products = ['hola', true];
  products.push(false);
  // products.push(12);
  //tener cuidado con el tipado.

  let mixed: (number | string | boolean | Object) [] = ["hola",true];
  mixed.push(12);
  mixed.push(true);
  mixed.push('not this one man');
  // mixed.push({});
  // mixed.push([]);
  // tener cuidado con el tipado.
  // casi todos los elementos en JS son objects, con el calificativo Object, tambien te acepta tanto objects como arrays.

  let number = [121,13212,3554];

  number.map(item => item * 2);

  // let written = ['star'];

  // written.map(item => item * 2);
  // tener cuidado con el tipado.

})();
