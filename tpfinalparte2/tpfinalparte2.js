//Bautista Ferron Nicholson, Com 2, Legajo 119029/8
//https://youtu.be/fPDA-qVhxwM
let objJuego;
let miCancion;

function preload() {
  rigbysprite = loadImage("data/rigbysprite.png");
  mordecaisprite = loadImage("data/mordecaisprite.png");
  bensonsprite = loadImage("data/bensonsprite.png");
  fondoDelJuego = loadImage("data/fondoDelJuego.jpg");
  miCancion = loadSound("data/cancion1.mp3");
}

function setup() {
  createCanvas(640, 480);
  objJuego = new Juego(0);
}

function draw() {
  background(0);
  image(fondoDelJuego, 0, 0, width, height);
  textSize(24);
  fill(255);
  textAlign(RIGHT);
  text("Nivel: " + objJuego.nivel, width - 20, 40);

  objJuego.dibujar();
}
function keyPressed() {
  if (objJuego.estado === "jugando") {
    objJuego.teclaPresionada();
  }
}
 
function mousePressed() {

  if (!miCancion.isPlaying()) {
    miCancion.loop();
    objJuego.audioReproducido = true; // musica como reproducida
  }

  if (objJuego.estado === "tutorial") {
    objJuego.crearTutorial();
  }
  if (objJuego.estado === "ganaste" || objJuego.estado === "perdiste") {
    objJuego.mostrarReinicio();
  }
}
