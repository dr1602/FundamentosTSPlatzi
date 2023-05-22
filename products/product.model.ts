// a JS no le interesa el .model, solo le es relevante el .ts pero es un identificador visual para nosotros

type Sizes = 'S' | 'M' | 'L' | 'XL';

/*
type Product = {
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes
}
*/

type Product = {
  name: string,
  createdAt: Date,
  stock: number,
  size?: Sizes
}

// ahora en lugar de usar una funcion anonima que se usa sola, ahora usaremos modulos
// tambiien se definira que son exportables. (que se pueden importar o llamar desde otro archivo)
// con export, TS ya sabe que se requiere la importacion para usar la info del archivo
// ya tiene un scope implicito

// Esta es otra forma de exportar

export { Sizes, Product, }

