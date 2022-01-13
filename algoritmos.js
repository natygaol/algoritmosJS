/*
    Escribe una función llamada encuentraElementos. Esta función tiene como parámetro un arreglo de números 
    y un número individual. La función debe de encontrar cuántas veces se encuentra el número dentro del arreglo.
    Así como los índices donde se encontró el número. La función retorna un objecto con la siguiente estructura:
    Ejemplo:
        let arrayNums = [1, 2, 3, 8, 5, 8, 7, 8, 9, 10];
        let numero = 8;
        let resultadoEncuentra = encuentraElementos( nums, num );
        {
            numero : 8,
            contador : 3,
            posiciones : [3, 5, 7]
        }
*/

function encuentraElementos(arrayNums, numero){
  let contador = 0
  let posiciones = []
  for(i= 0; i < arrayNums.length; i++){
    if(arrayNums[i] === numero){
      contador ++;
      posiciones.push(i);
    }
  }
  let obj = {
    contador: contador,
    posiciones,
    numero: numero
  };
  return obj
}

let arrayNums = [1, 2, 3, 8, 5, 8, 7, 8, 9, 10];
let numero = 8;
let resultadoEncuentra = encuentraElementos(arrayNums, numero);
console.log(resultadoEncuentra);

/* 
    Escribe dos funciones, tu elije el nombre para cada una.
    1. La primera función se encarga de generar un número aleatorio al darle clic al botón de "Generar número"
    2. La segunda función se encarga de comparar el número ingresado por el usuario contra el número aleatorio
    generado en la primera función. Si el usuario ingresa un número mas pequeño que el actual deberás de imprimir en pantalla
    "Intenta con un número más grande", si el usuario ingresa un número más grande que el actual deberás de imprimir
    en pantalla "Intenta con un número más pequeño". Hacer esto hasta que el usuario adivine el número y desplegar
    "Has adivinado el número".
*/

