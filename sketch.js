function setup() { 
  createCanvas(510, 310);

  background(243,241,191);
	background (0,0,0,15);
	
	strokeWeight(3);
	stroke(0,0,0);
	
	//parte superior derecha
	
	line (462,0,462,250);
	line (469,0,469,250);
	
	strokeWeight(1.3);
	line (435,55,495,55);
	line (435,59,495,59);
	
	line (435,225,495,224);
	line (435,229,495,228);
	line (435,233,495,232);
	
	strokeWeight(1);
	fill(0,0,0,0);
	arc(480,110,60,60,1.4,4.9);
	arc(481,110,60,58,1.4,4.9)
	
	//Círculo Azul 
	strokeWeight(2.2);
	ellipse(400,190, 65,65);
	strokeWeight(1);
	stroke(0,0,0,170)
	ellipse(400,190, 61,61);
	ellipse(400,190, 59,59);
	ellipse(400,190, 57,57);
	ellipse(400,190,53,53);
	stroke(0,0,255,0);
	fill(32,41,127,205);
	ellipse(400,190,45,45);
	
	strokeWeight(4);
	stroke(0,0,0);
	fill(255,213,232,80);
	triangle(170,404,270,30,380,404);
	
	strokeWeight(2);
	stroke(0,0,0);
	line(86,125,422,346);
	line(98,205,422,346);

	strokeWeight(1);
	stroke(0,0,0,100);
	fill(200,210,14);
	triangle(285,172,335,105,373,172);
	
	strokeWeight(1);
	stroke(0,0,0);
	fill(145,137,140);
	ellipse(180,120, 53, 53);
	
	strokeWeight(3);
	stroke(0,0,0);
	fill(177,3,3);
	ellipse(75,275, 30, 30);
		
	strokeWeight(1);
	stroke(0,0,0);
	fill(255,213,232,80);
	ellipse(270,345, 45, 45);
	
	noFill();
  stroke(0);
  beginShape();
  curveVertex(0, 200);
	curveVertex(0, 200);
  curveVertex(30, 160);
 	curveVertex(40, 148);  
  curveVertex(50, 137);
	curveVertex(60, 127);
	curveVertex(90, 100);
	curveVertex(140, 70);
	curveVertex(140, 70);
	endShape();
  
  	
	noFill();
  stroke(0);
  beginShape();
  curveVertex(0, 270);
	curveVertex(0, 270);
  curveVertex(30, 236);
 	curveVertex(40, 227);  
	curveVertex(55, 215); 
  curveVertex(80, 200); 
	curveVertex(105, 190);
	curveVertex(105, 200);
	endShape();
	


}
