function pantallas(estadopantallas, cantidadimagenes, imgs){
 if (estadopantallas >= 1 && estado <= cantidadimagenes) {
  image(imgs[estadopantallas-1], 80, 0, 480, 480); 
 }
}

function pantalladeinicio(){
  textSize(20);
  if (estado ===1){
    fill(0, 50, 200);
    rect(0, 0, width, height);   
  }
}
