/*
ejercicios
1-Escribir una función que se llame esPar que reciba un número y devuelva true si es un número par y false si no lo es.
2-Escribir una función que reciba una cadena de texto y devuelva su longitud.
3-Escribir una función que reciba dos números y devuelva el número más grande de los dos.
4-Escribir una función que reciba un arreglo de números y devuelva el número más grande de la lista.
*/

function esPar(num){
    if(num %2 ===0){
        return true
    }
    else {
        return false
    }
}
function esPar(num){
  return num %2 === 0
}

"hola" // 4

function longitud(string){
    return string.length
}


function mayor(num1,num2){
    if(num1 > num2){
        return num1
    }
    else{
        return num2
    }
}
//operador terniario
function mayor(num1,num2){
   return num1 > num2 ? num1 : num2
}
/*
1- escribir una funcion que tome un arreglo con numeros y devuelva un arreglo nuevo con todos esos numeros multiplicados por dos
2-escribir una funcion que tome un arreglo con strings y devuelva un nuevo arreglo con todos esos strings pero en mayuscula
3-escribir una funcion que tome un arreglo con numeros y strings y devolver un nuevo arreglo solo con numeros
4- escribir una funcion que tome un arreglo con numeros y devolver un nuevo arreglo con solamente los numeros que sean pares
*/

function multiplicar(arr){
    var newArr = []
    for(var i=0;i<arr.length;i++){
        newArr.push(arr[i] * 2)
    }
    return newArr;
}