var pezF = [];
var pezM = [];
var pezH = [];
var osoF = [];
var osoM = [];
var osoH = [];
var castorF = [];
var castorM = [];
var castorH = [];
var venadoF = [];
var venadoM = [];
var venadoH = [];
var arbol = [];
var ancho1 = 40;
var x;
var y;
var tamano;
var genero;
var contador = 0;
var contadorpeces = 0;
// Variables que permiten el control de nacimientos
var miracomobeben = [];
var represa = [];
var cueva = [];
var cuernos = [];
var holo = 0;
var holo1 = 0;
var holo2 = 0;
var holo3 = 0;

function setup() {
  createCanvas(1000, 600);

  // Inicializo los castores
  for (i = 0; i < 4; i++) {
    castorF[i] = new castores(1);
    represa[i] = false;
  }
  for (i = 0; i < 4; i++) {
    castorM[i] = new castores(2);
  }

  // Inicializo los peces   
  for (i = 0; i < 5; i++) {
    pezF[i] = new peces(1);
    miracomobeben[i] = false;
  }
  for (i = 0; i < 5; i++) {
    pezM[i] = new peces(2);
  }

  // Inicializo los osos 
  for (i = 0; i < 2; i++) {
    osoF[i] = new osos(1);
    cueva[i] = false;
  }
  for (i = 0; i < 2; i++) {
    osoM[i] = new osos(2);
  }

  // Inicializo los venados   
  for (i = 0; i < 4; i++) {
    venadoF[i] = new venados(1);
    cuernos[i] = false;
  }
  for (i = 0; i < 4; i++) {
    venadoM[i] = new venados(2);
  }

  // Inicializo los peces macho  
  for (i = 0; i < 5; i++) {
    arbol[i] = new arboles();
  }

}

