const figuras = require("./figuras.js");

const rectanguloUno = new figuras.Rectangulo("Rojo")
console.log(rectanguloUno.area(4,5))
console.log(rectanguloUno.saludar())

const figuraUno = new figuras.Figura("Amarillo")
console.log(figuraUno.saludar())