// Importar las funciones de Lodash
const { shuffle, uniq, sample, sortBy } = require('lodash');

// Función para mezclar un array
function mezclarArray(array) {
  return shuffle(array);
}

// Función para obtener un elemento aleatorio de un array
function obtenerElementoAleatorio(array) {
  return sample(array);
}

// Función para ordenar un array de números de forma ascendente
function ordenarArrayNumeros(array) {
  return sortBy(array);
}

function quitarDuplicados(array) {
    return uniq(array);
  }

// Ejemplo de uso de las funciones de Lodash

const numeros = [5, 2, 8, 1, 4];
const frutas= ['manzana', 'banana', 'pera', 'naranja','manzana'];
console.log('Array mezclado:', mezclarArray(numeros));
console.log('Elemento aleatorio:', obtenerElementoAleatorio(frutas));
console.log('Array ordenado:', ordenarArrayNumeros(numeros));
console.log('Array sin duplicados:', quitarDuplicados(frutas));