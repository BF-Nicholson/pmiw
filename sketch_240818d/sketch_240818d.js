let cant;
let tam;
let img;


function preload(){
 img = loadImage("./data/imagen.jpg"); 
}
function setup() {
  createCanvas(800, 400);
  background(0);
  
}


function draw() {
  image(img, 0, 0);
   cuadrados();
}
