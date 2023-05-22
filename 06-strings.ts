(()=>{
  let productTitle = 'My amazing product';
  // productTitle = null;
  // productTitle = () => {};
  // productTitle = 123;
  productTitle = 'My amazin product changed';
  console.log('productTitle', productTitle);

  const productDescription = "That's it. This amazing product consists of the keys to heaven.";
  console.log("productDescription", productDescription);
  // en ese tipo de casos, se usan las comillas dobles para el string, y la simple para lo escrito.

  let productPrice = 100;
  let isNew: boolean = false;

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;
  // es una forma de concatenar variables sensillas y usar multilineas

  console.log(summary);

  const myString: string = '';
})();


