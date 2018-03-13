var distancia = 70;
var btn0x = 20;
var btn1x = btn0x + distancia;
var btn2x = btn1x + distancia;
var btn3x = btn2x + distancia;

var y = 10;
var y1 = 60;

var tamaño = 40;
var tamaño1 = 20;
var filtro = 10;
var col = 10;

var imagen;
var contador = 0;
var contador2 =0;
var col;
var transparencia = 0;

var p= 0;
var j = 495;
var i = 2;

var mascara;
var mascara1;
var rotar = 0;

var estanque;
function preload() {
  imagen = loadImage('jardin.jpg');
  mascara = loadImage('pez2.png');
  mascara1 = loadImage('jardin.jpg');
  estanque = loadImage('estanque.jpg');
}
function setup() {

  createCanvas(500, 500);
  background(255, 255, 255);
  angleMode(DEGREES);
  mascara1.mask(mascara);
  
}

function draw() {
  if(filtro == 10){
    image(imagen, 0, 60, 500, 500);   
  }
  fill(0);
  strokeWeight(1);
  stroke(1);
  rect(0, 0, 500, 60);
  
  // Botones filtros 
  
  fill(255)
  rect(btn0x, y, tamaño, tamaño);

  rect(btn1x, y, tamaño, tamaño);

  rect(btn2x, y, tamaño, tamaño);

  rect(btn3x, y, tamaño + 40, tamaño);
  textSize(30);
  stroke(0);
  strokeWeight(3); 
  text('reset', btn3x +5, y1-20);

  if (mouseIsPressed) {

    // Selección de filtro 

    if (mouseX > btn0x && mouseX < btn0x + tamaño &&
      mouseY > y && mouseY < y + tamaño) {
      filtro = 0;
    }

    if (mouseX > btn1x && mouseX < btn1x + tamaño &&
      mouseY > y && mouseY < y + tamaño) {
      filtro = 1;
      if (contador == 1) {
        transparencia = 0;
        contador = 0;
      }
      contador += 1;
    }

    if (mouseX > btn2x && mouseX < btn2x + tamaño &&
      mouseY > y && mouseY < y + tamaño) {
      filtro = 2;
      p = 0;
      j = 495;
    }
// Carga la imagen inicial 
    if (mouseX > btn3x && mouseX < btn3x + tamaño +40 &&
      mouseY > y && mouseY < y + tamaño) {
      image(imagen, 0, 60, 500, 500);
      transparencia = 0;
      filtro = 10;
    }
  }
  // Al seleccionar el filtro numero 1, se pinta un cuadrado que toma el RBG rojo del pixel que cada vez que se pinta se hace más visible.
  // al hacer click otra vez en el filtro se vuelve a hacer transparente.
  if (filtro == 1) {
    for (var f = mouseY-10; f<mouseY+10; f += 2) {  
      for (var c = mouseX-10; c<mouseX+10; c += 2) {  
        col = get(c, f);
        var rojo = red(col);
        fill(rojo, transparencia);
        noStroke();
        rect(c, f, 2, 2);
      }
    }
  }
  transparencia += 1;

  // Al seleccionar el filtro numero 2, se aumenta el tamaño de los pixeles y se hace un recorrido hasta llenar
  // la imagen completamente de pixles más grandes. Se repite este preceso aumentando cada vez más el tamañano de estos
  if (filtro == 2) {
    col = get(p, j);
    var azul = blue(col);
    fill(col);
    noStroke();
    rect(p, j, 5 + i, 5 + i);

    p += 5 + i;
    if (p >= 500) {
      j += -5 - i;
      p = 0;
    }
    if (j <= 60) {
      j = 495;
      i += 3;
    }
  }
  
  // Siguiendo con la temática de la imagen, utilizo unos peces coi en formato PNG para aplicar una mascara 
  // cambio el fonde de la pantalla para que sea un estanque 
  if (filtro == 0){
    background(estanque);
    rect(btn3x, y, tamaño + 40, tamaño);
    text('reset', btn3x +5, y1-20);
    push();
    translate(250,300);
    rotate(rotar);
    image(mascara1, 0, 0, 250, 250);    
    pop();
  }
  rotar += 0.5;
}
