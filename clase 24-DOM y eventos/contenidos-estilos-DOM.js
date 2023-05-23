/*
Modificación del contenido y estilos del DOM

Una de las ventajas clave de trabajar con el DOM es la capacidad de modificar el contenido y los estilos de los elementos de manera dinámica. Esto nos permite actualizar y personalizar la apariencia de nuestra página web en respuesta a acciones del usuario o cambios en los datos. A continuación, exploraremos algunas técnicas comunes para la modificación del contenido y estilos del DOM.

1. Modificación del contenido:

Podemos modificar el contenido de un elemento del DOM accediendo a su propiedad innerHTML. Esta propiedad nos permite obtener o establecer el contenido HTML dentro de un elemento.

*/
var elemento = document.getElementById("miElemento");

// Obtener el contenido HTML del elemento
var contenido = elemento.innerHTML;

// Establecer un nuevo contenido HTML en el elemento
elemento.innerHTML = "<p>¡Nuevo contenido!</p>";
/*
En este ejemplo, seleccionamos un elemento por su id y utilizamos innerHTML para obtener y establecer el contenido HTML. Podemos asignar etiquetas HTML, texto u otros elementos al contenido.

2. Modificación de estilos:

Podemos modificar los estilos de un elemento del DOM utilizando la propiedad style. Esta propiedad nos permite acceder y cambiar los estilos individuales del elemento.

*/
var elemento = document.getElementById("miElemento");

// Cambiar el color de fondo del elemento
elemento.style.backgroundColor = "blue";

// Cambiar el tamaño de fuente del elemento
elemento.style.fontSize = "20px";
/*
En este ejemplo, seleccionamos un elemento por su id y utilizamos style para acceder a sus estilos. Podemos asignar valores a las propiedades de estilo, como el color de fondo, tamaño de fuente, margen, entre otros.

3. Creación y eliminación de elementos:

Además de modificar elementos existentes, también podemos crear y eliminar elementos dinámicamente en el DOM. Utilizamos métodos como createElement, appendChild y removeChild para realizar estas acciones.

*/
// Crear un nuevo elemento
var nuevoElemento = document.createElement("div");

// Añadir el nuevo elemento como hijo de otro elemento existente
var contenedor = document.getElementById("contenedor");
contenedor.appendChild(nuevoElemento);

// Eliminar un elemento existente
contenedor.removeChild(nuevoElemento);
/*
En este ejemplo, creamos un nuevo elemento utilizando createElement y luego lo añadimos como hijo de otro elemento existente utilizando appendChild. También podemos eliminar un elemento utilizando removeChild.

Estas son solo algunas de las técnicas para modificar el contenido y estilos del DOM. Con estas herramientas, puedes crear efectos visuales, actualizar datos en tiempo real y adaptar la apariencia de tu página web de manera dinámica.

Recuerda mantener un equilibrio entre la manipulación del DOM y el rendimiento de la página. Es recomendable utilizar técnicas eficientes y optimizar tu código para garantizar una experiencia fluida para los usuarios.


Manipulación de clases:

Podemos manipular las clases de un elemento utilizando la propiedad classList. Esta propiedad nos permite agregar, eliminar o verificar la presencia de clases en un elemento.

Agregar una clase: Utilizamos la propiedad classList.add para agregar una clase a un elemento.
*/
var elemento = document.getElementById("miElemento");

// Agregar una clase a un elemento
elemento.classList.add("miClase");
//Eliminar una clase: Utilizamos la propiedad classList.remove para eliminar una clase de un elemento.

var elemento = document.getElementById("miElemento");

// Eliminar una clase de un elemento
elemento.classList.remove("miClase");
/*
Verificar la presencia de una clase: Utilizamos la propiedad classList.contains para verificar si un elemento tiene una clase específica.
*/
var elemento = document.getElementById("miElemento");

// Verificar si un elemento tiene una clase
if (elemento.classList.contains("miClase")) {
  console.log("El elemento tiene la clase 'miClase'");
}

