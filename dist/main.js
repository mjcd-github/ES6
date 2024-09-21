"use strict";

var _cliente = require("./cliente.js");
var _impuestos = require("./impuestos.js");
var impuesto = new _impuestos.Impuestos(1000, 200);
var cliente = new _cliente.Cliente("Manuel", impuesto);
var resultado = cliente.calcularImpuesto();
var nombre = cliente.nombre;
console.log("El impuesto que debe pagar ".concat(nombre, " es de: $").concat(resultado, " pesos"));