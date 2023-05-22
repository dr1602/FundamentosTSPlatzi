(() => {
  let myProductName: string = 'Product 1';

  // se tiene información contextual, se infiere que es string, motor de inferencia.

  let myProductPrice = 123;

  // el motor de inferencia dice que es un número, y le asigna un tipo de dato.

  myProductName = 'change';

  // no es normal cambiar el tipo de variable

  myProductName.toLocaleLowerCase();

  // esto solo sucede para los strings

  myProductPrice.toFixed();

  //nos ayuda a autocompletar mejor.

  const myProductStock = 1000;

  // ya no es un numero, ahora simplemente es mil o 1000
  // se puede cambiar el valor de numberStoc? no porque es una constante

  myProductStock = 200;

  const myProductName2 = 'Product 1';

  myProductName2 = 'mas';

  // ahora trabajamos con el motor de inferencia.

  // vamos a ver en que casos se debe hacer explicito
}) ();






