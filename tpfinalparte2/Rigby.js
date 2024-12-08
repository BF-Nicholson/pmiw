class Rigby {
  constructor(posX, posY, juego) {
    this.posX = posX;
    this.posY = posY;
    this.tam = 30;
    this.juego = juego;
  }

  dibujar() {
    push();
    imageMode(CENTER);
    image(rigbysprite, this.posX, this.posY);
    pop();
  }

  teclaPresionada() {
    if (keyCode === LEFT_ARROW) {
      this.moverIzquierda();
    } else if (keyCode === RIGHT_ARROW) {
      this.moverDerecha();
    } else if (keyCode === UP_ARROW) {
      this.moverArriba();
    } else if (keyCode === DOWN_ARROW) {
      this.moverAbajo();
    }
  }

  moverDerecha() {
    this.posX += 10;
  }
  moverIzquierda() {
    this.posX -= 10;
  }
  moverArriba() {
    this.posY -= 10;
  }
  moverAbajo() {
    this.posY += 10;
  }
}
