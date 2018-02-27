//Puesto que yo soy una persona muy acelerada, con este reloj busco darle más tiempo a 
// mis actividades.
var ancho = 600;
var largo = 400;
var h = 0;
var m = 0;
var s = 0;
var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(ancho, largo);
  angleMode(DEGREES);
}

function draw() {
  background(21, 2, 54);

  quad(100, 300, 150, 70, 450, 100, 400, 300);
	
  // Por la noche, muchas veces las personas pueden quedarse despiertas hasta tarde porque
  // piensan en la hora del día, no cuantas horas les quedan para descansar.  
  // El reloj después de las 9pm va a hacer una cuenta regresiva de cuantas horas te quedan 
  // para dormir, considerando que la hora a la que te vas a despertar van a ser las 6 
  if (hour() >= 21) {
    quad(50, 320, 100, 50, 550, 80, 500, 300);
    h = 29 - hour();
    m = 59 - minute();
    s = 60 - second();
    textFont('Bodoni MT');
    textSize(30);
    text('Todavía puedes dormir:', ancho / 4, largo / 3, 400, 300);
    textSize(50);
    text(h + ':' + m + ':' + s, ancho / 3, largo / 1.6);
	//Como el reloj es de 24 horas, programo una parte hasta las 24h y hora de las 0h hasta las 6
  } else if (hour() <= 6) {
    h = 6 - hour();
    m = 59 - minute();
    s = 60 - second();
    textFont('Bodoni MT');
    textSize(30);
    text('Todavía puedes dormir:', ancho / 3, largo / 1.5, 300, 300);
    textSize(50);
    text(h + ':' + m + ':' + s + ':', ancho / 3, largo / 1.6);
  }
  // Programo la hora del almuerzo puesto que las personas muchas veces no almuerzan por 
  // estar haciendo otras cosas. A la 1 pm del día, el reloj hace una cuenta regresiva 
  // de una hora 
  else if (hour() >= 13 && hour() < 14) {
    quad(50, 320, 100, 50, 550, 80, 500, 300);
    h = 13 - hour();
    m = 59 - minute();
    s = 60 - second();
    textFont('Bodoni MT');
    textSize(30);
    text('¡Ya vas por la mitad del día!, relajate y come tu almuerzo', ancho / 5, largo / 3.5, 400, 300);
    textSize(50);
    text(h + ':' + m + ':' + s, ancho / 3, largo / 1.5);
  } 
  // A las 5pm, el reloj te recuerda que aproveches la ultima luz del día para terminar
  // todo lo que tengas que hacer
  else if (hour() >= 17 && hour() < 18) {
    quad(50, 320, 100, 50, 550, 80, 500, 300);
    textFont('Bodoni MT');
    textSize(30);
    text('Aproveha la ultima luz del día', ancho / 5, largo / 2);
  } 
  // El resto del día, no debes preocuparte por la hora, simplemente haz lo que tengas que 
  // hacer sin posponer nada.
  else {
    quad(50, 320, 100, 50, 550, 80, 500, 300);
    textFont('Bodoni MT');
    textSize(30);
    text('No te preocupes por la hora', ancho / 5, largo / 2);
  }
}