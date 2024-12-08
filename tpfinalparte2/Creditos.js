class Creditos {
  constructor(posX, posY, tamPj) {
    this.posX = posX;
    this.posY = posY;
    this.tamPj = tamPj;
  }

  dibujar(creditos, posXtext, posYtext) {
    noStroke();
    text(creditos, posXtext, posYtext);
  }
}
