(()=>{

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJson(
    title: String,
    createdAt: Date, //Date no da alerta, a diferencia de Number, Object, String, Boolean, no usar ese tipo de asignaciones,
    stock: number,
    size: Sizes,
  ){
    return{
      title,
      createdAt,
      stock,
      size
    }
  }

  const producto1 = createProductToJson('P1', new Date(), 12, 'XL'); // te marca error si no envias todos los parametros
  console.log(producto1);
  console.log(producto1.title);
  console.log(producto1.stock);

  // forma del arrow function

  /*
  (parametros) => {
    return
  }

  se recomienda usar arrow functions, sobre todo por el this.
  */

  /*
  const createProductToJsonV2 = (
    title: String,
    createdAt: Date, //Date no da alerta, a diferencia de Number, Object, String, Boolean, no usar ese tipo de asignaciones,
    stock: number,
    size: Sizes | undefined, // por defecto sera undefined
  ) => {
    return{
      title,
      createdAt,
      stock,
      size
    }
  }

  const producto2 = createProductToJsonV2('P1', new Date(), 12, undefined); // te obliga a mandar undefined.
  console.log(producto1);
  console.log(producto1.title);
  console.log(producto1.stock);

  */

  const createProductToJsonV2 = (
    title: String,
    createdAt: Date, //Date no da alerta, a diferencia de Number, Object, String, Boolean, no usar ese tipo de asignaciones,
    stock: number,
    size?: Sizes, // por defecto sera undefined
  ) => {
    return{
      title,
      createdAt,
      stock,
      size
    }
  }

  const producto2 = createProductToJsonV2('P1', new Date(), 12); // te obliga a mandar undefined.
  // por defecto va dar undefined.
  console.log(producto2);
  console.log(producto2.title);
  console.log(producto2.stock);


})();
