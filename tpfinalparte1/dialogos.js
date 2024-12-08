function dialogos(sW, s, f, tS, tA, e, cI, textos){
  
  strokeWeight(sW);
  stroke(s);
  fill(f);
  textSize(tS);
  textAlign(tA);
  
  if (e >= 2 || e <= cI) {
   text(textos[e - 2], width/8, 350); 
  }
}
