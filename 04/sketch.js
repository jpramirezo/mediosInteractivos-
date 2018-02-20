var distancia = 70;
var btn0x = 20;
var btn1x = btn0x + distancia;
var btn2x = btn1x + distancia;
var btn3x = btn2x + distancia;
var btn4x = btn3x + distancia;
var btn5x = btn4x + distancia;
var btn6x = btn5x + distancia;
var btn7x = btn6x + distancia;
var btn8x = btn7x + distancia;
var btn9x = btn8x + distancia;

var y = 10;
var y1 = 60;

var tamaño = 40;
var tamaño1 = 20;
var herramienta = 10;
var col = 10;

function setup() {

  createCanvas(windowWidth, windowHeight);
  background(255, 255, 255);

}

function draw() {

  fill(255);
  rect(0, 0, windowWidth, 90);

  rect(btn0x, y, tamaño, tamaño);
  triangle(btn0x + 20, y + 5, btn0x + 5, tamaño + y - 10, btn0x + 35, tamaño + y - 10);
  triangle(btn0x + 20, y + tamaño - 5, btn0x + 5, tamaño + y - 10, btn0x + 35, tamaño + y - 10);

  rect(btn1x, y, tamaño, tamaño);
  beginShape();
  vertex(btn1x + 10, y + 3);
  bezierVertex(btn1x + 50, y + 10, btn1x + 30, y + 25, btn1x + 10, y + 35);
  bezierVertex(btn1x + 10, y + 35, btn1x + 35, y + 20, btn1x + 10, y + 3);
  endShape();

  rect(btn2x, y, tamaño, tamaño);
  ellipseMode(CORNER);
  ellipse(btn2x + 5, y + 5, 30, 30);
  ellipse(btn2x + 5, y + 5, 20, 20);

  rect(btn3x, y, tamaño, tamaño);
  ellipseMode(CENTER);
  arc(btn3x + 20, y + 5, 30, 60, PI / 3, 2 * PI / 3, PIE);

  rect(btn4x, y, tamaño, tamaño);
  triangle(btn4x + 20, y + 5, btn4x + 5, tamaño + y - 5, btn4x + 35, tamaño + y - 5);
  ellipse(btn4x + 20, y + (tamaño / 2) + 5, 18, 18);

  rect(btn5x, y, tamaño, tamaño);
  quad(btn5x + 20, tamaño + 5, btn5x + 22, tamaño / 2 + 10, btn5x + 35, y + 18, btn5x + 5, y + 5);

  rect(btn6x, y, tamaño, tamaño);
  triangle(btn6x + tamaño / 2, y + tamaño / 2, btn6x + 12, y + 5, btn6x + tamaño - 12, y + 5);
  triangle(btn6x + tamaño / 2, y + tamaño / 2, btn6x + 5, y + 12, btn6x + 5, y + tamaño - 12);
  triangle(btn6x + tamaño / 2, y + tamaño / 2, btn6x + 12, y + tamaño - 5, btn6x + tamaño - 12, y + tamaño - 5);
  triangle(btn6x + tamaño / 2, y + tamaño / 2, btn6x + tamaño - 5, y + 12, btn6x + tamaño - 5, y + tamaño - 12);

  rect(btn7x, y, tamaño, tamaño);
  arc(btn7x + tamaño / 2, y + tamaño / 2, 24, 30, PI, 2 * PI, PIE);
  line(btn7x + (tamaño / 2) + 12, y + tamaño / 2, btn7x + tamaño / 2, y + tamaño);
  line(btn7x + (tamaño / 2) - 12, y + tamaño / 2, btn7x + tamaño / 2, y + tamaño);

  rect(btn8x, y, tamaño, tamaño);
  ellipse(btn8x + tamaño / 2, y + tamaño / 2, 30, 30);
  line(btn8x + 10, y + 10, btn8x + tamaño - 10, y + tamaño - 10);
  line(btn8x + tamaño - 10, y + 10, btn8x + 10, y + tamaño - 10);
  ellipse(btn8x + tamaño / 2, y + tamaño / 2, 15, 15);

  rect(btn9x, y, tamaño, tamaño);
  quad(btn9x + 10, y + tamaño - 5, btn9x + tamaño - 5, y + 10, btn9x + tamaño / 2 - 10, y + tamaño / 2, btn9x + tamaño / 2 + 10, y + tamaño / 2 + 10);

  fill(95, 255, 0);
  rect(btn0x, y1, tamaño1, tamaño1);
  fill(255, 130, 0);
  rect(btn1x, y1, tamaño1, tamaño1);
  fill(0, 255, 255);
  rect(btn2x, y1, tamaño1, tamaño1);
  fill(255, 255, 0);
  rect(btn3x, y1, tamaño1, tamaño1);
  fill(255, 0, 130);
  rect(btn4x, y1, tamaño1, tamaño1);
  fill(130, 0, 255);
  rect(btn5x, y1, tamaño1, tamaño1);
  fill(0, 0, 255);
  rect(btn6x, y1, tamaño1, tamaño1);
  fill(255, 0, 0);
  rect(btn7x, y1, tamaño1, tamaño1);
  fill(0, 255, 130);
  rect(btn8x, y1, tamaño1, tamaño1);
  fill(250, 0, 250);
  rect(btn9x, y1, tamaño1, tamaño1);

  if (mouseIsPressed) {

    if (mouseX > btn0x && mouseX < btn0x + tamaño &&
      mouseY > y && mouseY < y + tamaño) {
      herramienta = 0;
    }

    if (mouseX > btn1x && mouseX < btn1x + tamaño &&
      mouseY > y && mouseY < y + tamaño) {
      herramienta = 1;
    }

    if (mouseX > btn2x && mouseX < btn2x + tamaño &&
      mouseY > y && mouseY < y + tamaño) {
      herramienta = 2;
    }

    if (mouseX > btn3x && mouseX < btn3x + tamaño &&
      mouseY > y && mouseY < y + tamaño) {
      herramienta = 3;
    }

    if (mouseX > btn4x && mouseX < btn4x + tamaño &&
      mouseY > y && mouseY < y + tamaño) {
      herramienta = 4;
    }

    if (mouseX > btn5x && mouseX < btn5x + tamaño &&
      mouseY > y && mouseY < y + tamaño) {
      herramienta = 5;
    }

    if (mouseX > btn6x && mouseX < btn6x + tamaño &&
      mouseY > y && mouseY < y + tamaño) {
      herramienta = 6;
    }

    if (mouseX > btn7x && mouseX < btn7x + tamaño &&
      mouseY > y && mouseY < y + tamaño) {
      herramienta = 7;
    }

    if (mouseX > btn8x && mouseX < btn8x + tamaño &&
      mouseY > y && mouseY < y + tamaño) {
      herramienta = 8;
    }

    if (mouseX > btn9x && mouseX < btn9x + tamaño &&
      mouseY > y && mouseY < y + tamaño) {
      herramienta = 9;
    }

    //colores

    if (mouseX > btn0x && mouseX < btn0x + tamaño1 &&
      mouseY > y1 && mouseY < y1 + tamaño1) {
      col = 0;
    }

    if (mouseX > btn1x && mouseX < btn1x + tamaño1 &&
      mouseY > y1 && mouseY < y1 + tamaño1) {
      col = 1;
    }

    if (mouseX > btn2x && mouseX < btn2x + tamaño1 &&
      mouseY > y1 && mouseY < y1 + tamaño1) {
      col = 2;
    }

    if (mouseX > btn3x && mouseX < btn3x + tamaño1 &&
      mouseY > y1 && mouseY < y1 + tamaño1) {
      col = 3;
    }

    if (mouseX > btn4x && mouseX < btn4x + tamaño1 &&
      mouseY > y1 && mouseY < y1 + tamaño1) {
      col = 4;
    }

    if (mouseX > btn5x && mouseX < btn5x + tamaño1 &&
      mouseY > y1 && mouseY < y1 + tamaño1) {
      col = 5;
    }

    if (mouseX > btn6x && mouseX < btn6x + tamaño1 &&
      mouseY > y1 && mouseY < y1 + tamaño1) {
      col = 6;
    }

    if (mouseX > btn7x && mouseX < btn7x + tamaño1 &&
      mouseY > y1 && mouseY < y1 + tamaño1) {
      col = 7;
    }

    if (mouseX > btn8x && mouseX < btn8x + tamaño1 &&
      mouseY > y1 && mouseY < y1 + tamaño1) {
      col = 8;
    }

    if (mouseX > btn9x && mouseX < btn9x + tamaño1 &&
      mouseY > y1 && mouseY < y1 + tamaño1) {
      col = 9;
    }

    fill(255);

    if (col == 0) {
      fill(95, 255, 0, 80);
    }
    if (col == 1) {
      fill(255, 130, 0, 80);
    }
    if (col == 2) {
      fill(0, 255, 255, 80);
    }
    if (col == 3) {
      fill(255, 255, 0, 80);
    }
    if (col == 4) {
      fill(255, 0, 130, 80);
    }
    if (col == 5) {
      fill(130, 0, 255, 80);
    }
    if (col == 6) {
      fill(0, 0, 255, 80);
    }
    if (col == 7) {
      fill(255, 0, 0, 80);
    }
    if (col == 8) {
      fill(0, 255, 130, 80);
    }
    if (col == 9) {
      fill(250, 0, 250, 80);
    }

    // Herramientas

    if (herramienta == 0) {
      triangle(mouseX + 20, mouseY + 5, mouseX + 5, tamaño + mouseY - 10, mouseX + 35, tamaño + mouseY - 10);
      triangle(mouseX + 20, mouseY + tamaño - 5, mouseX + 5, tamaño + mouseY - 10, mouseX + 35, tamaño + mouseY - 10);
    }

    if (herramienta == 1) {
      beginShape();
      vertex(mouseX + 10, mouseY + 3);
      bezierVertex(mouseX + 50, mouseY + 10, mouseX + 30, mouseY + 25, mouseX + 10, mouseY + 35);
      bezierVertex(mouseX + 10, mouseY + 35, mouseX + 35, mouseY + 20, mouseX + 10, mouseY + 3);
      endShape();
    }

    if (herramienta == 2) {
      ellipseMode(CORNER);
      ellipse(mouseX + 5, mouseY + 5, 30, 30);
      fill(255);
      ellipse(mouseX + 5, mouseY + 5, 20, 20);
    }
    if (herramienta == 3) {
      ellipseMode(CENTER);
      arc(mouseX + 10, mouseY, 30, 60, PI / 3, 2 * PI / 3, PIE);
    }
    if (herramienta == 4) {
      triangle(mouseX + 20, mouseY + 5, mouseX + 5, tamaño + mouseY - 5, mouseX + 35, tamaño + mouseY - 5);
      fill(255);
      ellipse(mouseX + 20, mouseY + (tamaño / 2) + 5, 18, 18);
    }
    if (herramienta == 5) {
      quad(mouseX + 20, tamaño + 5, mouseX + 22, tamaño / 2 + 10, mouseX + 35, mouseY + 18, mouseX + 5, mouseY + 5);
    }
    if (herramienta == 6) {
      triangle(mouseX + tamaño / 2, mouseY + tamaño / 2, mouseX + 12, mouseY + 5, mouseX + tamaño - 12, mouseY + 5);
      triangle(mouseX + tamaño / 2, mouseY + tamaño / 2, mouseX + 5, mouseY + 12, mouseX + 5, mouseY + tamaño - 12);
      triangle(mouseX + tamaño / 2, mouseY + tamaño / 2, mouseX + 12, mouseY + tamaño - 5, mouseX + tamaño - 12, mouseY + tamaño - 5);
      triangle(mouseX + tamaño / 2, mouseY + tamaño / 2, mouseX + tamaño - 5, mouseY + 12, mouseX + tamaño - 5, mouseY + tamaño - 12);
    }
    if (herramienta == 7) {
      arc(mouseX + tamaño / 2, mouseY + tamaño / 2, 24, 30, PI, 2 * PI, PIE);
      line(mouseX + (tamaño / 2) + 12, mouseY + tamaño / 2, windowWidth / 2, windowHeight);
      line(mouseX + (tamaño / 2) - 12, mouseY + tamaño / 2, windowWidth / 2, windowHeight);
    }
    if (herramienta == 8) {
      ellipse(mouseX + tamaño / 2, mouseY + tamaño / 2, 30, 30);
      line(mouseX + 10, mouseY + 10, mouseX + tamaño - 10, mouseY + tamaño - 10);
      line(mouseX + tamaño - 10, mouseY + 10, mouseX + 10, mouseY + tamaño - 10);
      fill(255, 255, 255, 150);
      ellipse(mouseX + tamaño / 2, mouseY + tamaño / 2, 15, 15);
    }
    if (herramienta == 9) {
      quad(mouseX + 10, mouseY + tamaño - 5, mouseX + tamaño - 5, mouseY + 10, mouseX + tamaño / 2 - 10, mouseY + tamaño / 2, mouseX + tamaño / 2 + 10, mouseY + tamaño / 2 + 10);
    }
  }
}