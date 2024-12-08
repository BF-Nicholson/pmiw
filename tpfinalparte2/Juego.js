class Juego {
  constructor(cantidadParedes) {
    this.estado = "tutorial";
    this.nivel = 1;
    this.audioReproducido = false;
    this.crearPersonaje();
    this.crearSalida(600, 440, 40);
    this.Tutorial1 = new Tuto();
    this.bensons = [];
  }
  teclaPresionada() {
    if (this.estado === "jugando") {

      this.rigby1.teclaPresionada();
    }
  }

  siguienteNivel() {
    this.nivel++;

    if (this.nivel === 2) {
      this.bensons = [];
      for (let i = 0; i < 3; i++) {
        let x = random(50, width - 50);
        let y = random(50, height - 50);
        this.bensons.push(new Benson(x, y));
      }
    } else {
      this.bensons = [];
      let x = random(50, width - 50);
      let y = random(50, height - 50);
      this.bensons.push(new Benson(x, y));
    }

    this.crearSalida();
  }

  dibujar() {
    if (this.estado === "tutorial") {
      this.crearTutorial();
    } else if (this.estado === "creditos") {
      this.mostrarCreditos();
    } else if (this.estado === "jugando") {
      this.rigby1.dibujar();
      this.mordecai1.dibujar();

      for (let benson of this.bensons) {
        benson.dibujar();
        benson.Perseguir(this.rigby1.posX, this.rigby1.posY);

        if (benson.Colisionar(this.rigby1.posX, this.rigby1.posY, this.rigby1.tam)) {
          this.estado = "perdiste";
        }
      }

      this.benson1.dibujar();
      this.salida.salidaDelVideojuego();
      this.Perseguir();
      this.Salida();
    } else if (this.estado === "ganaste" || this.estado === "perdiste") {
      textSize(32);
      textAlign(CENTER, CENTER);
      fill(255);
      text(this.estado === "ganaste" ? "¡Ganaste!" : "Perdiste", width / 2, height / 2 - 50);

      this.mostrarReinicio();
    }
  }

  crearPersonaje() {
    this.rigby1 = new Rigby(200, height / 2, this);
    this.mordecai1 = new Mordecai();
    this.benson1 = new Benson();
  }

  crearSalida(posX = 600, posY = 440, tam = 40) {
    if (this.nivel === 2) {
      console.log("Creando salida para nivel 2");
      this.salida = new Salida(100, 100, tam);
    } else if (this.nivel === 1) {
      console.log("Creando salida para nivel 1");
      this.salida = new Salida(posX, posY, tam);
    }
  }

  crearTutorial() {
    this.Tutorial1.texto("Tutorial: Usa las flechas para moverte", width / 2, height / 3, 2, 255);
    this.Tutorial1.BotonDiseño(width / 2, height / 2, 120, 50, 100, "COMENZAR");
    if (this.Tutorial1.BotonPresionado(width / 2, height / 2, 120, 50)) {
      this.estado = "jugando";
    }

    this.Tutorial1.BotonDiseño(width / 2, height / 1.5, 120, 50, 150, "CRÉDITOS");
    if (this.Tutorial1.BotonPresionado(width / 2, height / 1.5, 120, 50)) {
      this.estado = "creditos";
    }
  }
  mostrarCreditos() {

    if (this.audioReproducido) {
      miCancion.stop();
      this.audioReproducido = false;
    }

    background(0);
    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Créditos", width / 2, height / 4);
    text("Nombre: Bautista Ferron Nicholson", width / 2, height / 2 - 20);

    this.Tutorial1.BotonDiseño(width / 2, height - 100, 150, 50, 255, "VOLVER");
    if (this.Tutorial1.BotonPresionado(width / 2, height - 100, 150, 50)) {
      this.estado = "tutorial";
    }
  }



  mostrarReinicio() {
    this.Tutorial1.BotonDiseño(width / 2, height / 1.3, 150, 50, 255, "Reiniciar");
    if (this.Tutorial1.BotonPresionado(width / 2, height / 1.3, 150, 50)) {
      this.reiniciarJuego();
    }
  }

  reiniciarJuego() {
    this.estado = "tutorial";
    this.nivel = 1;
    this.audioReproducido = false;
    this.crearPersonaje();
    this.crearSalida();
    this.bensons = [];
    this.Tutorial1 = new Tuto();
    console.log("Juego reiniciado: nivel 1");
  }

  Perseguir() {
    this.benson1.Perseguir(this.rigby1.posX, this.rigby1.posY);

    if (this.nivel === 2) {
      this.benson1.velocidad = 1.1;
    } else if (this.nivel === 1) {
      this.benson1.velocidad = 0.9;
    }
    if (this.benson1.Colisionar(this.rigby1.posX, this.rigby1.posY, this.rigby1.tam)) {
      this.estado = "perdiste";
    }

    this.mordecai1.seguirSinColision(this.rigby1.posX, this.rigby1.posY);
  }

  Salida() {
    if (this.salida.escapar(this.rigby1.posX, this.rigby1.posY, this.rigby1.tam)) {
      if (this.nivel < 2) {
        this.estado = "jugando";
        this.siguienteNivel();
      } else {
        this.estado = "ganaste";
      }
    }
  }
}
