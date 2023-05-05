var nombre = "alan"
var nombre2 = "pepe"
var nombre3 = "juan"

//arreglo
[]
//guardamos dentro de una variable
// esta vacio
var nombres = [];

//con elementos
var nombres = ["alan","pepe","juan"];

//podemos guardar todo tipo de datos
var arr = [12,"hola",true]

//indices

nombres[0] // "alan"


// arreglos anidados
var arr = [1,2,3,4,[5,6,7,8]]
arr[4][1]//6

//metodos

var arr = []
//push
arr.push(1)
arr.push("hola")
arr.push(false)
//[1,"hola",false]

//pop

arr.pop()

//unshift
arr.unshift(0)

//shift
arr.shift()

//propiedades
//length
//la cantidad de elementos de ese arreglo
arr.length //3


var arr = [1,2,3,4,5]
var nombres = ["alan","pepe","juan"];
for(var i =0;i<nombres.length;i++){
    console.log(nombres[i])
}
