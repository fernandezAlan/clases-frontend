/*
En JavaScript, un objeto es una entidad que puede tener propiedades y métodos. Es una colección de datos y funciones que trabajan juntos para realizar una tarea específica. Los objetos en JavaScript se utilizan para representar entidades del mundo real, como una persona, un coche o un producto, o para modelar objetos abstractos, como un reloj o una calculadora.

la sintaxis valida para escribir un objeto son: {}
guardamos datos en estos objetos utilizando las propiedades para almacenar valores, digamos que queremos guardar el nombre de un usuario lo podriamos hacer de la siguiente manera:
*/

{name:"alan"}
{names:["alan","pepe","juan"]}
/*
name es la propiedad y el string "alan" es el valor
como valor podemos almacener los valores que queramos incluso otros objetos o arreglos
para guardar este objeto en memoria debemos almacenarlo en una variable: 
*/
 var usuario = {name:"alan"}

 /*
 podemos guardar mas datos dentro del objeto, separando cada uno de estos datos con una coma
 */
var usuario = {
    name:"alan",
    email:"alan@ala.com",
    edad:28,
    lenguajes:["javascript","css","html"]
}
//acceder a los datos dentro de estos objetos

//dot notation
usuario.name
usuario.email
usuario.edad
usuario.lenguajes[1]

//bracket notation

usuario["name"]
usuario["email"]

var propiedad = "name"

usuario[propiedad] // "alan"
// asignar valores
var obj = {}
obj.name = "alan"
obj["apellido"] = "garcia"



//metodos
var obj = {
    nombre:"alan",
    apellido:"fernandez",
    saludar:function(){
       console.log("hola, me llamo "+this.nombre+" "+this.apellido)
    }
}

// ejercicio

// crear una funcion que reciba por parametro un string y un numero, la funcion devuelve un arreglo con objetos dentro,cada objecto tiene la propiedad llamada "prop" y como valor de cada objecto esta el string que recibimos por parametro, y el numero me indica la cantidad de objetos que voy atener dentro del arreglo

function makeObjects(string, num){
var arr = []
for(var i=0;i<num;i++){
    arr.push({prop:string})
}

return arr
}

//[{prop:"banana"},{prop:"banana"},{prop:"banana"},{prop:"banana"},{prop:"banana"}]




