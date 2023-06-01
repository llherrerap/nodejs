// npm install mysql
const mysql = require('mysql');
const config = require("./config.js");

// Configuración de los parámetros de conexión a la base de datos
const connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
  });

//  El parametro queryCompletado se utiliza para manejar los resultados de la consulta a la base de datos.
const obtenerUsuarios = function (queryCompletado) {
    connection.query('SELECT * FROM personas', queryCompletado); // Consultar todos los usuarios en la base de datos
}

connection.connect((error) => { // Conectar a la base de datos
    if (error) {
        console.error('Error al conectar a la base de datos: ', error); // Imprimir mensaje de error en la consola
    }
});

module.exports = { obtenerUsuarios }; // Exportar la función para obtener usuarios