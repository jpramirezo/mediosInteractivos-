var aleatorioX = 0;
var aleatorioY = 0;
var r = 0;
var g = 0;
var b = 0;
var holo;
var amplitud;
var y = 0;
var x = 0; 
var cambio; 
var cambio1;
var numero;

function preload(){
  holo = loadSound('Cancion.mp3');    
}
function setup() {
  createCanvas(400, 400);
  holo.loop();
  holo.jump(20);
  amplitud = new p5.Amplitude();
}
function draw(){
  background(0);
//Hago las variables que cambian dependiendo del nivel de la música
  var nivel = amplitud.getLevel();
  cambio = map(nivel, 0.0, 1.0, 20, 900);
  numero = map(nivel, 0.0, 1.0, 5, 100 );
  nivel = map(nivel, 0.0, 1.0, 20, 200 );
  noStroke();
// Hago un if que cada 9 frames me cree elipses con colores aleatorios en posiciones aleatorias
// El tamaño de estas elipses varia dependiendo del nivel de la musica al igual que el numero de elipses  
  if(frameCount % 9 == 0){
    for(i = 0; i < numero; i++){
      r = random(0,255);
      g = random(0,255);
      b = random(0,255);
      fill(r,g,b,100)
      aleatorioX = random(30,width - 30);
      aleatorioY = random(30,height - 30);
      ellipse(aleatorioX, aleatorioY, nivel);
    }
  } 
  
  // Creo 4 lineas curvas que van a tener una curvatura proporcional al nivel de la musica
  noFill();
  stroke(b,g,r);
  x = 0;
  y = 0;
  for (i = 0; i<6;i++){
    if( i %2 ==0){
      beginShape();
      curveVertex(5,0);
      curveVertex(5,0);
      curveVertex(100 + x + cambio, 300 + y);
      curveVertex(400,400);
      curveVertex(400,400);
      endShape();
    }else{
      beginShape();
      curveVertex(5,0);
      curveVertex(5,0);
      curveVertex(100 + x - cambio, 300 + y);
      curveVertex(400,400);
      curveVertex(400,400);
      endShape();
    }
    x += 40;
    y += -40;

  }
}
function mouseReleased(){
    if(holo.isPaused()){
      holo.play();  
    }else{
      holo.pause();  
    }
}