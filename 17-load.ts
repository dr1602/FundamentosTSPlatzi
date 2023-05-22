// var _ = require('lodash');

//para traducir

import _ from 'lodash';

// TS ha creado modulos para agregar manualmente tipado a las librarerias

// se desaparece la alerta la instalar:  npm i --save-dev @types/lodash
// porque tipea el codigo

const data = [
  {
    username: 'Regina',
    role: 'admin'
  },
  {
    username: 'Lili',
    role: 'seller'
  },
  {
    username: 'Omar',
    role: 'seller'
  },
  {
    username: 'Rick',
    role: 'customer'
  }
]

// lodash puede agrupar por grupo en especifico

const rta = _.groupBy(data, (item) => item.role);

console.log(rta);
