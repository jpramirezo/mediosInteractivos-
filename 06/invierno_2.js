
var mx = 0.0;
function setup() {
  createCanvas(500, 400, WEBGL);
}

function draw() {
  background(32,170,232);
  stroke(255);

  // pasto, plano principal 
  push();
  translate(0, 60, 0);
  rotateX(PI/2);
  fill(255-mx*0.51, 255, 255-mx*0.51);
  plane(width*2, 500);
  pop();
  
  //Lago 
  push();
  translate(-80, 94, 150);
  fill(0,255-mx*0.51,255);
  cone(100,0);
  pop();
  
  //Montaña
  push();
  rotateX(PI);
  rotateY(PI/4);
  translate(-300, 90, -100);
  fill(255-mx*0.51,255-0.31*mx,255-mx*0.51);
  cone(250, 320, 1,3);
  pop();
  
  //Piedra montaña
  push();
  rotateX(PI);
  rotateY(PI/4.2);
  translate(-310, 60, -90);
  fill(0,0,0);
  cone(250-mx*0.5, 320, 4,3);
  pop();
  
    //Montaña2
  push();
  rotateX(PI);
  translate(140, 100, 135);
  fill(255-mx*0.51,255-0.31*mx,255-mx*0.51);
  cone(250, 320, 4,3);
  pop();
  
  //Piedra montaña2
  push();
  rotateX(PI);
  rotateY(PI/4.2);
  translate(0, 60, 170);
  fill(0,0,0);
  cone(250-mx*0.5, 320, 4,3);
  pop();
  
  //Montaña3
  push();
  rotateX(PI);
  translate(0, 100, 180);
  fill(255-mx*0.51,255-0.31*mx,255-mx*0.51);
  cone(250, 320, 4,3);
  pop();
  
  //Piedra montaña3
  push();
  rotateX(PI);
  rotateY(PI/4.2);
  translate(-150, 100, 170);
  fill(0,0,0);
  cone(250-mx*0.5, 320, 4,3);
  pop();  
  
  //Arbol 1
  push();
  stroke(0);
  translate(10,35,270);
  rotateX(PI - PI/70);
  fill(91, 0, 0);
  cylinder(3, 6);
  fill(30, 170, 0);
  translate(0,16,0);
  cone(mx*0.026, 20);
  translate(0,13,0);
  cone(mx*0.026, 20);
  translate(0,13,0);
  cone(mx*0.026, 20);
  pop();
  
  //Tronco
  push();
    translate(10,15,270);
    fill(91, 0, 0);
    cylinder(3, 35);
    translate(5,3,0);
    rotateZ(2*PI/3);
    cylinder(1,10);
    
    translate(10,-5,0);
    rotateZ(PI/2);
    cylinder(1,10);
  pop();
  
  //Arbol 2
  push();
  stroke(0);
  translate(40,35,290);
  rotateX(PI);
  fill(30, 170, 0);
  translate(0,15,0);
  cone(mx*0.026, 20);
  translate(0,15,0);
  cone(mx*0.026, 20);
  translate(0,15,0);
  cone(mx*0.026, 20);
  pop();
  
  //Tronco 2
  push();
  fill(91, 0, 0);
  translate(40,15,290);
  cylinder(3,35);
  translate(-5,0,0);
  rotateZ(PI/3);
  cylinder(1,10);
  pop();
  
  //flores 
  push();
  //#1
    translate(30,35,270);
    fill(255,0,180);
    sphere(mx*0.002);
  //#2
    translate(-10,3,0);
    fill(255,210,0);
    sphere(mx*0.002);
  //#3
    translate(3,-4,0);
    fill(255,50,0);
    sphere(mx*0.002);
  //#4
    translate(5,-4,0);
    fill(150,0,255);
    sphere(mx*0.002);
  //#5
    translate(6,1,0);
    fill(255,0,180);
    sphere(mx*0.002);
  //#6
    translate(-4,-5,0);
    fill(255,210,0);
    sphere(mx*0.002);
  //#7
    translate(-3,-2,0);
    fill(255,50,0);
    sphere(mx*0.002);
  //#8
    translate(10,0,0);
    fill(150,0,255);
    sphere(mx*0.002);
  //#9
    translate(-5,-3,0);
    fill(255,0,180);
    sphere(mx*0.002);
  //#10
    translate(-9,0,0);
    fill(255,210,0);
    sphere(mx*0.002);
  //#11
    translate(-10,20,0);
    fill(255,50,0);
    sphere(mx*0.002);
  //#12
    translate(-15,-5,0);
    fill(150,0,255);
    sphere(mx*0.002);
  //#13
    translate(5,3,0);
    fill(255,0,180);
    sphere(mx*0.002);
  //#14
    translate(-10,3,0);
    fill(255,210,0);
    sphere(mx*0.002);
  //#15
    translate(-2,-3,0);
    fill(255,50,0);
    sphere(mx*0.002);
  //#16
    translate(-9,-1,0);
    fill(150,0,255);
    sphere(mx*0.002);
  //#17
    translate(-3,4,0);
    fill(255,0,180);
    sphere(mx*0.002);
    
  pop();

  // ------- SU CODIGO AQUÍ ------- //


  // Actualiza a localización del marcador
  var dif = mouseX - mx;
  if (abs(dif) > 1.0) {
    mx = mx + dif/32.0;
  }
  // Mantiene el marcador en la pantalla
  mx = constrain(mx, 1, width-1);
  noStroke();
  // Dibuja el rectángulo inferior
  push();
  fill(255);
  translate(0, (height/2)-2);
  plane(width, 5);
  pop();
  // Dibuja el marcador de posición
  push();
  fill(204, 102, 0);
  translate(mx-(width/2)-1, (height/2)-2);
  plane(4, 5);
  pop();
}
