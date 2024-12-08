class Benson {
  constructor() {
    this.posX = 30;
    this.posY = 30;
    this.tamPj = 30;
  }

  dibujar() {
    push();
    imageMode(CENTER);
    image(bensonsprite, this.posX, this.posY);
    pop();
  }

  Perseguir(posX, posY) {
    if (this.posX < posX) {
      this.posX += 0.9;
    } else if (this.posX > posX) {
      this.posX -= 0.9;
    }
    if (this.posY < posY) {
      this.posY += 0.9;
    } else if (this.posY > posY) {
      this.posY -= 0.9;
    }
  }

  Colisionar(posX_, posY_, tam_) {
    let distancia = dist(this.posX, this.posY, posX_, posY_);
    return distancia < tam_;
  }
}
