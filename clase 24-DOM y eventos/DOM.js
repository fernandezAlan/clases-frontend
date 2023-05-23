/*
Definición y concepto del DOM

El Document Object Model (DOM) es una representación estructurada y orientada a objetos de un documento HTML. En esencia, el DOM es una interfaz de programación que permite a los desarrolladores acceder y manipular los elementos de una página web de manera dinámica.

Cuando un navegador carga una página web, construye internamente una estructura de datos basada en el código HTML del documento. Esta estructura de datos es conocida como el DOM. Cada elemento del HTML se convierte en un nodo en el árbol de nodos del DOM, lo que nos permite acceder y manipular individualmente cada parte de la página.

 el nodo raíz del DOM es el objeto Document, que representa todo el documento HTML. A partir de ahí, podemos acceder a los nodos html, head, title, body, h1, p, ul, li, entre otros. Cada uno de estos nodos es un objeto con propiedades y métodos que nos permiten interactuar con ellos.

El DOM es fundamental en el desarrollo web, ya que nos permite escribir scripts en JavaScript para modificar el contenido, los estilos y el comportamiento de una página web. Al manipular el DOM dinámicamente, podemos crear interacciones en tiempo real y personalizar la experiencia del usuario.

En resumen, el DOM es la representación en memoria de una página web, organizada como un árbol de nodos. Nos brinda una forma estructurada y accesible de interactuar con los elementos de la página mediante JavaScript u otros lenguajes de programación.
podemos visualizar el DOM de la siguiente manera:
https://www.freecodecamp.org/news/content/images/2021/09/Document.jpg
y al mismo tiempo podemo entender al DOM como el siguiente objeto
*/

//este ejemplo es solo una representacion muy resumida de como es que realmente se ve el DOM en javascript
var DOM={
    html:{
        head:{
            meta:{},
            title:{}
        },
        body:{
            h1:{
                id:"titulo",
                textContext:"soy un titulo",
                class:["principal","dark-title"]
            },
            h2:{
                textContent:"soy un subtitulo"
            }
        }
    }
}

/*
Árbol de nodos y jerarquía

El DOM organiza los elementos de una página web en una estructura jerárquica conocida como árbol de nodos. En este árbol, cada elemento HTML se representa como un nodo, y los nodos están conectados entre sí mediante relaciones padre-hijo y hermano-hermano.

Jerarquía en el árbol de nodos:

Nodo raíz: En la parte superior del árbol se encuentra el nodo raíz, que representa todo el documento HTML. En JavaScript, este nodo se puede acceder utilizando el objeto document.

Nodos padre e hijos: Cada nodo, excepto el nodo raíz, puede tener nodos hijos. Estos nodos hijos son elementos que están anidados dentro del nodo padre. Un nodo padre puede tener múltiples nodos hijos, pero cada nodo hijo solo puede tener un nodo padre.

Nodos hermanos: Los nodos que tienen el mismo nodo padre se consideran hermanos. Esto significa que están en el mismo nivel jerárquico dentro del árbol. Los nodos hermanos comparten un nodo padre común y son accesibles desde ese nodo padre.
*/

/*
Nodos del DOM: elementos, texto, atributos, etc.

El DOM representa cada parte de una página web como un nodo en el árbol del DOM. Los nodos del DOM pueden ser de diferentes tipos, dependiendo de su contenido y función en el documento.

1. Elementos:

Los elementos son los componentes básicos de una página web y se representan como nodos en el árbol del DOM. Cada etiqueta HTML se convierte en un nodo de tipo elemento. Los elementos pueden tener hijos, atributos y contenido de texto.

Ejemplo:

<div id="miDiv">Este es un elemento div</div>

En este caso, el nodo correspondiente al elemento <div> se representa como un nodo de tipo elemento en el DOM. El nodo tiene un atributo id con el valor "miDiv" y un nodo hijo que contiene el texto "Este es un elemento div".

2. Texto:

El contenido de texto dentro de los elementos HTML también se representa como nodos en el árbol del DOM. Los nodos de texto contienen el texto puro dentro de un elemento y no pueden tener hijos ni atributos.

Ejemplo:


<p>Este es un <strong>párrafo</strong> de ejemplo.</p>
En este ejemplo, el texto "Este es un" y "párrafo de ejemplo." se representan como nodos de tipo texto en el DOM.

3. Atributos:

Los atributos de los elementos HTML también se representan como nodos en el árbol del DOM. Los nodos de atributo contienen el nombre y el valor de un atributo específico de un elemento.

Ejemplo:


<a href="https://www.ejemplo.com">Enlace de ejemplo</a>
En este caso, el atributo href con el valor "https://www.ejemplo.com" se representa como un nodo de atributo en el DOM.

4. Otros tipos de nodos:

Además de los elementos, texto y atributos, existen otros tipos de nodos en el DOM, como los nodos de comentario, los nodos de documento, los nodos de fragmento, etc. Estos tipos de nodos tienen diferentes propósitos y se utilizan en situaciones específicas.

Es importante entender los diferentes tipos de nodos del DOM, ya que nos permiten acceder y manipular elementos, atributos y contenido de texto en una página web. Podemos utilizar métodos y propiedades del DOM para seleccionar nodos específicos, modificar su contenido y atributos, agregar nuevos nodos y más. Esto nos brinda la capacidad de crear interacciones dinámicas y personalizadas en nuestras aplicaciones web.
*/


