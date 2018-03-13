

var rojo = (163,108,85);
var amarillo = (212,197,163);
var naranja = 250;
var azul = 250;
var azulclaro= 250;
var rosado = (201,174,162);
var ferrari = (186,106,80);
var contador = 0;
var dummy = 0;
var rectx = 25;
var cordy = 45;

function setup() { 
  createCanvas(458, 450);
	background(211,204,189);   	
	
  noStroke();
  fill(0);
	
//Rectangulos negros al principio y final del cuadro (los más gruesos)
  rect(21, cordy + 20, 428, 20); 
  rect(21,365, 428, 20);

	
// Lineas negras debajo de los patrones de colores
// Grupo de 3 lineas horizontales (primeras 3)
    for (i= 1; i<= 3; i += 1){
      rect(21, cordy + 44, 428,4);    
      cordy += 8;
    } 
// Grupo de 3 lineas horizontales (últimas 3; cordenada y = 298)
    cordy = 298;
    for (i= 1; i<= 3; i += 1){
      rect(21, cordy + 44, 428,4);    
      cordy += 8;
    } 
// Grupo de 6 lineas (segundo for) abajo del cuadro que se repiten 3 veces(primer for)
// Este grupo de lineas tiene una distancia en Y de 34
  cordy = 77;
  for( j = 1; j <=3; j++){
    for( i = 1; i<= 6; i++){
      rect ( 21, cordy + 44, 428,4);
      cordy += 8;
    }
    cordy += 34;
  }
	
// La linea horizontal de colores se repite 4 veces en el cuadro, La primera comienza en la cordenada Y = 25
  for ( m = 1; m <= 4; m ++){
  dummy ++;  
  rectx = 25; 
  if (dummy == 1){
    	cordy = 45;
    }
    else if (dummy == 2){
    	cordy += 80;
    } 
    else if (dummy == 3){
    	cordy = 285;
    }    
    else{
    	cordy += 80;
    }   
// Tercer patrón: El segundo patrón se repite 3 veces (en una linea horizontal hay 6 grupos de 3 cuadrados y esos grupos están 3 veces)
// Con este for creo la fila de colores #1 
  	for ( p = 1; p <= 3; p += 1){
      contador = 0;  
// Segundo patrón: ese grupo de rectangulos se repiten 6 veces cambiandole color
// Hay 6 combinacines de colores
      for ( j = 1; j <= 6; j +=1){	
        contador = contador + 1;
        if (contador == 1 ){
          fill (163,108,85);
        }
        else if (contador == 2){
          fill (212,197,163);
        }
        else if ( contador == 3){
          fill (188,191,182);
        }    
        else if(contador == 4){
          fill (201,174,162); 
        }  
        else if ( contador == 5){
          fill (186,106,80);
        }
        else {
          fill (212,197,163);
        }
// Primer patrón: 3 rectangulos del mismo color
        for ( i = 1; i < 4; i ++){
            rect(rectx,cordy, 4, 40);
            rectx = rectx + 8;
        }

      }

    }
  
  }      


// Segundo patrón de lineas de colores. 
// Se hace de la mima manera pero la posición inicial en X es 49 & la de de Y es 85
  rectx = 49;
  dummy = 0;
  for (l = 1; l<=5; l++){  	
    dummy++;
    rectx = 49;
    if (dummy == 1){
    	cordy = 85;
    }
    else if (dummy == 2){
    	cordy += 80;
    } 
    else if (dummy == 3){
    	cordy += 40;
    } 
    else if (dummy == 4){
    	cordy += 40;
    }     
    else{
    	cordy += 80;
    } 
// Tercer patrón: El segundo patrón se repite 3 veces (en una linea horizontal hay 6 grupos de 3 cuadrados y esos grupos están 3 veces)
// Con este for creo la fila de colores #1 
    for ( a = 1; a <4; a++){
      contador = 0;  
// Segundo patrón: ese grupo de rectangulos se repiten 6 veces cambiandole color
// Hay 6 combinacines de colores
      for ( b = 1; b < 7; b ++){	
        contador ++;
        if (contador == 1 ){
          fill (186,106,80);
        }
        else if (contador == 2){   
          fill ( 202,175,127);
        }
        else if ( contador ==3){
          fill (204,187,144);
        }    
        else if(contador == 4){
          fill (188,191,182); 
        }  
	else if(contador == 5){
          fill (255); 
        } 
        else {
          fill (201,174,162);
        }
// Primer patrón: 3 rectangulos del mismo color
        for ( c = 1; c < 4; c ++){
            rect(rectx,cordy, 4, 40);
            rectx = rectx + 8;
        }

      }
    
    } 
  
  }
	
// Creación de lineas legras que están encima de las lineas de colores
  cordy = 80;
  rectx = 0;
  fill(0);

// Grupos de lineas horizontales negras en las cordenadas Y = 105 & Y = 325
  for( j =1; j <=2; j++){
// Son 3 lineas en cada grupo
    for (i= 1; i<= 3; i += 1){
      rect(21, cordy+25, 433,4.5);    
      cordy += 8;
    } 
    cordy = 300;
  }
	
// Grupos de lineas negras en los laterales 
  cordy = 85;
  rectx = rectx+25;
// Se repiten dos veces en el cuadro en las posiciones Y = 85 & Y=325	
  for (m = 1; m<= 2; m++){
// Se repiten 2 veces e la misma linea horizontal en las posiciones X = 25 & X = 433	  
    for (j =1 ; j<=2 ; j++){
// Son 3 lineas en cada grupo
      for( i = 1; i<=3; i ++){
        rect( rectx, cordy, 4.5, 40);
        rectx += 8;
      } 
      rectx =433;
    }
	cordy = 325;
	rectx = 25;
  }  
	
  rectx = 25;
// Grupos de lineas en la mitad del cuadro en la posición Y = 165 que se repiten 2 veces en la misma linea horizontal 
// X = 25 & X = 433	
  for ( j =1 ; j <= 2; j++){
// Son 3 lineas en cada grupo
    for ( i = 1; i<=3; i++){
      rect ( rectx,165,4,120);
      rectx += 8;
    } 
    rectx = 433;
  }
  
}
	
  
