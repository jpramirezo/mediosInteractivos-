var dummy;
var dummy1;
var perdedor = 0;
var ganador = 0;
var perdedor1 = 0;

var osoF = [];
var castorF = [];
var arbol = [];
var crecer = [];
var hay = [];

var estado = 0;
var INTRO = 1;
var JUEGO = 2;
var WIN = 3;
var LOSE = 4;
var LOSE1 = 5;
var INS = 6;

var x = [];
var y = [];
var tamano;
var genero;

var madera = 0;
var ancho = 40;
var radio = 400;
var posX = 20;
var posY = 0;
var represa = 30;

var portada;
var instrucciones;

function preload(){
  //Cargo las imagenes de la portada y de las instrucciones
	portada = loadImage('portada.jpg');
  instrucciones = loadImage('instrucciones.jpg');
}

function setup() {

  createCanvas(windowWidth, windowHeight);

  // Inicializo los castores
  for (i = 0; i < 1; i++) {
    castorF[i] = new castores(1);
    hay[i] = false;
  }

  // Inicializo los osos 
  for (i = 0; i < 10; i++) {
    osoF[i] = new osos(1);
  }
  
  // Inicializo los árboles
  for (i = 0; i < 4; i++) {
    arbol[i] = new arboles();
  }
  //Inicializo los efectos del pasto 
  for(i = 0;i< 100; i++){
    x[i]=random(0,width);
    y[i]=random(0,height);
  }
	
  estado = INTRO;
}

function draw() {
  //Configuro los estados del juego
  if(estado == INTRO){
  	background  (portada);
    
    //Vuelvo el juego a sus condiciones iniciales
		represa = 30;
    castorF[0].x = width/2;
    castorF[0].y = height/2;
    madera = 0;
    ancho = 40;
    radio = 400;
    for (i = 0; i < 4; i++) {
    	arbol[i].tamano = 40;
  	}
    
    for (i = 0; i < 10; i++) {
    	osoF[i].x = 0;
      osoF[i].y = 0;
      osoF[i].dirX = 1.5;
  		osoF[i].dirY = 1.5;
  	}
    ganador = 0;
    perdedor = 0;
  }else if(estado == INS){
    background  (instrucciones);
  
  // JUEGO!!
	}else if(estado == JUEGO){
    background(43, 127, 9);
    noStroke();
    fill(0,155,0);
    for(i = 0;i< 100; i++){ 
    	rect(x[i],y[i],30,10);  
    }
    //Creo el rio 
    fill(0, 140, 255);
    quad(0, height/2 - ancho, 0, height/2 + ancho , width/2, height/2 +ancho, width/2, height/2-ancho);
    //Creo el lago 
    ellipse(width/2, height/2, radio);
    fill(0,120,257);
    ellipse(width/2, height/2, radio- radio/5);
		fill(0,100,257);
    ellipse(width/2, height/2, radio- radio/3.2);
		fill(0,80,257);
    ellipse(width/2, height/2, radio- radio/2.5);
    fill(0,60,257);
    ellipse(width/2, height/2, radio- radio/2);
    //Creo la represa
    fill(61,49,21);
    ellipse(60, height/2,represa/2,represa);

    //Digo cuanta madera tiene el castor
    textFont('Bold');
    textSize(20);
    stroke(10);
    text( "MADERA: " + int(madera),width/2,30);


    //Creo los castores con todas sus propiedade
    for (i = 0; i < castorF.length; i++) {
      castorF[i].dibujarse();
    }

    //Creo los osos con todas sus propiedade
    for (i = 0; i < osoF.length; i++) {
      osoF[i].dibujarse();
      osoF[i].moverse();
    }

    // Creación arboles
    for (i = 0; i < arbol.length; i++) {
      arbol[i].dibujarse();
    }

    //Osos se comen a castores
    for (i = 0; i < osoF.length; i++) {
      for (j = 0; j < castorF.length; j++) {
        if ((dist(castorF[j].x, castorF[j].y, osoF[i].x, osoF[i].y) < 30)) {
          estado = LOSE;
        }
      }
    }

    //Castor come arbol
    for (i = 0; i < castorF.length; i++) {
      for (j = 0; j < arbol.length; j++) {
        if (dist(castorF[i].x, castorF[i].y, arbol[j].x, arbol[j].y + 160) < 50) {
          arbol[j].sercomido();     
        }
      }
    }


  //Achiquito el rio y el lago al contruir la represa
    for (i = 0; i < castorF.length; i++) {
      if( (dist(castorF[i].x, castorF[i].y, 0, height/2) < 70 && hay[i] == false)){
        if(madera >= 30){
          madera += -30; 
          radio += -30;
          represa += 20;
          hay[i] = true;
        }
      }
    }

    for (i = 0; i < castorF.length; i++) {
      if( castorF[i].x >= width/2){
        hay[i] = false;  
      }
    } 
    
    //La represa no soporta la presión del agua y si no está
    //completa se va destruyendo; disminuye el tamaño de la 
    //represa y el del lago aumenta.
    radio += 0.02;
    if(represa >= 0){
      represa += -0.01;
    } 
    
    // Si el la represa se completa ganas 
    if( radio <= 200){
    	estado = WIN;
    }
    
    //Si el lago crece demasiado pierdes 
  	if(radio >= height -70){
    	estado = LOSE1;  
    }
   
/*
    //Muevo el castor
    if(mouseIsPressed == true){
    	castorF[0].x = mouseX;
      castorF[0].y = mouseY;
    }
*/
  }else if(estado == WIN){
  	background(0);
    fill(255);
  	text("Ganaste", width/2, height/2);

  }else if(estado == LOSE){
  	background(0);
    fill(255);
    textAlign(CENTER);
    textSize(30);
    text("OH, OH",width/2, height/3);
    textSize(20);
  	text("Veo que no fuiste más rápido que los osos, intenta una vez más", width/2, height/2);
	}else{
    background(0);
    fill(255);
    textAlign(CENTER);
    textSize(20);
    text("¡Tardaste demasiado!, el valle se inundó", width/2, height/2);

  }
}

