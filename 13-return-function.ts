(()=>{
  const calcTotal = (prices: number[]): string => {
    // inferia que daba un numero de respuesta pero ahora se le pide explicitamente
    // pero puede fallar si le pides un dato distinto, como string en este caso
    let total = 0;
    prices.forEach((item)=> {
      total += item;
    })
    return total.toString();
    // return total.toString();
  }

  // ahora una funcion sin retorno, una funcion de efecto secundario, que produce la llamada de otra
  const printTotal = (prices: number[]): void => {

    // se le puede mandar explicitamente void para que no retorne nada.
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
    // return rta;

  };

  const rta = printTotal([1,2,3,4,5,6,7,8,9]);
  //como, tecnicamente no retorna nada, es del tipo void

})();
