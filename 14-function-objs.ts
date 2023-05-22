(()=>{

  // const login = (email: string, password: string)=>

  const login = (data: {email: string, password: number})=> {
    console.log(data.email,data.password);
    // ahora recibimos la informacion como parametros de la variable data.
  }

  //login(`david@david.org`,`12345`);

  // tiene muchos parametros, por lo que podemos mejor encapsularlo en objeto.

  login({
    email:`david@david.org`,
    password: 12345,
  });

  // ahora trabajemos en un objeto mas grande

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];
  // despues veremos como tiparlo de la mejor manera

  const addProduct = (data: {
    title: String,
    createdAt: Date,
    stock: number,
    size?: Sizes,
    // aqui tambien puede haber parametros opcionales, en notacion de objeto
  }) => {
    products.push(data);
  }

  addProduct({
    title: "Thor's hammer",
    createdAt: new Date(1000, 1, 1),
    stock: 1,
    // no agrego el parametro size porque es un parametro opcional
  })

  addProduct({
    title: "Iron Man's Armour",
    createdAt: new Date(2010, 6, 13),
    stock: 3,
    size: 'L',
    // no agrego el parametro size porque es un parametro opcional
  })

  console.log(products);

})();
