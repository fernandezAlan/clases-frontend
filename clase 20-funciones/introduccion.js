/*
 Las funciones son bloques de código que se pueden definir una vez y luego llamar varias veces en diferentes partes de nuestro programa. Las funciones permiten que nuestro código sea más modular, reutilizable y fácil de mantener.
 Para definir una función en JavaScript, utilizamos la siguiente sintaxis básica:
*/

function nombreDeLaFuncion(){
    // Código que se ejecuta cuando llamamos a la función
  }

  function saludar(){
   // console.log("hola como estas")
    alert("hola como estas?")
  }

  function saludarConNombre(nombre){
    console.log("hola "+nombre)
  }

  /*
  Los parámetros son valores que se pasan a una función al momento de definirla. Estos valores se utilizan dentro de la función como argumentos para realizar alguna tarea específica. Los parámetros son opcionales y pueden ser de cualquier tipo de datos, como números, cadenas de texto, objetos, arreglos, etc.
  */

  function sumar(num1,num2){
    var resultado = num1 +num2
    console.log("el resultado de la suma es: ",resultado)
  }

  function saludar(nombre){
    console.log("hola "+nombre+", bienvenido")
  }
  var nombre = 23

  /*
   La palabra clave return se utiliza en una función de JavaScript para especificar el valor que la función debe devolver cuando se llama.

    Cuando una función llega a la palabra clave return, la ejecución de la función se detiene y se devuelve el valor especificado. Esto significa que cualquier código que se encuentre después de la palabra clave return no se ejecutará
  */
    function sumar(num1,num2){
        var resultado = num1 +num2
        return resultado
      }

      function multiplicar(num1,num2){
        return  num1 * num2
      }
      /*
      Una función anónima en JavaScript es una función que no tiene un nombre explícito y se define directamente en el código sin ser asignada a una variable o constante.

        A diferencia de las funciones nombradas, que se definen con un identificador y se pueden llamar en cualquier momento de nuestro código, las funciones anónimas no tienen un nombre al que se puedan referir, por lo que solo se pueden utilizar en el contexto donde se han definido.

        Las funciones anónimas se utilizan comúnmente como argumentos de otras funciones
      */

        function operacionMatematica(num1, num2, operacion) {
            return operacion(num1, num2);
          }
          
          var resultado = operacionMatematica(5, 10, function(num1, num2) {
            return num1 * num2;
          });

          /*
           Las funciones recursivas son una técnica poderosa que se utilizan en programación para resolver problemas que se pueden descomponer en subproblemas más pequeños e idénticos al problema original. En una función recursiva, la función se llama a sí misma con un caso base que establece la condición para detener la recursión.

            La idea es que una función se divide en una serie de subproblemas más pequeños que son idénticos en naturaleza al problema original, pero que tienen una entrada más pequeña. La función resuelve cada subproblema invocándose a sí misma recursivamente hasta que se alcanza el caso base. En este punto, la función deja de llamarse a sí misma y comienza a devolver valores a las funciones que la invocaron en su camino de regreso.
          */

            function contar(num){
                if(num===0){
                    console.log("final de la recursion")
                    return 0
                }else{
                    console.log("el valor actual es:"+num)
                    contar(num - 1)
                }
            }

            /*
            otro ejemplo podria ser
            */
            function sum(n) {
                if (n <= 1) {
                  return 1;
                }
                return n + sum(n - 1);
              }

           
