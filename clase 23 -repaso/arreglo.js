//declarando un arreglo
[]

[1,2,3,4,5]
["hola","chau","alan"]
[1,2,3,"cuatro",5,false]
[[1,2,3],["hola","chau"]]

var arr = ["hola","chau","alan"]

//propiedad length

arr.length //  3

//metodo push
var arr2 = []
arr2.push(1)
arr2.push("dos")
arr2.push(false)
//[1,"dos",false]

//metodo pop
arr2 
arr2.pop()
var ultimo = arr2.pop()

//unshift
arr2.unshift(0)

//shift
arr2.shift()


//iterar
var arr = ["hola","chau","alan",[1,2,3,4]] //4

for(var i =0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
       for(var j=0;j<arr[i].length;j++){
        console.log(arr[i][j])
       }
    }else{
        console.log(arr[i])
    }
}

//iterar un arreglo al reves
var arr = [1,2,3,4,5]
//i=0
for (i=arr.length;i>=0;i--){
    console.log(arr[i])
    }

var arr = [1,2,3,4,5]

arr.map(function(element){
    return element * 10
})

var arr = ["hola","chau","alan"] 
//ejecutar map
//un nuevo arreglo, con todos los strings en mayuscula

arr.map(function(el){
    return el.toUpperCase()
})

arr.filter(function(el){
    return el%2!==0
})