function dialogo(){
  strokeWeight(2);
  stroke(0);
  fill(255);
  textSize(21);
  
  if (estado >= 2 || estado <= cimagenes) {
   text(dialogos[estado - 2], 120, 380); 
  }
}