/*

Relaciones entre nodos: padres, hijos, hermanos, etc.

En el DOM, los nodos están organizados en una estructura jerárquica que establece diversas relaciones entre ellos. Estas relaciones son fundamentales para acceder y manipular los nodos de manera precisa.

Aquí están las principales relaciones entre nodos en el DOM:

Padre e hijo:

Un nodo padre puede tener uno o varios nodos hijos.
Los nodos hijos están contenidos dentro de su nodo padre.
Un nodo hijo solo puede tener un nodo padre.
Hermanos:

Los nodos que tienen el mismo nodo padre se consideran hermanos.
Los nodos hermanos están en el mismo nivel jerárquico dentro del árbol.
Nodo hijo primero y último:

Un nodo padre puede tener un nodo hijo que se considera el primer hijo.
Un nodo padre puede tener un nodo hijo que se considera el último hijo.
Nodos adyacentes:

Los nodos adyacentes son nodos hermanos que están uno al lado del otro en el árbol.
Nodo padre y descendientes:

Un nodo padre puede tener nodos hijos directos y nodos hijos de los hijos.
Los nodos hijos, los nodos hijos de los hijos y así sucesivamente, se consideran descendientes del nodo padre.
Nodo anterior y siguiente:

El nodo anterior es el nodo hermano que está justo antes de un nodo en el árbol.
El nodo siguiente es el nodo hermano que está justo después de un nodo en el árbol.
Estas relaciones son esenciales para navegar y manipular el DOM mediante JavaScript. Podemos utilizar métodos y propiedades del DOM para acceder a los nodos padre, nodos hijos, nodos hermanos, nodos adyacentes, nodos anteriores y nodos siguientes. Estas operaciones nos permiten realizar cambios específicos en la estructura del DOM y en su contenido.
*/

/*
Acceso y manipulación del DOM

Acceder y manipular el DOM es una parte fundamental del desarrollo web. Permite modificar dinámicamente el contenido, los estilos y el comportamiento de una página web. A continuación, exploraremos cómo seleccionar y manipular elementos del DOM utilizando JavaScript.

Selección de elementos:

Existen diversos métodos para seleccionar elementos del DOM según nuestras necesidades. Algunos de los métodos más comunes son:

getElementById: Selecciona un elemento por su identificador único.
getElementsByClassName: Selecciona elementos por su clase.
getElementsByTagName: Selecciona elementos por su etiqueta.
querySelector: Selecciona el primer elemento que coincida con un selector CSS.
querySelectorAll: Selecciona todos los elementos que coincidan con un selector CSS.
Modificación de contenido y atributos:

Una vez que hemos seleccionado un elemento del DOM, podemos modificar su contenido y atributos. Algunas operaciones comunes son:

Acceso y modificación del contenido de un elemento: Podemos utilizar la propiedad innerHTML para acceder y modificar el contenido HTML de un elemento, o la propiedad textContent para acceder y modificar el contenido de texto puro.
Acceso y modificación de atributos: Podemos utilizar las propiedades getAttribute y setAttribute para acceder y modificar atributos de un elemento.
Manipulación de estilos CSS:

Podemos manipular los estilos CSS de un elemento utilizando la propiedad style. Algunas operaciones comunes son:

Modificación de estilos individuales: Podemos acceder y modificar propiedades de estilo específicas utilizando la sintaxis elemento.style.propiedad.
Añadir o quitar clases: Podemos utilizar las propiedades classList.add y classList.remove para añadir o quitar clases de un elemento.
Creación y eliminación de nodos:

Además de modificar elementos existentes, también podemos crear y eliminar nodos en el DOM. Algunas operaciones incluyen:

Creación de nodos: Podemos utilizar los métodos createElement y createTextNode para crear elementos y nodos de texto respectivamente.
Inserción de nodos: Utilizando métodos como appendChild, insertBefore y replaceChild, podemos insertar nodos en diferentes posiciones dentro del DOM.
Eliminación de nodos: Podemos utilizar el método removeChild para eliminar un nodo del DOM.
Es importante tener en cuenta que la manipulación del DOM puede afectar el rendimiento de la página, especialmente cuando se realizan múltiples cambios. Se recomienda utilizar las técnicas adecuadas y optimizar el código para lograr una manipulación eficiente del DOM.

Recuerda que el acceso y la manipulación del DOM son fundamentales para crear interacciones dinámicas y personalizadas en tus aplicaciones web. Con las herramientas adecuadas y un buen entendimiento del DOM, podrás construir experiencias interactivas para los usuarios.
*/

