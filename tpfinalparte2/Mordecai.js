class Mordecai {
  constructor() {
    this.posX = 200;
    this.posY = 260;
    this.tam = 30;
    this.distanciaMinima = 40;
  }

  dibujar() {
    push();
    imageMode(CENTER);
    image(mordecaisprite, this.posX, this.posY);
    pop();
  }

  seguirSinColision(posX, posY) {
    let distanciaX = abs(this.posY - posY);


    if (distanciaX > this.distanciaMinima) {
      if (this.posY < posY) {
        this.posY += 1.2;
      } else if (this.posY > posY) {
        this.posY -= 1.2;
      }
    }
    this.posX = posX
  }
}
