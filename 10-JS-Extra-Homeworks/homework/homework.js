// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

var auxiliar = [];

for (var key in objeto){
  auxiliar.push([key, objeto[key]]);
}
return auxiliar;

//OTRA FORMA 

// return objeto.entries(objeto);

// Y OTRA FORMA

// return Object.keys(objeto).map((key)=>{
//   return [key, objeto[key]];});
}



function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  // function filter(array) {
  //   //Filtrar todos los elementos del array que comiencen con la letra "a".
  //   //Devolver un nuevo array con los elementos que cumplen la condición
  //   //Tu código:
  
var obj = {};

// for (var i = 0; i <string.length ; i++){
//   if (!obj[string[i]]) {
//     obj[string[i]] = 0;
//   }
//   obj[string[i]] = obj[string[i]] + 1;
// }
// return obj 
  
// }


// var obj = {};

// for (var i = 0; i <string.length ; i++){
//   if (obj.hasOwnProperty(string[i])) {
//     obj[string[i]]++;
//   } else {
//   obj[string[i]] = 1;
// } 
// } return obj
// }


for (var i = 0; i <string.length ; i++){
  if (string[i] in  obj ) {
    obj[string[i]]++;
  } else{
    obj[string[i]] = 1;
  }
}return obj 

}



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  // var auxiliar = nombre[0].toUpperCase() + nombre.substring(1);
  // return auxiliar; 
  // }
  
var mayus = '';
var minus = '';
var palabra = mayus + minus;

for (var i = 0; i < s.length ; i++){
  if (s[i] === s[i].toUpperCase()){
    mayus += s[i];
  } else {
    minus +=  s[i];
  }
};
return mayus + minus;
}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var fraseporparte = str.split(" ");

  var frasefinal= [];
  
  for (var i = 0 ; i < fraseporparte.length ; i ++){
      frasefinal.push(fraseporparte[i].split("").reverse().join(""));
  }
  
  return frasefinal.join(" ")

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

// var cadena = numero.toString();
// var cadenainvertida = "";
// cadenainvertida = cadena.split('').reverse().join('');


var invertido = numero.toString().split("").reverse().join('');
var comun = numero.toString();

if (invertido === comun){
  return 'Es capicua';
}
return 'No es capicua';

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

var abc = cadena.split('');
var nuevacadena = [];

for (var i = 0; i < abc.length ; i ++){
  if (abc[i] !== "a" && abc[i] !== "b" && abc[i] !== "c"){
    nuevacadena.push(abc[i]);
  }
}
return nuevacadena.join('');

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  return arr.sort(function (a, b){
    return a.length -  b.length;
  });
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  


  nuevoarray = [];

  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
        if (arreglo1[i] === arreglo2[j]){
          nuevoarray.push(arreglo1[i])} 
  }
  } return nuevoarray;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

