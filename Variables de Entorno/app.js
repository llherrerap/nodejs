const config = require('./config.js');
const http = require("http");

const server = http.createServer((req, res) => {
    //funciones de request
    // Obtener la URL de la solicitud
    const url = req.url;
    // Obtener el método HTTP de la solicitud
    const method = req.method;
    // Imprimir la URL y el método en la consola del servidor
    console.log('URL:', url);
    console.log('Método:', method);
    //funciones de response
    // Configurar el código de estado y los encabezados de la respuesta
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    //enviar un mensaje al cliente
    res.write("<h1>Hola mundo!</h1>");
    // Escuchar el evento 'finish' en la respuesta
    // El método on se utiliza en el código para registrar un evento
    // on se utiliza para registrar el evento 'finish' en el objeto res. El evento 'finish' se dispara cuando la respuesta HTTP se ha enviado completamente al cliente.
    res.on('finish', () => {
        console.log('La respuesta se ha enviado completamente.');
    });
    // Finalizar la respuesta y
    res.end();
});

server.listen(config.PORT, config.HOST, () => {
    console.log(`El servidor está corriendo en http://${config.HOST}:${config.PORT}`);
});