class Tuto {
  constructor() {
  }
  texto(texto, x, y, strokeAncho, relleno) {
    push();
    strokeWeight(strokeAncho);
    fill(relleno);
    textAlign(CENTER, CENTER);
    text(texto, x, y);
    pop();
  }
  BotonDiseño(posX, posY, ancho, alto, relleno, texto) {
    push();
    rectMode(CENTER);
    fill(relleno);
    rect(posX, posY, ancho, alto);
    textAlign(CENTER, CENTER);
    fill(0);
    textSize(20);
    text(texto, posX, posY);
    pop();
  }
  BotonPresionado(posX, posY, ancho, alto) {
    return mouseX > posX - ancho / 2 &&
      mouseX < posX + ancho / 2 &&
      mouseY > posY - alto / 2 &&
      mouseY < posY + alto / 2 &&
      mouseIsPressed;
  }
}
