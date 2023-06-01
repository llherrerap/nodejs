const numeros = [1, 2, 3, 4, 5];

// Deconstrucción del arreglo
const [a, b, ...resto] = numeros;

console.log(a); // 1
console.log(b); // 2
console.log(resto); // [3, 4, 5]