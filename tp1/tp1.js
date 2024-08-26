//Ferron Nicholson Bautista
//Comision 2
//Prof: Matias Jauregui
//imagen: F_42
//https://youtu.be/h6XYyOT88x8

let img;
let cant;
let tam;
let colorinador = 0;
let colorinador2 = 255;
let flashador;

function preload() {
  img = loadImage("./data/imagen.jpg");
}
function setup() {
  createCanvas(800, 400);
  background(0);
}


function draw() {

  tam = 400/cant;
  cant = 10;
  

  image(img, 0, 0);
  cuadrados();
  circulos();
  detener("Posicion X: ", mouseX, "Posicion Y: ", mouseY);
}
