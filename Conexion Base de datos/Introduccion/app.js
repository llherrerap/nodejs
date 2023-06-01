// npm install mysql
const mysql = require("mysql");
const config = require("./config.js");

// Configuración de los parámetros de conexión a la base de datos
const connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
});

// Establecer la conexión a la base de datos
connection.connect((error) => {
  if (error) {
    console.error("error al conectar a la base de datos: ", error);
    return;
  }
  // Ejecutar una consulta SELECT
  connection.query("SELECT * FROM personas", (error, results) => {
    if (error) {
      console.error("error al ejecutar la consulta: ", error);
      return;
    }

    console.log("Resultados de la consulta: ", results);
  });

  // Cerrar la conexión a la base de datos después de ejecutar la consulta
  connection.end((error) => {
    if (error) {
      console.erroror("error al cerrar la conexión: ", error);
      return;
    }

    console.log("Conexión cerrada correctamente.");
  });
  console.log("Conexión exitosa a la base de datos.");
});
