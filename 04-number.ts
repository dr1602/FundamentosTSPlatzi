(()=> {
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice', productPrice);

  let customerAge: number = 28;
  // customerAge = customerAge + '1'; //281 - forma incorrecta
  customerAge = customerAge + 1;
  console.log('customerAge', customerAge);

  let productInStock: number;
  console.log('productInStock', productInStock);

  if (productInStock > 10) {
    console.log('Is greater');
  }

  let discount = parseInt('90');
  console.log('discount ', discount);

  if (discount <= 200) {
    console.log('apply');
  } else {
    console.log('not apply');
  }

  let hex = 0xfff;
  console.log('hex', hex);

  let bin = 0b1010; // 10, por defecto lo traduce a decimal
  console.log('bin',bin);

  const myNumber: number = 10; // Number tiene que ver con objeto, no lo tipees en mayusc

  const rta = 1 + '234';
  console.log(rta);

}) ();