function draw() {
  background(11, 150, 14);
  noStroke();
  fill(0, 0, 255);
  quad(0, 260, 0, 450, 260, 450, 260, 260);
  ellipse(400, 350, 600, 300);
  fill(30);
  ellipse(90, 90, 140)
  contador += 1;

  //Crias de animales

  for (i = 0; i < castorF.length; i++) {
    for (j = 0; j < castorM.length; j++) {
      if (dist(castorF[i].x, castorF[i].y, castorM[j].x, castorM[j].y) < 40 && represa[i] == false) {
        castorH[holo1] = new castoresH(int(random(1, 3)));
        represa[i] = true;
        holo1 += 1;
      }
    }
  }

  if (pezH.length < 6) {
    for (i = 0; i < pezF.length; i++) {
      for (j = 0; j < pezM.length; j++) {
        if (dist(pezF[i].x, pezF[i].y, pezM[j].x, pezM[j].y) < 20) {
          miracomobeben[i] = true;
        }
      }
    }
  }

  for (i = 0; i < osoF.length; i++) {
    for (j = 0; j < osoM.length; j++) {
      if (dist(osoF[i].x, osoF[i].y, osoM[j].x, osoM[j].y) < 50 && cueva[i] == false) {
        osoH[holo2] = new ososH(int(random(1, 3)));
        cueva[i] = true;
        holo2 += 1;
      }
    }
  }

  for (i = 0; i < venadoF.length; i++) {
    for (j = 0; j < venadoM.length; j++) {
      if (dist(venadoF[i].x, venadoF[i].y, venadoM[j].x, venadoM[j].y) < 40 && cuernos[i] == false) {
        venadoH[holo3] = new venadosH(int(random(1, 3)));
        cuernos[i] = true;
        holo3 += 1;
      }
    }
  }

  // cria pez: cuando el macho y la hembra estan cerca hace que la hembra vaya al nacimiento del rio para hacer nacer al 
  // bebe pez 
  for (i = 0; i < pezF.length; i++) {
    if (miracomobeben[i] == true) {
      pezF[i].x += -1;
    }
    if (pezF[i].x <= 7 && miracomobeben[i] == true) {
      pezH[holo] = new pecesH(int(random(1, 3)));
      miracomobeben[i] = false;
      holo += 1;
    } else if (pezF[i].x < 200 && miracomobeben[i] == false) {
      pezF[i].x += 0.5;
    }
  }

  // Creación de animales
  //Creo los castores con todas sus propiedade
  for (i = 0; i < castorF.length; i++) {
    castorF[i].dibujarse();
    castorF[i].moverse();
  }
  for (i = 0; i < castorM.length; i++) {
    castorM[i].dibujarse();
    castorM[i].moverse();
  }
  if (castorH != []) {
    for (i = 0; i < castorH.length; i++) {
      castorH[i].dibujarse();
      castorH[i].moverse();
      castorH[i].crecer();
    }
  }

  //Creo los peces con todas sus propiedade
  for (i = 0; i < pezF.length; i++) {
    pezF[i].dibujarse();
    pezF[i].moverse();
  }
  for (i = 0; i < pezM.length; i++) {
    pezM[i].dibujarse();
    pezM[i].moverse();
  }

  if (pezH != []) {
    for (i = 0; i < pezH.length; i++) {
      pezH[i].dibujarse();
      pezH[i].moverse();
      pezH[i].crecer();
    }
  }

  //Creo los osos con todas sus propiedade
  for (i = 0; i < osoF.length; i++) {
    osoF[i].dibujarse();
    osoF[i].moverse();
  }
  for (i = 0; i < osoM.length; i++) {
    osoM[i].dibujarse();
    osoM[i].moverse();
  }
  if (osoH != []) {
    for (i = 0; i < osoH.length; i++) {
      osoH[i].dibujarse();
      osoH[i].moverse();
      osoH[i].crecer();
    }
  }

  //Creo los venados con todas sus propiedade
  for (i = 0; i < venadoF.length; i++) {
    venadoF[i].dibujarse();
    venadoF[i].moverse();
  }
  for (i = 0; i < venadoM.length; i++) {
    venadoM[i].dibujarse();
    venadoM[i].moverse();
  }
  if (venadoH != []) {
    for (i = 0; i < venadoH.length; i++) {
      venadoH[i].dibujarse();
      venadoH[i].moverse();
      venadoH[i].crecer();
    }
  }

  // Creación arboles
  for (i = 0; i < arbol.length; i++) {
    arbol[i].dibujarse();
  }

  //Osos se comen a castores
  for (i = 0; i < osoF.length; i++) {
    for (j = 0; j < castorF.length; j++) {
      if ((dist(castorF[j].x, castorF[j].y, osoF[i].x, osoF[i].y) < 50)) {
        castorF.splice(j, 1);
      }
    }
  }
  for (i = 0; i < osoF.length; i++) {
    for (j = 0; j < castorM.length; j++) {
      if ((dist(castorM[j].x, castorM[j].y, osoF[i].x, osoF[i].y) < 50)) {
        castorM.splice(j, 1);
      }
    }
  }
  for (i = 0; i < osoM.length; i++) {
    for (j = 0; j < castorF.length; j++) {
      if ((dist(castorF[j].x, castorF[j].y, osoM[i].x, osoM[i].y) < 50)) {
        castorF.splice(j, 1);
      }
    }
  }
  for (i = 0; i < osoM.length; i++) {
    for (j = 0; j < castorM.length; j++) {
      if ((dist(castorM[j].x, castorM[j].y, osoM[i].x, osoM[i].y) < 50)) {
        castorM.splice(j, 1);
      }
    }
  }

  //Osos se comen venados hijos
  for (i = 0; i < osoF.length; i++) {
    for (j = 0; j < venadoH.length; j++) {
      if ((dist(venadoH[j].x, venadoH[j].y, osoF[i].x, osoF[i].y) < 50)) {
        venadoH.splice(j, 1);
      }
    }
  }
  for (i = 0; i < osoM.length; i++) {
    for (j = 0; j < venadoH.length; j++) {
      if ((dist(venadoH[j].x, venadoH[j].y, osoM[i].x, osoM[i].y) < 50)) {
        venadoH.splice(j, 1);
      }
    }
  }

  //Osos se comen peces hijos
  for (i = 0; i < osoF.length; i++) {
    for (j = 0; j < pezF.length; j++) {
      if ((dist(pezF[j].x, pezF[j].y, osoF[i].x, osoF[i].y) < 50)) {
        pezF.splice(j, 1);
      }
    }
  }
  for (i = 0; i < osoF.length; i++) {
    for (j = 0; j < pezM.length; j++) {
      if ((dist(pezM[j].x, pezM[j].y, osoF[i].x, osoF[i].y) < 50)) {
        pezM.splice(j, 1);
      }
    }
  }
  for (i = 0; i < osoM.length; i++) {
    for (j = 0; j < pezF.length; j++) {
      if ((dist(pezF[j].x, pezF[j].y, osoM[i].x, osoM[i].y) < 50)) {
        pezF.splice(j, 1);
      }
    }
  }
  for (i = 0; i < osoM.length; i++) {
    for (j = 0; j < pezM.length; j++) {
      if ((dist(pezM[j].x, pezM[j].y, osoM[i].x, osoM[i].y) < 50)) {
        pezM.splice(j, 1);
      }
    }
  }
  //Castor come arbol
  for (i = 0; i < castorF.length; i++) {
    for (j = 0; j < arbol.length; j++) {
      if (dist(castorF[i].x, castorF[i].y, arbol[j].x, arbol[j].y + 160) < 40) {
        arbol[j].sercomido();
      }
    }
  }
  for (i = 0; i < castorM.length; i++) {
    for (j = 0; j < arbol.length; j++) {
      if (dist(castorM[i].x, castorM[i].y, arbol[j].x, arbol[j].y + 160) < 40) {
        arbol[j].sercomido();
      }
    }
  }

  //Lucha de venados
  for (i = 0; i < venadoM.length; i++) {
    for (j = 1; j < venadoM.length; j++) {
      if (dist(venadoM[i].x, venadoM[i].y, venadoM[j].x, venadoM[j].y) < 30 && (i != j)) {
        venadoM.splice(j, 1);
      }
    }
  }

  if (mouseIsPressed == true) {
    venadoM[0].x = mouseX;
    venadoM[0].y = mouseY;
  }

  for (i = 0; i < osoF.length; i++) {
    if (dist(osoF[i].x, osoF[i].y, 400, 350) < 170) {
      if (osoF[i].x > 180) {
        osoF[i].x += -10;
      }
      if (osoF[i].x < 700) {
        osoF[i].x += 10;
      }
      if (osoF[i].y > 200) {
        osoF[i].y += -10;
      }
      if (osoF[i].y < 500) {
        osoF[i].y += 10;
      }
    }
  }
}

