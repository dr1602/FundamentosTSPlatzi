(()=>{
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '';

  myDynamicVar = 'Hola';
  //myDynamicVar. // no sabe que tipo de datos, por eso no te da recomendaciones.
  const rta = (myDynamicVar as string).toLowerCase; // con este cast, forzo el tipado.

  console.log(rta);

  //esta es otra forma de hacer un cast
  myDynamicVar = 1212;
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log(rta2);

  // propiedad de uso generico de TypeScript para transformar una variable.

})();

// se aconseja que el any no sea utilizado. se fuerza que sea restrictivo y te ponen que marques el tipo de dato.
// typescript es de forma incremental, conforme lo aumentamos, podemos usar el any, pues estamos emepzando de forma incremental.
// cambiamos archivos, pero si no sabemos el tipo de daot o causa errores el typado, el any, en los primeros pasos puede servir.
// pero con m[as conocimiento se puede colocar el restrictivo
// es mejor primero suave y despues ir con las demas reglas, sobre todo con equipos maduros y consolidados.
// any lo pueden mandar las librerias que no esten tipadas, que no lo necesiten o que no esten actualziadas.
