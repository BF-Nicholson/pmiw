function cuadrados() {

  let distancia= dist(0, 0, mouseX, mouseY);
  let flashador= map(mouseX, 0, width, 8, 0);

  if (distancia < 50) {
    return distancia;
  }
  for (var x=0; x<cant; x++) {
    for (var y=0; y<cant; y++) {
      if ((x+y)%2==0) {
        fill(colorinador);
      } else {
        fill (colorinador2);
      }
      push();
      print(distancia);
      stroke(random(0, 200), random(0, 150), random(0, 150));
      strokeWeight(flashador);
      rect(x*tam+width/2, y*tam, tam, tam);
      pop();
    }
  }
}

function circulos() {


  for (let j = 0; j<cant; j++) {
    for (let m = 0; m<cant; m++) {
      if ((j+m)%2==0) {
        fill(255);
      } else {
        fill(0);
      }

      let grosor= map(mouseY, 0, height, 0, 10);
      let colors= map(mouseY, 0, height, 0, random(0, 255));
      push();
      translate(tam/2, tam/2);

      stroke(random(0, 100), colors, random(0, 255));
      strokeWeight(grosor);
      ellipse (j*tam+width/2, m*tam, tam/2*0.8, tam/2*0.8);
      pop();
    }
  }
}

function mouseDragged() {

  colorinador2= map(mouseX+mouseY, 0, width, 0, 255);
}

function keyPressed() {
  if (key == 'r') {

    mouseX = 800;
    mouseY = 0;
    colorinador = 0;
    colorinador2 = 255;
  }
}

function detener(verificadorX, x, verificadorY, y) {
  if (mouseX<50 && mouseY <50) {
    console.log(verificadorX + x, verificadorY + y);
    return;
  }
}
