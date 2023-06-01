//ejemplo para exportacion de funciones
function sumar(num1, num2) {
    return num1 + num2
}
function restar(num1, num2) {
    return num1 - num2
}
function multiplicar(num1, num2) {
    return num1 * num2
}
function dividir(num1, num2) {
    return num1 / num2
}

//exportacion de las funciones
module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir
}