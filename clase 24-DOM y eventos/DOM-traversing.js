/*
Manipulación avanzada del DOM: Traversing y Manipulación

Además de acceder y modificar elementos individuales del DOM, también podemos realizar manipulaciones avanzadas utilizando técnicas como el traversing (recorrido) del DOM y la manipulación de múltiples elementos. Estas técnicas nos permiten realizar acciones más complejas y dinámicas en nuestras páginas web. A continuación, exploraremos dos conceptos clave: traversing del DOM y manipulación de elementos múltiples.

1. Traversing del DOM:

El traversing del DOM nos permite recorrer y acceder a diferentes elementos del árbol DOM. Algunas técnicas comunes de traversing incluyen:

Acceder al padre de un elemento: Utilizamos la propiedad parentNode para acceder al elemento padre de un nodo.
Acceder a los hijos de un elemento: Utilizamos las propiedades childNodes o children para acceder a los nodos hijos de un elemento.
Acceder a los hermanos de un elemento: Utilizamos las propiedades previousSibling y nextSibling para acceder a los nodos hermanos anteriores y siguientes respectivamente.
Acceder a elementos específicos por su posición: Utilizamos las propiedades firstChild y lastChild para acceder al primer y último nodo hijo de un elemento, respectivamente.
Acceder a elementos según su relación: Utilizamos las propiedades nextElementSibling y previousElementSibling para acceder a los elementos hermanos siguientes y anteriores, excluyendo los nodos de texto.
*/
var elementoPadre = document.getElementById("miElementoPadre");
var primerHijo = elementoPadre.firstChild;
var siguienteElemento = primerHijo.nextElementSibling;

/*
En este ejemplo, seleccionamos un elemento padre por su id y luego accedemos a su primer nodo hijo utilizando firstChild. Luego, utilizamos nextElementSibling para acceder al siguiente elemento hermano.

2. Manipulación de elementos múltiples:

Además de manipular elementos individuales, también podemos realizar acciones en múltiples elementos del DOM al mismo tiempo. Algunas técnicas comunes de manipulación de elementos múltiples incluyen:

Iterar sobre una lista de elementos: Utilizamos un bucle (por ejemplo, for o forEach) para recorrer una lista de elementos y realizar acciones en cada uno de ellos.
Filtrar elementos según un criterio: Utilizamos métodos como filter o querySelectorAll para seleccionar elementos específicos basados en un criterio (por ejemplo, una clase o una etiqueta).
Añadir o eliminar clases en elementos: Utilizamos las propiedades classList.add y classList.remove para añadir o eliminar clases en múltiples elementos a la vez.
*/
var listaElementos = document.querySelectorAll(".miClase");

listaElementos.forEach(function(elemento) {
  elemento.classList.add("nuevaClase");
});
/*
En este ejemplo, seleccionamos todos los elementos que tienen la clase "miClase" utilizando querySelectorAll. Luego, utilizamos forEach para iterar sobre cada elemento y añadir la clase "nuevaClase" utilizando classList.add.

Estas técnicas de traversing y manipulación de elementos múltiples nos permiten realizar operaciones más complejas y dinámicas en el DOM. Puedes combinar el traversing con la manipulación de elementos para realizar acciones como la búsqueda y modificación de elementos específicos, la creación dinámica de elementos, la eliminación de elementos seleccionados, entre otros.

Además, al utilizar estas técnicas junto con los eventos del DOM que mencionamos anteriormente, puedes crear interacciones aún más poderosas. Por ejemplo, puedes detectar un clic en un elemento y luego utilizar el traversing para acceder a los elementos relacionados y realizar cambios en ellos.

Recuerda que es importante tener cuidado al manipular el DOM, ya que realizar muchas modificaciones puede afectar el rendimiento de la página. Siempre es recomendable optimizar tu código y buscar la manera más eficiente de lograr el resultado deseado.

En resumen, el traversing y la manipulación de elementos múltiples son herramientas poderosas que nos permiten recorrer, seleccionar y modificar de manera dinámica los elementos del DOM. Con estas técnicas, puedes crear aplicaciones web más interactivas y personalizadas, brindando una experiencia más rica a los usuarios.
*/