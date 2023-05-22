(()=> {
  // let myNumber: number = undefined; // no puede ser undefined
  // let myString: string = null; // no puede ser nulo
  //  let myNull = null; // este es tipo any por inferencia de datos
  //  let myUndefined = undefined; // este es tipo any por inferencia de datos
  let myNull:null = null;
  let myUndefined:undefined = undefined;

  // myNull = Null; // seria raro no poder meter otro tipo de valores

  let myNumber: number | null = null; // hay frameworks de front end que tienen cosas en runtime como angular para evaluar componentes, que son dinamicos, que hasta que no cargue template como react y vue, ese valor va a ser nulo, una vez cargado se le asigna un valor
  myNumber = 72;

  // igual se puede hacer con un undefined

  let myString: string | undefined = undefined; // es raro tener un undefined
  myString = 'cadena de texto';

  function hi(name: string | null) { // es raro que se de, salvo casos particulares, asi que evalua muy bien el caso
    let hello = 'Hola';
    if (name) {
      hello += name;
    } else {
      hello += ' nobody';
    }
    console.log(hello);
  }

  hi(' Nicolas');
  hi(null);
  // hay una forma mas sencilla de poder hacer esto

  // utilizando el optional change
  function hiV2(name: string | null) { // es raro que se de, salvo casos particulares, asi que evalua muy bien el caso
    let hello = 'Hola';
    hello += name?.toUpperCase() || ' nobody'; // si te pone signo de interrogacion porque puede ser un nulo, el ? hace de bez de if
    console.log(hello);
  }

  hiV2(' Nicolas');
  hiV2(null);

})();
