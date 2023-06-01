const config = require("./config.js")
const http = require("http")
const fs = require("fs")

// Creamos el servidor. el servidor siempre tiene una solicitud y una respuesta
const server = http.createServer((req, res) => {
    // Si la url es la principal / y el metodo es GET entonces lee el archivo index.html
    if (req.url === "/" && req.method === "GET") {
        fs.readFile("index.html", (error, data) => {
            // Si no hay un error entonces muestra el contenido
          if (!error) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            return res.end();
          }else{
            // Si hay un error en la programacion establece un error en el servidor
            res.writeHead(500, { "Content-Type": "text/html" });
            res.write("<h1>Error interno del servidor!! :(</h1>");
            return res.end();
          }
          
        });
      } else if(req.url==="/enviado" && req.method==="POST"){
        fs.readFile("enviado.html", "utf8", (error, data) => {
          if (!error) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            return res.end();
          }else{
            // Si hay un error en la programacion establece un error en el servidor
            res.writeHead(500, { "Content-Type": "text/html" });
            res.write("<h1>Error interno del servidor!! :(</h1>");
            return res.end();
          }
      })
      // Cuando el enlace no es ni / ni /enviado entonces es error del cliente
      } else {
        fs.readFile("error-404.html", "utf8", (error, data) => {
          if (!error) {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write(data);
            return res.end();
          }else{
            // Si hay un error en la programacion establece un error en el servidor
            res.writeHead(500, { "Content-Type": "text/html" });
            res.write("<h1>Error interno del servidor!! :(</h1>");
            return res.end();
          }
      })
    }
})

server.listen(config.port, config.host, () => {
    console.log(`El servidor esta corriendo en http://${config.host}:${config.port}`)
})