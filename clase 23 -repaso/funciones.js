function saludar(nombre="alan"){
    console.log("hola como estas " + nombre)
}

function iterar(arr){
    for(var i=0;i<arr.length;i++){
        console.log(arr[i])
    }
}

function retorno(){
    return 10
   
}

function sumar(num1,num2){
    var resultado = num1 +num2
    return resultado 
}



function callback(fn){
    var resultado = fn(10,10)
    return resultado
}


function multiplicarElementos(arr){
    var newArr=[]
    for(var i=0;i<arr.length;i++){
        var multiplicar = arr[i] * 2
        newArr.push(multiplicar)
    }
    return newArr
}

function pasarAmayusculas(arr){
    var newArr=[]
    for(var i=0;i<arr.length;i++){
        newArr.push(arr[i].toUpperCase())
    }
    return newArr
}

function map(arr,fn){
    var newArr=[]
    for(var i=0;i<arr.length;i++){
        var retorno = fn(arr[i])
        newArr.push(retorno)
    }
    return newArr
}