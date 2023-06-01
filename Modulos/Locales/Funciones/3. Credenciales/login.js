const validar = function(username, password) {
    if (username == "desarrollador" && password=="backend1234") {
        return `Bienvenido, ${username}!`
    }
    else{
        return `Credenciales incorrectas, intentelo de nuevo`
    }
}

module.exports={
    validar:validar
}