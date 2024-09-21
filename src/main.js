import {Cliente} from "./cliente.js";
import {Impuestos} from "./impuestos.js";


const impuesto = new Impuestos(1000, 200);
const cliente = new Cliente("Manuel", impuesto);

const resultado = cliente.calcularImpuesto();
const nombre = cliente.nombre;

console.log(`El impuesto que debe pagar ${nombre} es de: $${resultado} pesos`);