//Ejemplo 1: Cambiar el contenido de un elemento:

//<p id="miParrafo">Texto original</p>
// Acceder al elemento por su id
var parrafo = document.getElementById("miParrafo");

// Cambiar el contenido del elemento
parrafo.innerHTML = "Nuevo texto";
/*
En este ejemplo, seleccionamos el elemento de párrafo utilizando getElementById y luego utilizamos la propiedad innerHTML para cambiar su contenido a "Nuevo texto".
*/



//Ejemplo 2: Modificar estilos CSS:
//<p id="miParrafo">Texto original</p>

// Acceder al elemento por su id
var parrafo = document.getElementById("miParrafo");

// Modificar estilos CSS
parrafo.style.color = "red";
parrafo.style.fontSize = "20px";

/*
En este ejemplo, seleccionamos el elemento de párrafo utilizando getElementById y luego utilizamos la propiedad style para modificar los estilos CSS. Establecemos el color del texto en rojo y el tamaño de fuente en 20 píxeles.
*/

//Ejemplo 3: Crear y añadir elementos al DOM:

/*
<ul id="miLista">
  <li>Elemento 1</li>
  <li>Elemento 2</li>
</ul>
*/

// Acceder al elemento ul por su id
var lista = document.getElementById("miLista");

// Crear un nuevo elemento li
var nuevoElemento = document.createElement("li");
var textoNuevoElemento = document.createTextNode("Elemento 3");
nuevoElemento.appendChild(textoNuevoElemento);

// Añadir el nuevo elemento a la lista
lista.appendChild(nuevoElemento);
/*
En este ejemplo, seleccionamos el elemento <ul> utilizando getElementById y luego creamos un nuevo elemento <li> utilizando createElement. Luego, creamos un nodo de texto utilizando createTextNode y lo añadimos como hijo del nuevo elemento <li>. Finalmente, utilizamos appendChild para añadir el nuevo elemento a la lista.
*/

//Ejemplo 4: Eliminar un nodo del DOM:

/*
<ul id="miLista">
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
</ul>
*/

// Acceder al elemento li que se desea eliminar
var elementoEliminar = document.querySelector("#miLista li:nth-child(2)");

// Acceder al padre del elemento y eliminarlo
var padreElemento = elementoEliminar.parentNode;
padreElemento.removeChild(elementoEliminar);

/*
En este ejemplo, seleccionamos el segundo elemento <li> dentro de la lista utilizando querySelector y :nth-child(2). Luego, accedemos al padre del elemento utilizando parentNode y utilizamos removeChild para eliminar el elemento del DOM.
*/
/*
Estos ejemplos te dan una idea de cómo puedes acceder y manipular el DOM utilizando JavaScript. Recuerda que hay muchas más operaciones y métodos disponibles para interactuar con el DOM, y puedes explorar más a fondo según tus necesidades.
*/

/*
Manipulación de atributos:

Podemos manipular los atributos de un elemento utilizando las propiedades correspondientes del objeto del elemento. Algunas técnicas comunes incluyen:

Acceder a un atributo específico: Utilizamos la propiedad getAttribute para obtener el valor de un atributo específico.
*/
var elemento = document.getElementById("miElemento");

// Obtener el valor de un atributo específico
var valor = elemento.getAttribute("src");
/*
Establecer o modificar un atributo: Utilizamos la propiedad setAttribute para establecer o modificar el valor de un atributo específico.
*/
var elemento = document.getElementById("miElemento");

// Establecer el valor de un atributo específico
elemento.setAttribute("src", "imagen.png");
/*
Eliminar un atributo: Utilizamos la propiedad removeAttribute para eliminar un atributo de un elemento.
*/
var elemento = document.getElementById("miElemento");

// Eliminar un atributo específico
elemento.removeAttribute("src");

