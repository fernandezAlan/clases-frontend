/*
Sincronía vs. Asincronía:
En programación, la sincronía se refiere a la ejecución secuencial de instrucciones, donde cada tarea debe completarse antes de pasar a la siguiente. La asincronía, por otro lado, permite que múltiples tareas se ejecuten en paralelo sin bloquear la ejecución secuencial.

Ejemplo:
Supongamos que tienes dos tareas: leer un archivo y enviar un correo electrónico. En un enfoque sincrónico, se leería todo el archivo antes de poder enviar el correo electrónico. En un enfoque asincrónico, podrías iniciar la lectura del archivo y mientras tanto, enviar el correo electrónico sin esperar a que la lectura se complete.

Callbacks:
Un callback es una función que se pasa como argumento a otra función y se invoca una vez que se completa una operación asincrónica. Es una forma común de manejar la asincronía en JavaScript.

Ejemplo:
*/
var hola = "hola"
var chau = "chau"

function leerArchivo(nombreArchivo, callback) {
    // Simulación de lectura de archivo asincrónica
    setTimeout(function () {
      console.log('Lectura del archivo completa.');
      callback(null, 'Contenido del archivo');
    }, 2000);
  }
  
  function manejarLecturaArchivo(error, contenido) {
    if (error) {
      console.error('Error al leer el archivo:', error);
    } else {
      console.log('Contenido del archivo:', contenido);
    }
  }
  
  leerArchivo('ejemplo.txt', manejarLecturaArchivo);

  /*
  Promesas:
Una promesa es un objeto que representa la eventual finalización (o falla) de una operación asincrónica y devuelve un valor en el futuro. Permite un manejo más estructurado y legible de las operaciones asincrónicas, evitando el anidamiento excesivo de callbacks.

Ejemplo:
  
  */

function leerArchivo(nombreArchivo) {
    return new Promise(function (resolve, reject) {
      // Simulación de lectura de archivo asincrónica
      setTimeout(function () {
        console.log('Lectura del archivo completa.');
        resolve('alan');
      }, 2000);
    });
  }
  
  leerArchivo('ejemplo.txt')
    .then(function (contenido) {
      console.log('Contenido del archivo:', contenido);
    })
    .catch(function (error) {
      console.error('Error al leer el archivo:', error);
    });

    /*
    Async/Await:
async/await es una forma de escribir código asincrónico de manera más similar a la programación sincrónica. async se utiliza para declarar una función asincrónica, y await se utiliza dentro de una función asincrónica para esperar a que una promesa se resuelva antes de continuar la ejecución.

Ejemplo:
    */

function leerArchivo(nombreArchivo) {
    return new Promise(function (resolve, reject) {
      // Simulación de lectura de archivo asincrónica
      setTimeout(function () {
        console.log('Lectura del archivo completa.');
        resolve('Contenido del archivo');
      }, 2000);
    });
  }
  
  async function proceso() {
    try {
      const contenido = await leerArchivo('ejemplo.txt');
      console.log('Contenido del archivo:', contenido);
    } catch (error) {
      console.error('Error al leer el archivo:', error);
    }
  }
  
  proceso();


/*
Fetch API: una interfaz moderna para realizar peticiones HTTP. Es más simple y fácil de usar que XMLHttpRequest, y admite promesas, lo que facilita el manejo asíncrono.
Ejemplo con Fetch API:
*/

fetch('https://api.example.com/data')
  .then(function (response) {
    if (response.ok) {
      return response.text();
    }
    throw new Error('Error en la respuesta de la petición.');
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.error(error);
  });