//Cambio de estados en el iPad;
function touchEnded(){
  //Cambio los estados del juego 
	if(estado == INTRO){
  	estado = INS;  
  }else if(estado == INS){
  	estado = JUEGO;  
  }else if(estado == WIN && ganador == 1){
  	estado = INTRO;  
  }else if (estado == LOSE && perdedor == 1){
  	estado = INTRO;  
  }else if(estado == LOSE1 && perdedor1 == 1){
		estado = INTRO;  
  }
  
  //Evito que a penas se suelte el mouse después de perder pase a la INTRO
  if (estado == LOSE && perdedor == 0){
  	perdedor = 1;  
  }
  
  if (estado == LOSE1 && perdedor1 == 0){
  	perdedor1 = 1;  
  }
  
  if (estado == WIN && ganador == 0){
  	ganador = 1;  
  }
}

function touchMoved(){
	if(estado == JUEGO){
    castorF[0].x = touches[0].x;
    castorF[0].y = touches[0].y;
  }
}

//Función castores adultos
function castores(_genero) {
  this.x = width/2;
  this.y = height/2;
  this.tamano = 30;
  this.genero = _genero;
	this.dirX = mouseX;
  
  this.dibujarse = function() {
    if (this.genero == 1) {
      fill(176, 65, 30);
    } else {
      fill(79, 19, 14);
    }
    stroke(1);
		triangle(this.x, this.y-3, this.x + this.tamano/2, this.y -4, this.x + this.tamano/2, this.y + this.tamano/2);
    triangle(this.x-this.tamano/3, this.y - this.tamano/3, this.x,this.y+this.tamano/2, this.x + this.tamano, this.y- this.tamano/3.5);
    beginShape();
    vertex(this.x,this.y);
    vertex(this.x,this.y+this.tamano/2);
    vertex(this.x-this.tamano/2,this.y+this.tamano/2);
    vertex(this.x-this.tamano/3, this.y - this.tamano/3);
    vertex(this.x,this.y);
    endShape();
    
	  beginShape();
    vertex(this.x + this.tamano/2, this.y -4, this.x);
  }  
}

