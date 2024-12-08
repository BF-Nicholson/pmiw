function botonpainiciar() {
  if (estado === 1) {
    botonglobal(255, 0, width/2, height/2, 190, 40, 'Comenzar Aventura', 20)
  }
}

function botonesreinicio() {
  if (estado === 23) {
    
    botonglobal(255, 0, width/2, height/2, 190, 40, 'REINICIAR', 20);
    botonglobal(255, 0, width/2, height/2+50,190, 40, 'VOLVER AL INICIO', 20);
  }
}

function botonsiguiente() {
  if (estado >= 2 && estado <= cimagenes && estado !== 5 && estado !==13 && estado !== 20) {
    botonglobal(255, 50, 430, 420, 120, 30, 'Siguiente', 16);
  }
}
function botoneleccion() {
  if (estado === 5 || estado === 20 ) {
    botonglobal(255, 50, 214, 410, 130, 50, 'NO', 20);
    botonglobal(255, 50, 428, 410, 130, 50, 'SI', 20);
  }
}
function elecciontriple() {
  if (estado === 13 ) {
    botonglobal(255, 50, width/4, 410, 130, 50, 'FINAL 1', 20);
    botonglobal(255, 50, width/2, 410, 130, 50, 'FINAL 2', 20);
    botonglobal(255, 50, width/4+width/2, 410, 130, 50, 'PERDER', 20);
  }
}

function botonglobal(f, s, x, y, rw, rh, t, ts) {
  fill(f);
  stroke(s);
  rectMode(CENTER);
  rect(x, y, rw, rh);
  fill(20);
  textSize(ts);
  noStroke();
  textAlign(CENTER, CENTER);
  text( t, x, y);
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
