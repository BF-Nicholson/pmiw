function pantallas(){
 if (estado >= 1 && estado <= cimagenes) {
  image(imagenes[estado-1], 80, 0, 480, 480); 
 }
}

function pantalladeinicio(){
  textSize(20);
  if (estado ===1){
    fill(0, 50, 200);
    rect(0, 0, widthh, heightt);   
  }
}
