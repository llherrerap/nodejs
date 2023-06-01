// Definir la clase Rectangle
class Figura {
  constructor(color) {
    this.color = color;
  }

  // Método para calcular el área del rectángulo
  saludar(){
    return `Soy una figura de color ${this.color}`
  }
}

class Rectangulo extends Figura{

    // Método para calcular el área del rectángulo
    area(altura, base) {
      return altura * base;
    }
  
    // Método para calcular el perímetro del rectángulo
    perimetro(altura, base) {
      return 2 * (altura + base);
    }
  }
  
  // Exportar la clase Rectangle
  module.exports={
    Figura: Figura,
    Rectangulo: Rectangulo
}
  