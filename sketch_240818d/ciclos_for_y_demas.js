function cuadrados() {

  //decidi mapear la distancia del mouseX al grosor
  //del Stroke para poder generar algo mas artistico con eso, hice lo mismo con los circulos.

  var distancia= dist(0, 0, mouseX, mouseY);
  var flashador= map(mouseX, 0, width, 8, 0);

  if (distancia < 50) {
    return;
  }
