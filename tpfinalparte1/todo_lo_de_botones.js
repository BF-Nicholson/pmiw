function botonpainiciar() {
  if (estado === 1) {
    fill(255);
    stroke(0);
    rect(235, 250, 190, 40);
    fill(20);
    textSize(20);
    noStroke();
    text('Comenzar Aventura', 240, 275);
  }
}

function botonpavolverainiciar() {
  if (estado === 23) {
    fill(255);
    stroke(0);
    rect(250, 250+70, 150, 40);
    fill(20);
    textSize(20);
    noStroke();
    text('Volver al Inicio', 265, 275+70);
  }
}

function botonsiguiente() {
  if (estado >= 2 && estado <= cimagenes && estado !== 5 && estado !==13 && estado !== 20) {
    fill (255, 130);
    stroke(50);
    rect( 435, 420, 120, 30);
    fill(0);
    noStroke();
    textSize(16);
    text('Siguiente', 460, 440);
  }
}
function botoneleccion(){
 if (estado === 5 || estado === 20 ) {
   stroke(50);
   fill(255, 200);
   rect (85, 410, 130, 50); //a
   rect (420, 410, 135, 50); //b
   text ("NO", 135, 440);
   text ("SI", 475, 440);
 }
}
function elecciontriple(){
 if (estado === 13 ) {
   stroke(50);
   fill(255, 200);
   rect (100, 410, 130, 50); //a
   rect (250, 410, 135, 50); //b
   rect (400, 410, 135, 50); //c
   text ("FINAL 1", 135, 440);
   text ("FINAL 2", 285, 440);
   text ("PERDER", 430, 440);
 }
}
function botonreiniciar() {
  if (estado > cimagenes || estado === 23) {
    fill(255);
    stroke(0);
    rect(250, 250, 150, 40);
    fill(20);
    textSize(20);
    noStroke();
    text( 'Reiniciar', 290, 275);
  }
}



//una tecla es un boton, por lo tanto lo pongo en este apartado
function keyPressed() {
   if (key === 'p' || key === 'P') {
    if (!reproduccionAudio) {
     musica.play();
     reproduccionAudio = true;
    }
   }
   if (key === 'o' || key === 'O') {
     musica.stop();
     reproduccionAudio = false;
    
   }
  
}
