//operadores de comparacion
10 > 5 // true
10 < 5 // false
10 === 10 // true (estricta)
"10" == 10 // true (blanda)

10 !== 10 // false

10 >=10 // true
10 > 10 // false
10 === 10 // true

10 <= 10 // true

// if else
/*
var respuesta = prompt("ingrese un numero")
if(respuesta >=10){
    alert("el usuario ingreso un numero mayor a 10")
}else{
    alert("el usuario ingreso un numero menor a 10")
}
*/

//pedirle al usuario que ingrese un numero
// si el numero es par le damos un mensaje al usuario indicando que el numeor que ingreso es par
// si es inpar le damos al usuario un alert indicando que el numero que ingreso es inpar!
/*
var num = parseInt(prompt("ingrese un numero"))
if(num % 2 === 0){
    alert("el numero "+ num + " es par")
}else{
    alert("el numero"+ num +" es impar")
}
*/


//anidamiento
/*
var num = prompt("ingrese un numero")
if(num % 2 === 0){
    if(num >= 10){
        alert("el numero es par y tambien es mayor o igual a 10")
    }
    else{
        alert("el numero es par y tambien es menor o igual a 10")
    }
}else{
    if(num <= 10){
        alert("el numero es impar y ademas es menor a 10")
    }
    else{
        alert("el numero es impar y ademas es mayor a 10")
    }
}
*/

// crear una variable llamada numeroSecreto y le van a dar como valor cualquier numero
// pedirle al usuario que adivine el numero secreto
// si el usuario adivino, le mostramos un mensaje indicando que adivino el numero
// en caso contrario, mostramos un mensaje de error, tambien indicar si el numero es mas bajo ao mas alto 
/*
var numeroSecreto = 15 
var respuesta = prompt("intenta adivinar el numero secreto por favor")
if(respuesta == numeroSecreto){
    alert("adivinaste el numero secreto!")
}else if(respuesta > numeroSecreto){
        alert("no adivinaste el numero, el numero es menor a " + respuesta)
}else{
    alert("no adivinaste el numero, el numero es mayor a "+respuesta)
}
*/

//else if

var numero = 10
/*
if(numero === 20){
    console.log("el numero es 20")
}
else{
    if(numero === 30){
        console.log("el numero es 30")
    }else{
        if(numero === 10){
            console.log("el numero es 10")
        }
    }
}

if(numero === 20){
    console.log("el numero es 20")
}
else if(numero === 30){
    console.log("el numero es 30")
}
else if(numero === 10){
    console.log("el numero es 10")
}
else if(numero === 40){
    console.log("el numero es 40")
}
else{
    console.log("numero desconocido")
}
*/
//switch
switch (numero) {
    case 10:
        console.log("el numero es 10")
        break;
    case 20:
        console.log("el numero es 20")
        break;
    case 30:
        console.log("el numero es 30")
        break;
    case 40:
            console.log("el numero es 40")
        break;
    default:
        console.log("el numero es desconocido")
        break;
}


// operadores logicos

// and 
var num = prompt("ingrese un numero")
/*
if(num > 10 && num < 20){
    alert("el usuario ingreso un numero entre 10 y 20")
}
*/
//or
 
if(num > 20 || num %2 ==0){
    alert("el numero es mayor a veinte o el numero es par")
}