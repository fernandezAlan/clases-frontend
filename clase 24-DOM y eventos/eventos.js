/*
Eventos del DOM: Interacción y manipulación dinámica

Los eventos del DOM nos permiten detectar y responder a las acciones del usuario, como hacer clic en un elemento, mover el cursor, presionar una tecla, etc. Al asociar funciones a eventos, podemos crear interacciones dinámicas y manipular el contenido del DOM en tiempo real. Veamos algunos conceptos y ejemplos de eventos del DOM:

1. Asociar eventos a elementos:

Podemos asociar eventos a elementos del DOM utilizando el método addEventListener. Al hacerlo, especificamos el tipo de evento y la función que se ejecutará cuando ocurra dicho evento.
*/

var boton = document.getElementById("miBoton");

boton.addEventListener("click", function() {
  // Acciones a realizar cuando se haga clic en el botón
  console.log("Se hizo clic en el botón");
});
/*
En este ejemplo, seleccionamos un elemento de botón por su id y luego utilizamos addEventListener para asociar el evento "click" a una función anónima. Cuando se haga clic en el botón, se ejecutará la función y se mostrará el mensaje "Se hizo clic en el botón" en la consola.

2. Tipos de eventos comunes:

Existen numerosos tipos de eventos del DOM que podemos utilizar para capturar la interacción del usuario. Algunos ejemplos de eventos comunes incluyen:
*/

//click: Se dispara cuando se hace clic en un elemento.
var boton = document.getElementById("miBoton");

boton.addEventListener("click", function() {
  console.log("Se hizo clic en el botón");
});

//mouseover y mouseout: Se disparan cuando el cursor se mueve sobre un elemento y cuando sale de él, respectivamente.
var elemento = document.getElementById("miElemento");

elemento.addEventListener("mouseover", function() {
  console.log("El cursor está sobre el elemento");
});

elemento.addEventListener("mouseout", function() {
  console.log("El cursor salió del elemento");
});

//keydown, keyup y keypress: Se disparan cuando se presiona, se suelta o se mantiene presionada una tecla del teclado.

document.addEventListener("keydown", function(event) {
    console.log("Se presionó la tecla: " + event.key);
  });
  
  document.addEventListener("keyup", function(event) {
    console.log("Se soltó la tecla: " + event.key);
  });

//submit: Se dispara cuando se envía un formulario.

var formulario = document.getElementById("miFormulario");

formulario.addEventListener("submit", function(event) {
  event.preventDefault(); // Evita el envío del formulario
  console.log("Se envió el formulario");
});

//change: Se dispara cuando el valor de un elemento cambia, como en un campo de texto o una casilla de verificación.
var campoTexto = document.getElementById("miCampoTexto");

campoTexto.addEventListener("change", function() {
  console.log("El valor del campo de texto cambió");
});

/*
3. Eventos y la función manejadora:

La función que se ejecuta cuando ocurre un evento se conoce como función manejadora o handler. Esta función puede recibir un objeto de evento como argumento, el cual proporciona información adicional sobre el evento.

*/
var enlace = document.getElementById("miEnlace");

function manejadorClick(event) {
  event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
  console.log("Se hizo clic en el enlace");
}
/*
enlace.addEventListener("click", manejadorClick);
En este ejemplo, hemos definido una función manejadora llamada manejadorClick que recibe el objeto de evento como argumento. Utilizamos preventDefault para evitar que el enlace se abra en una nueva página y mostramos un mensaje en la consola.

4. Eliminación de eventos:

Si deseamos eliminar un evento asociado a un elemento, podemos utilizar el método removeEventListener.
*/
var boton = document.getElementById("miBoton");

function manejadorClick() {
  console.log("Se hizo clic en el botón");
}

boton.addEventListener("click", manejadorClick);

// Eliminar el evento después de un tiempo determinado
setTimeout(function() {
  boton.removeEventListener("click", manejadorClick);
}, 5000);
//En este ejemplo, añadimos un evento de clic al botón utilizando addEventListener. Luego, utilizamos
