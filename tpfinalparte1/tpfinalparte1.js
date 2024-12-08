//https://youtu.be/BEgGQ4p7yb8
//Bautista Ferron Nicholson, Com 2, Legajo 119029/8
let estado = 1;
let cimagenes = 22;
let imagenes = [];
let myfuckingfont;
let dialogo = [];
let reproduccionAudio = false;
let musica;
let decisiones = [];

function preload() {

  for (let i= 0; i < cimagenes; i++) {
    imagenes[i] = loadImage("data/"+i+".jpeg")
  }
  myfuckingfont = loadFont('data/OpenSans-Light.ttf');
  dialogo = loadStrings('data/dialogos.txt');
  soundFormats('mp3');
  musica = loadSound('data/cancion1.mp3');
  decisiones[5] = ['Seguir Jugando', 'Volver\naltrabajo']
}

function setup() {
  background(0);
  createCanvas(640, 480);
  print(imagenes);
  textFont(myfuckingfont);
  musica.loop();
  
}


function draw() {
  background(0);
  pantalladeinicio();
  pantallas(estado, cimagenes, imagenes);
  botonperse();
  botonesreinicio();
  botonpainiciar();
  botonsiguiente();
  botoneleccion();
  elecciontriple(),
  dialogos(2, 0, 255, 21, LEFT, estado, cimagenes, dialogo); 
  
 
  print("mouseX:"+mouseX);
  print("mouseY:"+mouseY);
  print("estado:"+estado); //print de estados para trabajar mejor
}
