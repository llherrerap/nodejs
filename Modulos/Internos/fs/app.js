const fs = require('fs');

// Leer archivo de forma sincrónica
try {
  const contenido = fs.readFileSync('archivo.txt', 'utf8');
  console.log('Contenido del archivo:', contenido);
} catch (error) {
  console.error('Error al leer el archivo:', error);
}