//Función castores adultos
function castores(_genero) {
  this.x = random(0, 900);
  this.y = random(0, 600);
  this.tamano = 30;
  this.genero = _genero;

  this.dibujarse = function() {
    if (this.genero == 1) {
      fill(176, 65, 30);
    } else {
      fill(79, 19, 14);
    }
    stroke(1);
    ellipse(this.x, this.y, this.tamano);
    ellipse(this.x + this.tamano / 2, this.y, this.tamano / 2);
    fill(50, 20, 10);
    ellipse(this.x - this.tamano / 1.5, this.y, this.tamano, this.tamano / 2);
  }

  this.moverse = function() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

}

//Función castores hijos
function castoresH(_genero) {
  this.x = random(400, 800);
  this.y = random(260, 500);
  this.tamano = 10;
  this.genero = _genero;

  this.dibujarse = function() {
    if (this.genero == 1) {
      fill(176, 65, 30);
    } else {
      fill(79, 19, 14);
    }
    stroke(1);
    ellipse(this.x, this.y, this.tamano);
    ellipse(this.x + this.tamano / 2, this.y, this.tamano / 2);
    fill(50, 20, 10);
    ellipse(this.x - this.tamano / 1.5, this.y, this.tamano, this.tamano / 2);
  }

  this.moverse = function() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  this.crecer = function() {
    if (this.tamano < 30) {
      this.tamano += 0.01;
    }
  }
}

