//importacion de la clase
const animales = require("./animales.js");

//crear clases
const srGato = new animales.Gato("Sr gato")
const rocky = new animales.Perro("Rocky")
const nemo = new animales.Pez("Nemo")

//hablar
srGato.hablar()
rocky.hablar()
nemo.hablar()
