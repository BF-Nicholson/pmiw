function botonperse(x, y, ancho, alto) {
  return mouseX > x && mouseX < x+ancho && mouseY > y && mouseY < y+alto;
}



function mousePressed() {
  if (estado === 1 && botonperse(250, 250, 150, 40)) {
    estado++;
  } else if (estado === 13 && botonperse (400, 410, 135, 50)) { //perdiste
    estado = 18;
  } else if (estado === 18 && botonperse (435, 420, 120, 30)) {
    estado = 20;
  } else if (estado === 20 && botonperse (85, 410, 130, 50)) {
    estado = 1;
  } else if (estado === 20 && botonperse (420, 410, 135, 50)) {
    estado = 2;
  } else if (estado === 5 && botonperse (150, 420, 120, 30)) { //final 3 : A trabajar...
    estado = 21;
  } else if (estado === 23 && botonperse (250, 250+70, 150, 40)) {
    estado = 1;
  } else if (estado === 13 && botonperse (250, 410, 135, 50)) {  //final 2 : En el espacio.
    estado = 19;
  } else if (estado === 20 && botonperse (85, 410, 130, 50)) {  //volver a jugar...
    estado = 1;
  } else if (estado === 20 && botonperse (420, 410, 135, 50)) {
    estado = 2;
  } else if (estado === 13 && botonperse (100, 410, 130, 50)) { //final 1 : A buscar chamba...
    estado++;
  } else if (estado === 17 && botonperse (435, 420, 120, 30)) {
    estado = 1;
  } else if (estado === 17 && botonperse (435, 420, 120, 30)) {
    estado = 2;
  } else if (estado > cimagenes && botonperse (250, 250, 150, 40)) {
    estado = 1; // reinicio
  } else if (botonsiguiente && botonperse (435, 420, 120, 30)) {
    estado++; //avanzar - siguiente
  }
}
