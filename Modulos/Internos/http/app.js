// Importar el módulo 'http'
// Comienza por importar el módulo HTTP incorporado en Node.js. Puedes hacerlo de la siguiente manera:
const http = require('http');
// Esto te permitirá utilizar las funcionalidades proporcionadas por el módulo HTTP.

// Crear un servidor HTTP
// Crea un servidor HTTP utilizando el método createServer del módulo HTTP. Pasa una función de callback que se ejecutará cada vez que se reciba una solicitud en el servidor. La función de callback debe tener dos parámetros: el objeto de solicitud (req) y el objeto de respuesta (res).
const server = http.createServer((req, res) => {
  // Establecer el encabezado de respuesta HTTP
//   Dentro de la función de callback, configura la respuesta que se enviará al cliente. Puedes establecer el código de estado, los encabezados y el contenido de la respuesta. Por ejemplo, para enviar una respuesta con el código de estado 200 (OK) y el texto "Hola, mundo!" como contenido, puedes hacer lo siguiente:
  res.setHeader('Content-Type', 'text/plain');
//   El método res.write() se utiliza en Node.js para escribir datos en el cuerpo de la respuesta HTTP que se enviará al cliente.
  res.write("Hola mundooo! Este es mi primer servidor\n")
  // Obtener información de la solicitud en este caso el metodo que esta utilizado
  const method = req.method;
//   Escribe el metodo que se esta utilizando
  res.write(`Metodo: ${method}\n`);
  // Enviar la respuesta final al cliente
  res.end('Fin de la respuesta!');
});

// Especifica el número de puerto en el que deseas que el servidor escuche las solicitudes.
const port = 3000;
// Luego, utiliza el método listen del objeto del servidor para iniciar la escucha en ese puerto.
// Iniciar el servidor
server.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
  console.log(`Tu aplicacion esta corriendo en http://localhost:${port}`);
});