//Función peces adultos
function peces(_genero) {
  this.x = random(200, 600);
  this.y = random(280, 420);
  this.tamano = 15;
  this.genero = _genero;

  this.dibujarse = function() {
    if (this.genero == 1) {
      fill(255, 190, 190);
    } else {
      fill(255, 80, 80);
    }
    triangle(this.x, this.y, this.x + this.tamano, this.y - 5, this.x + this.tamano, this.y + 5);
    ellipse(this.x, this.y, this.tamano, this.tamano / 2);

  }

  this.moverse = function() {
    if (this.y < 260) {
      this.y = 260;
    } else if (this.y > 450) {
      this.y = 450;
    } else if (this.x < 0) {
      this.x = 4;
    } else if (this.x > 700) {
      this.x = 700;
    }
    if (this.x < 200 && this.genero == 2) {
      this.x = 210;
    }

    this.x = this.x + random(2, -2);
    this.y = this.y + random(2, -2);
  }
}

//Función peces hijos
function pecesH(_genero) {
  this.x = 10;
  this.y = 330;
  this.tamano = 5;
  this.genero = _genero;

  this.dibujarse = function() {
    if (this.genero == 1) {
      fill(255, 190, 190);
    } else {
      fill(255, 80, 80);
    }
    triangle(this.x, this.y, this.x + this.tamano, this.y - 5, this.x + this.tamano, this.y + 5);
    ellipse(this.x, this.y, this.tamano, this.tamano / 2);
  }

  this.moverse = function() {
    this.x = this.x + random(2, -2);
    this.y = this.y + random(1, -1);

    if (this.y < 260) {
      this.y = 265;
    } else if (this.y > 400) {
      this.y = 445;
    } else if (this.x < 0) {
      this.x = 4;
    } else if (this.x > 700) {
      this.x = 695;
    }
    if (this.x < 200 && this.genero == 2) {
      this.x = 210;
    }
  }

  this.crecer = function() {
    if (this.tamano < 15) {
      this.tamano += 0.01;
    }
  }
}

// Función de los osos
function osos(_genero) {
  this.x = random(0, 800);
  this.y = random(0, 260);
  this.tamano = 30;
  this.genero = _genero;

  this.dibujarse = function() {
    if (this.genero == 1) {
      fill(30, 12, 6);
    } else {
      fill(0);
    }
    rect(this.x, this.y, -this.tamano, -this.tamano);
    quad(this.x - this.tamano, this.y - this.tamano, this.x - this.tamano - 13, this.y + 7 - this.tamano, this.x - this.tamano - 7, this.y + this.tamano / 2.5, this.x - this.tamano, this.y + this.tamano / 2);
    quad(this.x, this.y - this.tamano, this.x + 15, this.y - this.tamano, this.x + 5, this.y + this.tamano / 2.5, this.x, this.y + this.tamano / 2);
    beginShape();
    vertex(this.x + 15, this.y - this.tamano);
    vertex(this.x + 17, this.y - 1 - this.tamano);
    vertex(this.x + this.tamano, this.y + 2 - this.tamano);
    vertex(this.x + this.tamano + 3, this.y + 5 - this.tamano);
    vertex(this.x + this.tamano * 1.1 + 7, this.y + 9 - this.tamano);
    vertex(this.x + this.tamano * 1.1 + 5, this.y - this.tamano / 2.6);
    vertex(this.x + this.tamano + 3, this.y - 12);
    vertex(this.x + this.tamano, this.y - this.tamano / 2.6);
    vertex(this.x + 10, this.y - this.tamano / 2.6);
    endShape();
  }

  this.moverse = function() {
    //Si estan en la cueva hibernan
    if ((this.x >= 30 && this.x <= 150) && (this.y >= 30 && this.y <= 150) && contador <= 1000) {
      if (contador >= 1000) {
        contador = 0;
        this.x = 200;
        this.y = 160;
      } else if (contador < 1000) {
        this.x = 90;
        this.y = 90;
      }
    } else {
      this.x = this.x + random(-2, 2);
      this.y = this.y + random(-2, 2);
    }
  }
}

