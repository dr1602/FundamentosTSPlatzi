import { subDays, format } from 'date-fns';

// como no manda error, quiere decir que esta bien configurada para TS
// subDay hace resta de fechas.
// tiene casi documentacion instantanea. dice que la fecha recibe fecha o numero.

const date = new Date (2008, 1, 13); // 0 = enero, 1 = febrero
const rta = subDays(date, 30);

const str = format(rta, 'yy/MM/dd');

console.log(str);

