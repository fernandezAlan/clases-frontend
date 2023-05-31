//GET
//POST
//DELETE
//PUT
fetch("https://rickandmortyapi.com/api/character")
.then(function(data){
    data.json().then(function(json){
        console.log(json.results[0].name)
    })
}).catch(function(error){
    console.log("error:",error)
})

fetch("htpp://mi-server.com",{
    method:"POST",
    body:{
        email:"test@test.com",
        password:"12345"
    }
})

//async await

async function obtenerDatos(){
    try{
        var data = await fetch("https://rickandmortyapi.com/api/character")
        var json = await data.json()
        console.log(json)
    }
    catch(error){
        console.log("error")
    }

}