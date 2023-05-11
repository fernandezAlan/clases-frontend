//EJERCICIOS

// 1- Crear una función que reciba un arreglo de numeros y devuelva el numero más alto de se arreglo. no pueden usar la funcion Math.max()
//[2,4,14,7,8,20,5,2]
function numMax(arr){
    let max=arr[0]
    for(var i=1;i<arr.length;i++){
        if(max < arr[i]){
            max= arr[i]
        }
    }
    return max
}

//2-Crear una función que reciba un arreglo de objetos con propiedades de nombre y edad, y devuelva un nuevo arreglo con solo los objetos con edad mayor o igual a 18 años.

//1 manera
function mayoresDeEdad(arr){
    var newArr = []
    for(var i=0;i<arr.length;i++){
        if(arr[i].edad>=18){
            newArr.push(arr[i])
        }
    }


    return newArr
}

mayoresDeEdad([{edad:15},{edad:20},{edad:12},{edad:24}])

//2 manera
function mayoresDeEdad(arr){
   return arr.filter(function(el){
    return el.edad >=18
   })
}
/*
function filter(arr,fn){
    var newArr= []
    for(var i=0;i<arr.length;i++){
       var res = fn(arr[i])
       if(res){
        newArr.push(arr[i])
       }
    }
    return newArr
}
*/

//3- crear una funcion que que reciba un objeto como parametro, un ejemplo del objeto que recibira es el siguiente:
var estudiante = {
    nombre:"juan",
    edad:17,
    notas:[8,8,10,5,7,9]
} 

//la funcion debera devolver el mismo objeto pero con una propiedad extra llamada "promedio", esta propiedad contendra como valor el promedio de todas las notas que se encuentren en el arreglo de notas(para calcular el promedio deben sumar todas las notas y dividirlas por la cantidad de notas sumadas). El resultado de la funcion deberia ser el siguiente:

//creamos la funcion
function añadirPromedio(obj){
    var suma = 0
    var notas = obj.notas
    for(var i=0;i<notas.length;i++){
        suma = suma + notas[i]
    }
var promedio = suma / notas.length
obj.promedio = Math.round(promedio)
return obj
}

function añadirPromedio(obj){
    var notas = obj.notas
    var suma = notas.reduce(function(acumulador,actual){
        return acumulador +actual
    })
var promedio = suma / notas.length
obj.promedio = Math.round(promedio)
return obj
}

//la ejecutamos pasandole el objeto
añadirPromedio(estudiante) /*esto devera devolver: 
{
    nombre:"juan",
    edad:17,
    notas:[8,8,10,5,7,9],
    promedio:8 (en realidad el resultado es 7.8 pero la funcion debe redondear el numero)
}*/

/*
4-Supongamos que tienes una tienda en línea y necesitas crear un objeto CarritoDeCompras que permita al usuario agregar productos, eliminar productos y calcular el total de la compra. Cada producto tiene un precio y una cantidad. El objeto CarritoDeCompras debería tener los siguientes métodos:

- agregarProducto(producto): agrega un producto al carrito.
- eliminarProducto(producto): elimina un producto del carrito.
- calcularTotal(): calcula el total de la compra sumando el precio de cada producto multiplicado por su cantidad.
*/

const CarritoDeCompras = {
    productos: [],
    agregarProducto: function(producto) {
    },
    eliminarProducto: function(producto) {
        //utilizar el metodo indexOf de los arreglos para encontrar el indice del producto dentro del arreglo
        //puedes utilizar el metodo splice de los arreglo para eliminar elementos dentro de un arreglo utilizando su indice (puedes buscar el metodo en internet)
    },
    calcularTotal: function() {
   
    }
  };
  
  const producto1 = { nombre: "Camiseta", precio: 20, cantidad: 2 };
  const producto2 = { nombre: "Pantalón", precio: 30, cantidad: 1 };
  
  CarritoDeCompras.agregarProducto(producto1);
  CarritoDeCompras.agregarProducto(producto2);
  
  console.log(CarritoDeCompras.calcularTotal()); // 70
  
  CarritoDeCompras.eliminarProducto(producto1);
  
  console.log(CarritoDeCompras.calcularTotal()); // 30

