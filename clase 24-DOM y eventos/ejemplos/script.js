setTimeout(function(){
    document.body.children[0]
},3000)
var h1 = document.body.children[0]
var padre = h1.parentElement

var parrafo = document.getElementById("parrafo")
var div = document.getElementsByClassName("miDiv")
var section = document.getElementsByTagName("section")
var element = document.querySelector(".miDiv")
var elements = document.querySelectorAll(".miDiv")


var lista = document.getElementById("miLista")
var nuevoElemento = document.createElement("li")
nuevoElemento.textContent = "soy un nuevo elemento"
lista.appendChild(nuevoElemento)


var elementoAeliminar = document.querySelector("#miLista-2 li:nth-child(3)")
var padre = elementoAeliminar.parentNode
padre.removeChild(elementoAeliminar)



//parrafo.textContent = "este es otro contenido"
parrafo.style.color = "red"
console.log(div)
console.log(parrafo)
console.log(section)
console.log("querySelector",element)
console.log("querySelectorAll",elements)

//eventos
//click
var boton = document.querySelector("button")//

boton.addEventListener("click",function(){
    document.body.style.backgroundColor = "red"
})

//mouseover-mouseout
var elemento = document.getElementById("miElemento");

elemento.addEventListener("mouseover", function() {
  console.log("El cursor está sobre el elemento");
});

elemento.addEventListener("mouseout", function() {
  console.log("El cursor salió del elemento");
});
