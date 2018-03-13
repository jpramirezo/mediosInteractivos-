var cont = 0;
var origen = 0;
var r = 80;
var g = 255;
var b = 100;
var x = 1;
var y = 1;
var x2 = 1;
var y2 = 1;
var x3 = 1;
var y3 = 1;
var dir = 1;
var menos = 200;
var mas = 120;
var suma1 = 6;
var suma2 = 6;
var suma3 = 6;
var a = 0;
var m =0;
var j = 1;
function setup() {
  frameRate(10);
  createCanvas(320, 210);
  background(200, 100, 50);

}

function draw() {
// Fondo va cambiando de color
  if (cont> 44){
    background(200, origen , r-40);
  }
// Utilizo un contador para hacer los eventos en el flipbook
  cont += 1;
  
// Creo el huevo utilizando una elipse
  fill(35, 35, 35);
  ellipse(160, 220, 200, 120);
  
  fill(250);
// Si el frameCount es menor a 10 voy cambiando el color del background y voy aumentando la posicion de la elipse (ilusión que el huevo cae)
// Para esto utilizo una variable llamada origen	
  if (cont <= 9) {
    background(200, origen, 50);
    fill(35, 35, 35);
    ellipse(160, 220, 200, 120);
    origen += 11;
    fill(250);
    ellipse(160, origen, 80, 120);
  }
// Cuando el huevo toca la roca (contador = 10) creo las primeras marcas de ruptura 
// Lineas en la parte de abajo 
  if (cont >= 10) {
    line(160, 160, 175, 150);
    line(163, 159, 170, 145);
    line(163, 159, 156, 145);
    line(163, 159, 158, 148);
    line(155, 158, 150, 150);
    line(160, 158, 175, 150);
    line(158, 158, 156, 150);
    line(156, 150, 150, 148);

  }
// Hago que la esfera se quede quieta
  if (cont == 10 ) {
    ellipse(160, origen, 80, 120);
  }

// En los siguientes if, creo las lineas que rompen el huevo por la mitad las cuales se van a crear cada dos ciclos 
  if (cont == 12) {
    line(170, 140, 160, 160);

  }

  if (cont == 14) {

    line(150, 115, 170, 140);
  }

  if (cont == 16) {

    line(180, 100, 150, 115);
  }

  if (cont == 18) {
    line(155, 90, 180, 100);
  }

  if (cont == 20) {
    line(165, 73, 155, 90);
  }

  if (cont == 22) {
    line(150, 40, 165, 73);
  }
	
// Hago que el huevo se separe por la mitad con dos arcos los cuales van a rotar 
// Para hacer la ilusión que el huevo se abre cambio las cordenadas en cada ciclo sumándoles las variables a & m 	
  if (cont > 24) {
    stroke (2);
    background(200, origen, r-40);
    arc(160-m, 99, 78, 121, (5.7-a) * PI / (12), (17.7-a) * PI / (12),PIE);
    arc(160+m, 99, 78, 121, (18.3+a) * PI / (12), (6.3 +a) * PI / (12),PIE);
    fill(35, 35, 35);
    ellipse(160, 220, 200, 120);
    a += 0.02 *j;
    m += 1*j;
  }
	
// Creo los circulos de colores que se crean cuando el huevo se rompe
// Primer circulo	
  if (cont > 29) {	
    r += 5;
    noStroke();
    fill(r, 50, 10);
    ellipse(160, 105, x, y);
    x += suma1*dir;
    y += suma1*dir;
  }
// Segundo circulo 
  if (cont > 38 ){
    g = g-10;
    fill(50, g, 80);
    ellipse(160, 105, x2, y2);
    x2 += suma2* dir;
    y2 += suma2* dir;   
  }
// Tercer circulo
  if (cont > 46 ){
    b += 6;
    fill(10,200,b);
    ellipse(160, 105, x3, y3);
    x3 += suma3* dir;
    y3 += suma3* dir;
  }
// En el frameCount numero 56 hago que los circulos dejen de crecer y empiecen a hacerse más pequeños	
  if (cont == 56 ){
    dir = -dir; 
  }
// En el frameCount numero 53 hago que la cascara del huevo deje de abrirse y empiece a cerrarse
  if (cont ==53){
       j = -j;
  }
// Cuando el primer circulo tiene un diametro igual a 0 hago que deje de expandirse o contraerse y dibujo el huevo final ya reconstruido 
  if (x <= 0 ){
    suma1 = 0;    
    j = 0;
    stroke(2);
    fill(255);
    ellipse(160, 100, 80, 120);
    
  }
// Cuando el segundo circulo tiene un diametro igual a 0 hago que deje de expandirse o contraerse
  if (x2 <= 0){
   	suma2 =0; 
  }
// Cuando el tercer circulo tiene un diametro igual a 0 hago que deje de expandirse o contraerse
    if (x3 <= 0){
   	suma3 =0;
  }
	
  //if (frameCount <=90){
  //	saveCanvas("miFlipbook" + frameCount + '.jpg');  	
  //}
  

}
