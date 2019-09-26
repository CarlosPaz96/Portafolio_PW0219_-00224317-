/* Ejercicio 01 : Realice una función que reciba un arreglo como parámetro y 
liste los tipos de datos de sus elementos y cuantos de cada tipo.*/
function tipo(algo) {
  for (let i = 0; i < algo.length; i++) {
    console.log("El elemento " + i + " es de tipo " + typeof algo[i]);
  }
}
let lista = ["manzana", 1];

/*Ejercicio 02: Realice una función que reciba un arreglo de datos numéricos, 
y muestre la suma de todos los elementos del arreglo y su promedio. */
let numeros = [10, 10, 10, 10];

function sum_promedio(algo02) {
  let suma = 0;
  let pro;
  for (let i = 0; i < algo02.length; i++) {
    suma = algo02[i] + suma;
  }
  pro = suma / algo02.length;
  console.log(" la suma es " + suma + " y el promedio es " + pro);
}

/* Ejercicio 03 */
let numm = [1, 2, 4, 5, 5, 5, 6, 3];

function ocurrencias(listaa, evaluar) {
  let cont = 0;
  for (let i = 0; i < listaa.length; i++) {
    if (listaa[i] == evaluar) {
      cont = cont + 1;
    }
  }
  console.log("el numero " + evaluar + " se repite " + cont + " veces");
}
/*Ejercicio 04 */
function adivina(){
    var l;
    var nu;
    for (let i = 0; i < 20; i++) {
                        
    }
}

/*Ejercicio 05*/

function palindromo(palabraa) {
  var pa = palabraa
    .split("")
    .reverse()
    .join("");
  console.log(pa);
  if (pa === palabraa) {
    console.log(" la palabra es un Palíndromo");
  } else {
    console.log(" la palabra no es un Palíndromo");
  }
}