// Función de los osos
function osos(_genero) {
  this.x = 0;
  this.y = 0;
  this.tamano = 30;
  this.genero = _genero;
  this.dirX = 1.5;
  this.dirY = 1.5;

  this.dibujarse = function() {
    if (this.genero == 1) {
      fill(30, 12, 6);
    } else {
      fill(0);
    }
    //Dibujo los osos y cambio su dirección dependiendo de si van a la 
    // derecha o a la izquierda.
    if(abs(this.dirX) == this.dirX){
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
    }else{
    rect(this.x, this.y, +this.tamano, -this.tamano);
    quad(this.x + this.tamano, this.y - this.tamano, this.x + this.tamano + 13, this.y + 7 - this.tamano, this.x + this.tamano + 7, this.y + this.tamano / 2.5, this.x + this.tamano, this.y + this.tamano / 2);
    quad(this.x, this.y - this.tamano, this.x - 15, this.y - this.tamano, this.x - 5, this.y + this.tamano / 2.5, this.x, this.y + this.tamano / 2);
    beginShape();
    vertex(this.x - 15, this.y - this.tamano);
    vertex(this.x - 17, this.y - 1 - this.tamano);
    vertex(this.x - this.tamano, this.y + 2 - this.tamano);
    vertex(this.x - this.tamano - 3, this.y + 5 - this.tamano);
    vertex(this.x - this.tamano * 1.1 - 7, this.y + 9 - this.tamano);
    vertex(this.x - this.tamano * 1.1 - 5, this.y - this.tamano / 2.6);
    vertex(this.x - this.tamano - 3, this.y - 12);
    vertex(this.x - this.tamano, this.y - this.tamano / 2.6);
    vertex(this.x - 10, this.y - this.tamano / 2.6);
    endShape();
    }
  }

  this.moverse = function() {
  
	// Creo las limitaciones de los osos puesto que estos no pueden estar en el lago. 
    if (dist(this.x, this.y, width/2 ,height/2) < radio/2) {
      this.dirX =  -this.dirX;
      this.dirY =  -this.dirY;
			dummy = abs(this.dirX);
      dummy1 = abs(this.dirY);
      
      //Si el radio del lago es menor a 400 los osos se mueven más rápido 
      if(radio <= 400){
      this.dirX = (this.dirX/dummy)*random(2,3.5);
      this.dirY = (this.dirY/dummy1)*random(2,3);
      }else{
      this.dirX = (this.dirX/dummy)*random(1,3);
      this.dirY = (this.dirY/dummy1)*random(1,2.5); 
      }
      //AL FIN NO LO CAMBIAMOOS. PODRIAS HACERLO PERO SE ME OCURRE QUE SIMPLEMENTE DESDE EL PRINCIPIO 
      //ASIGNES UN RANDOM PARA CUANDO SE ESTE CREANDO CADA OSO. ESO NO HACE QUE CADA VEZ QUE REBOTE REBOTE 
      //HACIA UN LADO DIFERENTE PERO AL MENOS CAMBIAN

    }
    
    
    if (this.x >= width) {
      this.x = 0;
    }else if(this.x <= 0){
      this.x = width;
    }

    if (this.y >= height) {
      this.y = 0;
    }else if(this.y <= 0){
    	this.y = height;  
    }
    
//Muevo los osos
    this.x = this.x + this.dirX;
    this.y = this.y + this.dirY;
	}
}
	
//Función árboles
function arboles() {
  this.x = random(width/1.3, width-60);
  this.y = random(0, height-200);
  this.tamano = 40;

  this.dibujarse = function() {
    if (this.tamano != 0) {
      noStroke();
      fill(125, 63, 10);
      quad(this.x, this.y, this.x + this.tamano, this.y, this.x + this.tamano, this.y + 160, this.x, this.y + 160);
    }
    if (this.tamano >= 7) {
      fill(0, 255, 0);
      ellipse(this.x, this.y, 60);
      ellipse(this.x + this.tamano, this.y, 60);
      ellipse(this.x + this.tamano / 2, this.y - 20, 60);
    }
    if (this.tamano < 40) {
      this.tamano += 0.015;
    }else {
      fill(255, 0, 0);
      ellipse(this.x, this.y, 10);
      ellipse(this.x + this.tamano, this.y, 10);
      ellipse(this.x + this.tamano / 2, this.y - 20, 10);
    }

  }
  //Castor come arbol1
  this.sercomido = function() {
    if (this.tamano > 0 && madera<= 30) {
      this.tamano += -0.2;
      madera += 0.2;
    }
  }
}

