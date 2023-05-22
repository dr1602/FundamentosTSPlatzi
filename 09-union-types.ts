(()=>{
  let userId: string | number;
  userId = 1212;
  console.log(userId);

  userId = 'Mondongo';
  console.log(userId);

  // normalmante se soportan de dos a 3.
  // como se maneja el dinamismo y coherencia de datos/

  function greeting(myText: string | number) {
    // de acuerdo al if, activa el tipado requerido.
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`);
    } else {
      console.log(`number ${myText.toFixed(1)}`); //aqui ya define que es numero
    }
  }

    greeting('Flask');
  console.log(greeting);

  greeting(343.436236492);
  console.log(greeting);

  //greeting(null); // aqui ya no se puede insertar un null porque ya se predefinio
  //greeting({{}}); // aqui ya no se puede insertar un null porque ya se predefinio

})();


// con el if se puede reactivar el tipado estricto pero de forma dinamica.
