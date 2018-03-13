

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

// Creo una serie de fors para hacer los rectangulos, identificando patrones dentro de la figura

function setup() { 
  createCanvas(458, 450);
	background(211,204,189);   	
	
  noStroke();
  fill(0);
  rect(21, cordy + 20, 428, 20);
  rect(21,365, 428, 20);

	
// Lineas negras debajo de los patrones de colores
    for (i= 1; i<= 3; i += 1){
      rect(21, cordy + 44, 428,4);    
      cordy += 8;
    } 
		cordy = 298;
    for (i= 1; i<= 3; i += 1){
      rect(21, cordy + 44, 428,4);    
      cordy += 8;
    } 
  	cordy = 77;
  
	for( j = 1; j <=3; j++){
    for( i = 1; i<= 6; i++){
      rect ( 21, cordy + 44, 428,4);
      cordy += 8;
    }
    cordy += 34;
  }
 	// La linea se repite 4 veces en el cuadro 
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
	// Primer patrón: 3 Rectangulos del mismo color 
  	for ( p = 1; p <= 3; p += 1){
      contador = 0;  
	// Segundo patrón: ese grupo de rectangulos se repiten 6 veces cambiandoel color
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
	 // Se pintan los grupos de 6 colores 4 veces
        for ( i = 1; i < 4; i ++){
            rect(rectx,cordy, 4, 40);
            rectx = rectx + 8;
        }

      }

    }
  
  }      


  // Lineas negras arriba de los colores 
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
	  // Selección de colores para los segundos patrones de colores
    for ( a = 1; a <4; a++){
      contador = 0;  
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
	      // Creacin de los rectangulos
        for ( c = 1; c < 4; c ++){
            rect(rectx,cordy, 4, 40);
            rectx = rectx + 8;
        }

      }
    
    } 
  
  }
  
  cordy = 80;
  rectx = 0;
  fill(0);
	
  for( j =1; j <=2; j++){
    for (i= 1; i<= 3; i += 1){
      rect(21, cordy+25, 433,4.5);    
      cordy += 8;
    } 
    cordy = 300;
  }
  
  cordy = 85;
  rectx = rectx+25;
  for (m = 1; m<= 2; m++){
    for (j =1 ; j<=2 ; j++){
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
  
  for ( j =1 ; j <= 2; j++){
    for ( i = 1; i<=3; i++){
      rect ( rectx,165,4,120);
      rectx += 8;
    } 
    rectx = 433;
  }
  
}
	
  