/*
¿Qué es JSON?
JSON es un formato de intercambio de datos ligero y legible por humanos. Se utiliza ampliamente para enviar y recibir datos entre un cliente y un servidor en aplicaciones web. JSON se basa en una estructura de pares clave-valor y es independiente del lenguaje, lo que significa que puede ser utilizado con cualquier lenguaje de programación.

Sintaxis de JSON:
JSON utiliza una sintaxis sencilla y fácil de entender. Aquí tienes algunos aspectos clave de la sintaxis:

Objetos JSON: Se definen utilizando llaves {} y consisten en pares clave-valor separados por comas. La clave debe estar entre comillas dobles y seguida de dos puntos :, seguida del valor.

Ejemplo de un objeto JSON:
{
    "nombre": "Juan",
    "edad": 25,
    "ciudad": "Madrid"
  }


  Uso de JSON en JavaScript:
En JavaScript, puedes trabajar con JSON utilizando los métodos JSON.parse() y JSON.stringify().

JSON.parse(): Convierte una cadena JSON en un objeto JavaScript.
*/
const jsonStrings = '{"nombre": "Juan", "edad": 25}';
const objetoJson = JSON.parse(jsonString);
console.log(objetoJson.nombre); // Resultado: "Juan"

/*
JSON.stringify(): Convierte un objeto JavaScript en una cadena JSON.

Ejemplo:
*/
const objeto = { nombre: "Juan", edad: 25 };
const jsonString = JSON.stringify(objeto);
console.log(jsonString); // Resultado: '{"nombre":"Juan","edad":25}'
  /*
  Estos ejemplos ilustran cómo realizar peticiones GET a una API utilizando tanto XMLHttpRequest como Fetch API en JavaScript.

  Aplicaciones de JSON:
JSON se utiliza ampliamente en el intercambio de datos en aplicaciones web y servicios API. Se puede utilizar para enviar y recibir datos estructurados, como configuraciones, registros, información de usuario, contenido dinámico, entre otros.

Recuerda que JSON es solo una representación de datos y no ejecuta ninguna lógica o funcionalidad
  */

  /*
  Respuestas asincrónicas:
Al realizar peticiones asincrónicas, es común trabajar con respuestas que llegan en un momento posterior a la realización de la petición. Es importante comprender cómo manejar y procesar estas respuestas de manera adecuada.

Parseo de respuestas:
Una vez que se recibe una respuesta asincrónica, es necesario analizar o parsear la información contenida en ella para extraer los datos relevantes.

Ejemplo:
Supongamos que se realiza una solicitud a una API que devuelve datos en formato JSON:
  */

fetch('https://api.example.com/data')
  .then(function (response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Error en la respuesta de la petición.');
  })
  .then(function (data) {
    // Trabajar con los datos recibidos
    console.log(data);
  })
  .catch(function (error) {
    console.error(error);
  });

  /*
  En este ejemplo, se utiliza el método json() para analizar la respuesta y devolver los datos como un objeto JSON.
  */

  /*
  Manipulación de datos asincrónicos:
Una vez que se han analizado los datos recibidos, es posible realizar diversas operaciones de manipulación y presentación de los mismos.

Ejemplo:
Supongamos que se recibe una respuesta que contiene una lista de usuarios en formato JSON. Podemos iterar sobre los usuarios y mostrar sus nombres en una lista:
  */

fetch('https://api.example.com/users')
  .then(function (response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Error en la respuesta de la petición.');
  })
  .then(function (data) {
    // Trabajar con los datos recibidos
    const userList = document.getElementById('user-list');
    data.forEach(function (user) {
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });
  })
  .catch(function (error) {
    console.error(error);
  });

  /*
  En este ejemplo, se itera sobre la lista de usuarios recibidos y se crea un elemento de lista (<li>) para cada usuario. Luego, se agrega cada elemento a una lista en el DOM.
  */

  /*
Comunicación con el servidor:
Para realizar actualizaciones dinámicas más complejas, a menudo se necesita comunicarse con el servidor para obtener o enviar datos. Esto se puede lograr utilizando peticiones HTTP, como Fetch API o XMLHttpRequest, para enviar datos al servidor y recibir respuestas en formato JSON o HTML.

Ejemplo:
Supongamos que quieres cargar datos desde un servidor y actualizar un elemento con los datos recibidos:
  */

fetch("https://api.example.com/data")
  .then(function(response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Error en la respuesta de la petición.");
  })
  .then(function(data) {
    const elemento = document.getElementById("myElement");
    elemento.textContent = data.nombre;
  })
  .catch(function(error) {
    console.error(error);
  });

  /*
  En este ejemplo, se realiza una petición HTTP utilizando Fetch API para obtener datos desde el servidor en formato JSON. Luego, se actualiza el contenido del elemento con los datos recibidos.
  */