
/*Proyecto Laberinto
*Armando Fabian Gonzalez Valentin
Beatriz edolla Martinez
802-A
*/
//Matrices para el escenario
 var laberinto = [ 
             [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
             [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
             [1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1],
             [1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1],
             [1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1],
             [1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1],
             [1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1],
             [1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1],
             [1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1],
             [1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1],
             [1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1],
             [1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1],
             [1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
             [1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1],
             [1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1],
             [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
             [1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1],
             [1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1],
             [1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1],
             [1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1],
             [1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1],
             [1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1],
             [1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1],
             [1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
             [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1]]; 
   
             var laberinto2 = [ 
              [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
              [1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
              [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
              [1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1],
              [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
              [1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1],
              [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
              [1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1],
              [1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1],
              [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1],
              [1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
              [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
              [1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1],
              [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
              [1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1],
              [1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
              [1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1],
              [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
              [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1],
              [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
              [1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1],
              [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1],
              [1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
              [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];
              var laberinto3 = [ 
                [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1],
                [1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1],
                [1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1],
                [1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1],
                [1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1],
                [1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1],
                [1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1],
                [1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1],
                [1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1],
                [1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1],
                [1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1],
                [1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1],
                [1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1],
                [1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
                [1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1],
                [1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1],
                [1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];
              


var canvas;
var ctx;
var FPS = 100;

//ESCENARIO / TABLERO
var columnas = 25;
var filas = 25;
var escenario;  //MATRIZ

//TAMAÑO DE LAS CASILLAS
var anchoT;
var altoT;

const muro = "#17202A";  
const tierra = '#CACFD2'; 


//RUTA
var principio;
var fin;

//ARRAYS PARA GUARDAR LAS CASILLAS
var openSet = [];
var closedSet = [];
var camino = [];
var terminado = false;

var xf = columnas-2,yf = filas-2;
var boton = document.getElementById('ruta');
var matAux;
var cont=Math.floor(Math.random()*4);   //se genera un mapa aleatorio
var id;

canvas = document.getElementById("escenario");
ctx = canvas.getContext('2d');

//SE CARGA EL MAPA
  if (cont==1) {
   matAux= laberinto;
   inicializa();
  }
  if (cont==2) {
    matAux= laberinto2;
    inicializa(); 
   }
   if (cont==3) {
    matAux= laberinto3;
    inicializa();
   }
   //SE AGREGA EL EVENTO DEL BOTON
   boton.addEventListener("click",function(){
     window.location.reload();
   });
  


//CREAMOS UN ARRAY 2D
function creaArray2D(f,c){
  var obj = new Array(f);
  for(a=0; a<f; a++){
    obj[a] = new Array(c);
  }
  return obj;

}
//CALCULA LAS DISTANCIAS
function heuristica(a,b){
  var x = Math.abs(a.x - b.x);
  var y = Math.abs(a.y - b.y);
  var dist = x+y;
  return dist;
}

function borraDelArray(array,elemento){
  for(i=array.length-1; i>=0; i--){
    if(array[i] == elemento){
      array.splice(i,1);
    }
  }
}
//CREA CASILLAS
function Casilla(x,y, s){

  //POSICIÓN
  this.x = x;
  this.y = y;

  //TIPO (PARED=1, CAMINO=0)
  if(s == 0){
    this.tipo = 0;
  }
  
 
  if(s == 1){
      this.tipo = 1;
    }
  
  //PESOS
  this.f = 0;  //coste total (g+h)
  this.g = 0;  //pasos dados
  this.h = 0;  //heurística (estimación de lo que queda)

  this.vecinos = [];
  this.padre = null;


  //MÉTODO QUE CALCULA SUS VECNIOS
  this.addVecinos = function(){
    if(this.x > 0)
      this.vecinos.push(escenario[this.y][this.x-1]);   //vecino izquierdo

    if(this.x < filas-1)
      this.vecinos.push(escenario[this.y][this.x+1]);   //vecino derecho

    if(this.y > 0)
      this.vecinos.push(escenario[this.y-1][this.x]);   //vecino de arriba

    if(this.y < columnas-1)
      this.vecinos.push(escenario[this.y+1][this.x]); //vecino de abajo
  }



  //MÉTODO QUE DIBUJA LA CASILLA
  this.dibuja = function(){
    var color;

    if(this.tipo == 0){ 
      color = tierra;
     }
    if(this.tipo == 1)
    { 
      color = muro;
      }
    //DIBUJAMOS EL CUADRO EN EL CANVAS
    ctx.fillStyle = color;
    ctx.strokeRect(this.x*anchoT,this.y*altoT,anchoT,altoT);
    ctx.fillRect(this.x*anchoT,this.y*altoT,anchoT,altoT);
   
  }



  //DIBUJA OPENSET
  this.dibujaOS = function(){
    ctx.fillStyle = '#F4D03F';
    ctx.fillRect(this.x*anchoT,this.y*altoT,anchoT,altoT);
    ctx.strokeRect(this.x*anchoT,this.y*altoT,anchoT,altoT);

    ctx.font="20pt Verdana";
    ctx.fillStyle = "red";
    ctx.fillText(y+","+x,this.x*anchoT,this.y*altoT,anchoT,altoT);
  
  }

  //DIBUJA CLOSEDSET
  this.dibujaCS = function(){
    ctx.fillStyle = '#58D68D';
    ctx.fillRect(this.x*anchoT,this.y*altoT,anchoT,altoT);
    ctx.strokeRect(this.x*anchoT,this.y*altoT,anchoT,altoT);
    
  }


  //DIBUJA CAMINO
  this.dibujaCamino = function(){
    ctx.fillStyle = '#CD6155 ';  //cyan
    ctx.fillRect(this.x*anchoT,this.y*altoT,anchoT,altoT);
    ctx.strokeRect(this.x*anchoT,this.y*altoT,anchoT,altoT);
   
  }


}
function inicializa(){
 

  //CALCULAMOS EL TAMAÑO DE LAS CASILLAS (Proporcionalmente)
  anchoT = parseInt(canvas.width/columnas);
  altoT = parseInt(canvas.height/filas);

  //CREAMOS LA MATRIZ
  escenario = creaArray2D(filas,columnas);

  //AÑADIMOS LOS OBJETOS CASILLAS Y PASAMOS EL MAPA
  for(i=0;i<filas;i++){
   
    for(j=0;j<columnas;j++){
        escenario[i][j] = new Casilla(j,i,matAux[i][j]);
    }
  }

  //AÑADIMOS LOS VECINOS
  for(i=0;i<filas;i++){
    for(j=0;j<columnas;j++){
        escenario[i][j].addVecinos();
    }
  }

  //CREAMOS ORIGEN Y DESTINO DE LA RUTA
  principio = escenario[1][1];
  fin = escenario[xf][yf];

  //INICIALIZAMOS OPENSET
  openSet.push(principio);

  //EMPEZAMOS A EJECUTAR EL BUCLE PRINCIPAL
id = setInterval(function(){principal();},1000/FPS);

}

function dibujaEscenario(){
  for(i=0;i<filas;i++){
    for(j=0;j<columnas;j++){
        escenario[i][j].dibuja();
    }
  }

  //DIBUJA OPENSET
  for(i=0; i<openSet.length; i++){
    openSet[i].dibujaOS();
  }


  //DIBUJA CLOSEDSET
  for(i=0; i<closedSet.length; i++){
    closedSet[i].dibujaCS();
  }

  for(i=0; i<camino.length; i++){
    camino[i].dibujaCamino();
  }



}

function borraCanvas(){
  canvas.width = canvas.width;
  canvas.height = canvas.height;
}

function algoritmo(){
  //SEGUIMOS HASTA ENCONTRAR SOLUCIÓN
  if(terminado!=true){
    //SEGUIMOS SI HAY AlGO EN OPENSET
    if(openSet.length>0){
      var ganador = 0;  //índiCe o posición dentro del array openset 
      //evaluamos que OpenSet tiene un menor coste / esfuerzo
      for(i=0; i<openSet.length; i++){
        if(openSet[i].f < openSet[ganador].f){
          ganador = i;
        }
      }
      //Analizamos la casilla ganadora
      var actual = openSet[ganador];
      //SI HEMOS LLEGADO AL FINAL BUSCAMOS EL CAMINO DE VUELTA
      if(actual === fin){
        var temporal = actual;
        camino.push(temporal);
        while(temporal.padre!=null){
          temporal = temporal.padre;
          camino.push(temporal);
        }
        console.log('camino encontrado');
        
        terminado = true;
      }
      //SI NO HEMOS LLEGADO AL FINAL, SEGUIMOS
      else{
        borraDelArray(openSet,actual);
        closedSet.push(actual);
        var vecinos = actual.vecinos;
        //RECORRO LOS VECINOS DE MI GANADOR
        for(i=0; i<vecinos.length; i++){
          var vecino = vecinos[i];
          //SI EL VECINO NO ESTÁ EN CLOSEDSET Y NO ES UNA PARED, HACEMOS LOS CÁLCULOS
          if(!closedSet.includes(vecino) && vecino.tipo!=1){
            var tempG = actual.g + 1;
            //si el vecino está en OpenSet y su peso es mayor
            if(openSet.includes(vecino)){
              if(tempG < vecino.g){
                vecino.g = tempG;     //camino más corto
              }
            }
            else{
              vecino.g = tempG;
              openSet.push(vecino);
            }
            //ACTUALIZAMOS VALORES
            vecino.h = heuristica(vecino,fin);
            vecino.f = vecino.g + vecino.h;
            //GUARDAMOS EL PADRE (DE DÓNDE VENIMOS)
            vecino.padre = actual;
          }
        }
      }
    }

    else{
      console.log('No hay un camino posible');
      terminado = true;   //el algoritmo ha terminado
    }
  }
}
 
function principal(){
  borraCanvas();
  algoritmo();
  dibujaEscenario();
}


