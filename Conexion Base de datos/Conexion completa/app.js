const config = require("./config.js");
const http = require("http")
const { obtenerUsuarios } = require('./conection.js'); // Importar función para obtener usuarios desde la base de datos

// Establecer la conexión a la base de datos
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8"); // Establecer el tipo de contenido de la respuesta como HTML
  if(req.url === "/" && req.method === "GET"){
    res.statusCode = 200; // Establecer código de estado 500 (Error interno del servidor)
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write("<h1>Pagina de Inicio</h1>")
    res.write("<a href='/usuarios'>Pagina de Inicio</a>")
    res.end(); //Fin
  }
  else if (req.url === "/usuarios" && req.method === "GET") {
    // Si la ruta es '/usuarios' y el método es GET
    obtenerUsuarios((error, results) => {
      // Obtener los usuarios desde la base de datos
      if (!error) {
        res.statusCode = 200; // Establecer código de estado 200 (OK)
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.write("<h1>Usuarios</h1>"); // Escribir encabezado de la tabla
        res.write('<table border="1">'); // Iniciar la tabla
        res.write(
          "<tr><th>Cedula</th><th>Nombre</th><th>Apellido</th><th>Edad</th><th>Fecha Nacimiento</th></tr>"
        ); // Escribir encabezados de columna

        results.forEach((usuario) => {
          // Recorrer la lista de usuarios
          res.write(
            `<tr><td>${usuario.cedula}</td><td>${usuario.nombre}</td><td>${
              usuario.apellido
            }</td><td>${usuario.edad}</td><td>${
              usuario.fecha_nacimiento
            }</td></tr>`
          ); // Escribir una fila por cada usuario
        });

        res.write("</table>"); // Cerrar la tabla
        res.end(); // Finalizar la respuesta
      } else {
        res.statusCode = 500; // Establecer código de estado 500 (Error interno del servidor)
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end("<h1>Error inerno del servidor al obtener los usuarios</h1>"); // Enviar mensaje de error al cliente
      }
    });
  } else {
    res.statusCode = 404; // Establecer código de estado 404 (No encontrado)
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end("<h1>Ruta no encontrada</h1>"); // Enviar mensaje de error al cliente
  }
});

server.listen(config.puerto, config.ip, () => {
  console.log(
    `El servidor está corriendo en http://${config.ip}:${config.puerto}`
  );
});
