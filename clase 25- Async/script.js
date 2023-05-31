var contenedor = document.getElementById("contenedor")
fetch("https://rickandmortyapi.com/api/character")
.then(function(data){
    data.json().then(function(res){
        console.log("respuesta",res)
        var results = res.results
        for(var i=0;i<results.length;i++){
            var personaje = results[i]
            var h2= document.createElement("h2")
            h2.textContent = personaje.name
            contenedor.appendChild(h2)
        }
     //  var h2 = document.createElement("h2")
      //  var nombre = document.createElement("h2")
      //  nombre.textContent =  res.results[1].name
      //  h2.textContent = res.results[0].name
       // contenedor.appendChild(h2)
        //contenedor.appendChild(nombre)
    })
})