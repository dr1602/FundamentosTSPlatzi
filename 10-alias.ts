(()=>{

  // palabra reservada de Typescript
  // alias type
  type UserID = string | number;

  // en vez de dos puntos se usa igual

/*
  let userId: UserID;

  function greeting(userId: UserID) {
    // de acuerdo al if, activa el tipado requerido.
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`);
    }
  }
  */

  // asi se puede reutilizar el codigo

  // Literal types
  // let shirtSize: string;
  // para hacerlo mas sostenible
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  //para acotar el conjunto de strings se puede hacer lo siguiente.
  // let shirtSize: 'S' | 'M' | 'L' | 'XL';

  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  // shirtSize = 's'; // ERROR
  // como parte de los conjuntos de strings, puedo escribir cualquier string y sera valido
  // shirtSize = 'Midoriyama';

  function greeting(userId: UserID, size: Sizes) {
    if(typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`);
    }
  }

  greeting(1123, 'S');
  // greeting(`1123`, 'Massive'); // te marca el error


})();
