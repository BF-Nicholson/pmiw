class Salida {
  constructor(posX, posY, tam) {
    this.posX = posX;
    this.posY = posY;
    this.tam = tam;
  }

  salidaDelVideojuego() {
    console.log("Dibujando salida en:", this.posX, this.posY);
    push();
    rectMode(CENTER);
    fill(0, 50, 200);
    rect(this.posX, this.posY, this.tam, this.tam);
    pop();
  }

  escapar(posXpj, posYpj, tamPj) {
    let distancia = dist(this.posX, this.posY, posXpj, posYpj);
    return distancia < this.tam / 2 + tamPj / 2;
  }
}