// Función osos hijos
function ososH(_genero) {
  this.x = random(0, 800);
  this.y = random(0, 260);
  this.tamano = 10;
  this.genero = _genero;

  this.dibujarse = function() {
    if (this.genero == 1) {
      fill(30, 12, 6);
    } else {
      fill(0);
    }
    rect(this.x, this.y, -this.tamano, -this.tamano);
    quad(this.x - this.tamano, this.y - this.tamano, this.x - this.tamano - 13, this.y + 7 - this.tamano, this.x - this.tamano - 7, this.y + this.tamano / 2.5, this.x - this.tamano, this.y + this.tamano / 2);
    quad(this.x, this.y - this.tamano, this.x + 15, this.y - this.tamano, this.x + 5, this.y + this.tamano / 2.5, this.x, this.y + this.tamano / 2);
    beginShape();
    vertex(this.x + 15, this.y - this.tamano);
    vertex(this.x + 17, this.y - 1 - this.tamano);
    vertex(this.x + this.tamano, this.y + 2 - this.tamano);
    vertex(this.x + this.tamano + 3, this.y + 5 - this.tamano);
    vertex(this.x + this.tamano * 1.1 + 7, this.y + 9 - this.tamano);
    vertex(this.x + this.tamano * 1.1 + 5, this.y - this.tamano / 2.6);
    vertex(this.x + this.tamano + 3, this.y - 12);
    vertex(this.x + this.tamano, this.y - this.tamano / 2.6);
    vertex(this.x + 10, this.y - this.tamano / 2.6);
    endShape();
  }

  this.moverse = function() {
    //Si estan en la cueva hibernan
    if ((this.x >= 30 && this.x <= 150) && (this.y >= 30 && this.y <= 150) && contador <= 1000) {
      if (contador >= 1000) {
        contador = 0;
        this.x = 200;
        this.y = 160;
      } else if (contador < 1000) {
        this.x = 90;
        this.y = 90;
      }
    } else {
      this.x = this.x + random(-2, 2);
      this.y = this.y + random(-2, 2);
    }
  }

  this.crecer = function() {
    if (this.tamano < 30) {
      this.tamano += 0.01;
    }
  }
}

// Función de los venados
function venados(_genero) {
  this.x = random(0, 900);
  this.y = random(400, 600);
  this.tamano = 20;
  this.genero = _genero;

  this.dibujarse = function() {
    if (this.genero == 1) {
      fill(217, 150, 0);
    } else {
      fill(133, 93, 0);
    }
    //Cuerpo
    rect(this.x, this.y, -this.tamano - 10, -this.tamano);
    triangle(this.x - this.tamano - 10, this.y - this.tamano, this.x - this.tamano - 22, this.y + 7 - this.tamano, this.x - this.tamano - 10, this.y + this.tamano + 5);
    triangle(this.x, this.y - this.tamano, this.x, this.y + this.tamano + 5, this.x + 10, this.y - this.tamano);
    triangle(this.x, this.y - this.tamano, this.x, this.y + this.tamano / 2, this.x + 16, this.y - this.tamano * 2);
    beginShape();
    vertex(this.x + 8, this.y - this.tamano * 2 - 5);
    vertex(this.x + 20, this.y - this.tamano * 2 - 5);
    vertex(this.x + 16, this.y - this.tamano * 2 + 15);
    vertex(this.x + 12, this.y - this.tamano * 2 + 15);
    endShape();
    if (this.genero == 2) { //Cuernos
      fill(0);
      beginShape();
      vertex(this.x + 8, this.y - this.tamano * 2 - 5);
      vertex(this.x, this.y - this.tamano * 2.5);
      vertex(this.x - 5, this.y - this.tamano * 3.5);
      vertex(this.x + 5, this.y - this.tamano * 2.5);
      vertex(this.x + 13, this.y - this.tamano * 2 - 5);
      endShape();
      beginShape();
      vertex(this.x + 15, this.y - this.tamano * 2 - 5);
      vertex(this.x + 23, this.y - this.tamano * 2.5);
      vertex(this.x + 18, this.y - this.tamano * 3.5);
      vertex(this.x + 28, this.y - this.tamano * 2.5);
      vertex(this.x + 20, this.y - this.tamano * 2 - 5);
      endShape();
    }
  }

  this.moverse = function() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }
}

