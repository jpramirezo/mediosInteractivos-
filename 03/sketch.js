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
  
  if (cont> 44){
    background(200, origen , r-40);
  }

  cont += 1;
  

  fill(35, 35, 35);
  ellipse(160, 220, 200, 120);
  
  fill(250);

  if (cont <= 9) {
    background(200, origen, 50);
    fill(35, 35, 35);
    ellipse(160, 220, 200, 120);
    origen += 11;
    fill(250);
    ellipse(160, origen, 80, 120);
  }

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

  if (cont == 10 ) {
    ellipse(160, origen, 80, 120);
  }

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
  if (cont > 29) {
  	
    r += 5;
    noStroke();
    fill(r, 50, 10);
    ellipse(160, 105, x, y);
    x += suma1*dir;
    y += suma1*dir;
  }
  
  if (cont > 38 ){
    g = g-10;
		fill(50, g, 80);
    ellipse(160, 105, x2, y2);
    x2 += suma2* dir;
    y2 += suma2* dir;   
  }
  
  if (cont > 46 ){
    b += 6;
		fill(10,200,b);
    ellipse(160, 105, x3, y3);
    x3 += suma3* dir;
    y3 += suma3* dir;
  }
	
  if (cont == 56 ){
    dir = -dir; 
  }
  if (cont ==53){
       j = -j;
  }
  if (x <= 0 ){
   	suma1 = 0;    
    j = 0;
    stroke(2);
    fill(255);
    ellipse(160, 100, 80, 120);
    
  }
  if (x2 <= 0){
   	suma2 =0; 
  }
    if (x3 <= 0){
   	suma3 =0;
  }
	
  //if (frameCount <=90){
  //	saveCanvas("miFlipbook" + frameCount + '.jpg');  	
  //}
  

}