// tipos de datos
"hola mundo" // string
12 // numero
true;false//boolean
NaN // not a number
undefined // no definido
// variables

var name = "alan"
var name2 = "pepe"
var name3 = "jose"

var apellido = "fernandez"

var nombreCompleto = name +" "+ apellido
var respuesta  = 10 +20 
var respuesta  = "hola" - "mundo"

var num =0
//incrementar
num = num + 1 
num ++
//decrementar
num = num -1 
num--

//console.log(nombreCompleto)
//document.write(nombreCompleto)

//alert(nombreCompleto)

//prompt
//var respuesta = prompt("hola, ¿cual es tu nombre?")

//console.log(respuesta)

//saludar al usuario en el prompt y pedirle su nombre
//con un alert, saludarlo:
//por ejeemplo : el usuario ingresa pepe y en el alert debe decir "hola pepe"

//var res = prompt("hola ¿como te llamas?")
//alert("hola "+res)

//saludar al usuario en el prompt y pedirle su edad
//y con un alert decirle su fecha de nacimiento
var edad = prompt("hola ¿cual es tu edad?")
var añoDeNacimiento = 2023 - edad
alert("vos naciste en "+añoDeNacimiento)

// si queremos cambiarle el valor de un string a un numero
var number = "27"
//metodo 1
number = Number(number)
//metodo 2
number = +number

//operadores de comparacion
var num1 = 10
var num2 = 25
 // mayor a que 
  10 > 5 //true
  2 > 20 // false

  //menor a que
  10 < 5 //false
  2 < 20 // true

  //igual a que

  10 === 10 // true
  20===10 //false
  num1 === num2 //false

  //diferente a que

  10 !== 20 //true
  num1 !== num1 //false

 