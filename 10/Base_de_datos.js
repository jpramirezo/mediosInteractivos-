var continente;
var imagen;
var año;
var añodatos;
var mx = 0.0;
var numero = 0;
var dona = [];
var imdonas;
var dummy = false;

// cargo los elementos que voy a utilizar 
function preload() {
  datos = loadTable('obesidad.csv', 'csv', 'header');
  imagen = loadImage("mapa1.jpg");
  imdonas = loadImage("dona.png")
}
function setup() {
  createCanvas(800, 700);
  background(0);
  
  /*
  print(datos.rows.length);
  print(datos.columns.length);

  print(datos);
  */
}
function draw() {
  background(imagen);
// Creo un cuadrado que representa los años de 1975 a 2014 
    if(mouseY < 70){
        // Actualiza a localización del marcador
      var dif = mouseX - mx;
      if (abs(dif) > 1.0) {
        mx = mx + dif/32.0;
      }
    }
    // Mantiene el marcador en la pantalla
    mx = constrain(mx, 1, width-30);
    noStroke();

    // Dibuja el marcador de posición
    push();
    fill(204, 102, 0);
    rect(mx, 30, 30,30);
    pop();
   
// Mapeo el cuadrado para que el ancho del canvas corresponda a los años
    año = int(map(mx, 0, width-30, 1975, 2014));
    textSize(16);
    strokeWeight(0);
    text(año, width/2,20);
    
    // despues de haber selccionado el año, mantienes presionado el mouse en el 
    //continente del cual deseas saber los datos
  if(mouseIsPressed && mouseY > 50){
    for (var r = 0; r < datos.getRowCount()-1; r++) { 
    continente = datos.getString(r,"Entity");
    añodatos = parseInt(datos.getString(r, "Year")); 
    
    //Seleciono America latina
    if(mouseX < 330 && mouseY > 325 && continente == "Latin America and the Caribbean" && añodatos == año){
      numero = parseInt(datos.getString(r, "Porcentual"));  
    }
    //Seleciono Europa & America del norte 
    if(mouseX > 0 && mouseX < 500 && mouseY < 300 && continente == "North America and Europe" && añodatos == año){
      numero = parseInt(datos.getString(r, "Porcentual")); 
    }
    //Seleciono Africa
    if(mouseX > 330 && mouseX < 500 && mouseY > 270 && continente == "Africa" && añodatos == año){
      numero = parseInt(datos.getString(r, "Porcentual")); 
    }
    //Seleciono Asia
    if(mouseX > 500 && mouseY < 390 && continente == "Asia" && añodatos == año){
      numero = parseInt(datos.getString(r, "Porcentual"));  
    }
    
    //Seleciono Oceania
    if(mouseX > 500 && mouseY > 390 && continente == "Oceania" && añodatos == año){
      numero = parseInt(datos.getString(r, "Porcentual"));  
    }

  }
  
   // caen donas como representacion de la obesidad. Porcentae de personas con obesidad
  // es el numero de donas que caen
  // utilizo un dummy para que no me cree constantemente donas en posiciones aleatorias
  if(dummy == false){
    for(i = 0; i < numero; i ++){
      dona[i] = new donas();
    }
    dummy = true;
  }
    for(i = 0; i < numero; i ++){
      dona[i].dibujarse();
      dona[i].caer();
    }

  }


}
//Al soltar el mouse elimino el numero de donas existentes para que no se acumulen 
function mouseReleased(){
  for(i = 0; i<numero; i ++){
    dona.splice(i,1);
  }  
  dummy = false;
}

// creo la funcion de las donas para que aparezcan 
function donas(){
  this.x = random(0, width);
  this.y = random(0, height);
  this.vivo = true;

  this.dibujarse = function() {
    if (this.vivo==true) {
      image(imdonas, this.x, this.y, 98, 134);
    }
  };

  this.caer = function() {
    this.y = this.y + 6;

    if (this.y > height) {
      this.x = random(0, width-98);
      this.y = random(-134, -height);
    }
  }
}  