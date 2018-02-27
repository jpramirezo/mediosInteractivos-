var ancho = 600;
var largo = 500;
var dir = 1;
var dir1 = -1;
var holo = 0;
var holo1 = 0;
var m = 23;
var l = 0;
var r
var g
var b
var segundo = 0;

function setup() {
  createCanvas(ancho, largo);
  angleMode(DEGREES);
}

function draw() {
  holo = 0;
  holo1 = 0;
  m = 22;
  l = 2.3;
  dir = 1;
  dir1 = 1;
  r = 0;
  g = 0;
  b = 255;
  segundo += 5;
  background(0);


  push();
  translate(width / 2, height / 2);
  rotate(-3);

  // Hago un for que va a hacer 60 rectangulos que van a corresponder a los 
  // 60 segundos del relog. Además voy a ir graduando el color para completar 
  // un "color wheel". Utilizo variables de dirección y tamaño de los triangulos.
  holo1 = -225;
  for (i = 1; i <= 60; i++) {
    if (i == 16 || i == 46) {
      dir = -dir;
    }
    if (i == 31) {
      dir1 = -dir1;
    }
    if (i > 1 && r == 0) {
      g = g + 30;
    }
    if (g >= 255) {
      b = b - 30;
    }
    if (b <= 0) {
      r = r + 30;
      b = 0;
    }
    if (r >= 255) {
      g = g - 30;
      r = 255;
    }
    if (g <= 0) {
      b = b + 30;
      g = 0;
    }
    if (b >= 255 && r != 0) {
      r = r - 30;
    }

    fill(r, g, b);
    triangle(0, 0, holo, holo1, holo + m, holo1 + l);
    holo = holo + 16 * dir;
    holo1 = holo1 + 15.5 * dir1;
    m = m - 1.5 * dir1;
    l = l + 1.5 * dir;
  }

  pop();
	
  //Programo las manejillas del reloj con lineas. Cambio el origen del canvas para 
  //tener una mejor referencia
  
  push();
  strokeWeight(3);
  stroke(255);
  translate(width / 2, height / 2);
  rotate(second() * 6);
  rect(0, 0, 0, -245);
  pop();

  push();
  strokeWeight(4);
  stroke(255);
  translate(width / 2, height / 2);
  rotate(minute() * 6);
  rect(0, 0, 0, -150);
  pop();

  push();
  strokeWeight(5);
  stroke(255);
  translate(width / 2, height / 2);
  rotate((hour() * 30) + (minute() / 2));
  rect(0, 0, 0, -80);
  pop();
}