// Función de venados hijos
function venadosH(_genero) {
  this.x = random(0, 900);
  this.y = random(400, 600);
  this.tamano = 6;
  this.genero = _genero;

  this.dibujarse = function() {
    if (this.genero == 1) {
      fill(217, 150, 0);
    } else {
      fill(133, 93, 0);
    }
    //Cuerpo
    rect(this.x, this.y, -this.tamano - 10, -this.tamano);
    triangle(this.x - this.tamano - 10, this.y - this.tamano, this.x - this.tamano - 22, this.y + 7 - this.tamano, this.x - this.tamano - 10, this.y + this.tamano + 5);
    triangle(this.x, this.y - this.tamano, this.x, this.y + this.tamano + 5, this.x + 10, this.y - this.tamano);
    triangle(this.x, this.y - this.tamano, this.x, this.y + this.tamano / 2, this.x + 16, this.y - this.tamano * 2);
    beginShape();
    vertex(this.x + 8, this.y - this.tamano * 2 - 5);
    vertex(this.x + 20, this.y - this.tamano * 2 - 5);
    vertex(this.x + 16, this.y - this.tamano * 2 + 15);
    vertex(this.x + 12, this.y - this.tamano * 2 + 15);
    endShape();
    if (this.genero == 2) { //Cuernos
      fill(0);
      beginShape();
      vertex(this.x + 8, this.y - this.tamano * 2 - 5);
      vertex(this.x, this.y - this.tamano * 2.5);
      vertex(this.x - 5, this.y - this.tamano * 3.5);
      vertex(this.x + 5, this.y - this.tamano * 2.5);
      vertex(this.x + 13, this.y - this.tamano * 2 - 5);
      endShape();
      beginShape();
      vertex(this.x + 15, this.y - this.tamano * 2 - 5);
      vertex(this.x + 23, this.y - this.tamano * 2.5);
      vertex(this.x + 18, this.y - this.tamano * 3.5);
      vertex(this.x + 28, this.y - this.tamano * 2.5);
      vertex(this.x + 20, this.y - this.tamano * 2 - 5);
      endShape();
    }
  }

  this.moverse = function() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  this.crecer = function() {
    if (this.tamano < 20) {
      this.tamano += 0.01;
    }
  }
}

//Función árboles
function arboles() {
  this.x = random(700, 950);
  this.y = random(0, 460);
  this.tamano = 40;

  this.dibujarse = function() {
    if (this.tamano != 0) {
      fill(125, 63, 10);
      stroke(1);
      quad(this.x, this.y, this.x + this.tamano, this.y, this.x + this.tamano, this.y + 160, this.x, this.y + 160);
    }
    if (this.tamano >= 7) {
      noStroke();
      fill(0, 255, 0);
      ellipse(this.x, this.y, 60);
      ellipse(this.x + this.tamano, this.y, 60);
      ellipse(this.x + this.tamano / 2, this.y - 20, 60);
    }
    if (this.tamano < 40) {
      this.tamano += 0.01;
    } else {
      fill(255, 0, 0);
      ellipse(this.x, this.y, 10);
      ellipse(this.x + this.tamano, this.y, 10);
      ellipse(this.x + this.tamano / 2, this.y - 20, 10);
    }

  }
  //Castor come arbol1
  this.sercomido = function() {
    if (this.tamano > 0) {
      this.tamano += -0.5;
    }
  }
}