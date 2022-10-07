// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:

var auxiliar = nombre[0].toUpperCase() + nombre.substring(1);
return auxiliar; 
}

 //OTRO OPCIÓN 

  // var auxiliar = nombre[0].toUpperCase() + nombre.substring(1);
  // return auxiliar; 
  // }

function invocarCallback(cb) {
  // Invoca al callback `cb`
 //Tu código:
 cb(); 
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:

cb (n1, n2);

}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:

  var total = 0

  for (var i = 0 ;i < numeros.length ;i++ ){
    total = total + numeros [i];
  };
  cb (total);

//OTRO OPCIÓN 

//   const suma = numeros.reduce (function (acc, elemento)
//   {return acc + elemento;
//   } ,0 );
// cb (suma)

//OTRO OPCIÓN 

//   const suma = numeros.reduce (function (a, b){ return [a + b} ,0 );
// cb (suma)

}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:



for (var i = 0 ; i < array.length ;i++){
cb (array[i])
}
}

//OTRO OPCIÓN 

// array.forEach(function (a){   //a es cada elemento del array
//   cb (a)
// })

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:

var nuevoarray = array.map (function (elemento){
  return cb (elemento);
})

return nuevoarray //Al retornar el nuevo array, y si es que lo retorna, siginifica;
                  //que el nuevo array presenta la misma longitud que el original. Si no;
                  //presentara la misma longitud no retornaria nada, o en su llegado caso 
                  //undifinited

}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:

var nuevoarray = array.filter (function (e){
  return e[0] === 'a'
})
return nuevoarray 

}

//OTRA OPCION 

//   nuevoarray = {}

// for (var i = 0 ; i < array.length - 1 ; i++){
//   for (var j = 0 ; j === array[1]; j++){
//   if (j === 'a'){
//     nuevoarray.push (array[i]);
//     }
// }}
// return nuevoarray
// }

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
