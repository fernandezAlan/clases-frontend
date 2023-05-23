//objetos
var obj = {
    edad:28,
    nombre:"alan",
    saludar:function(){
        return "hola, yo soy "+this.nombre
    }
}

//dot notation
obj.edad // 28
obj.nombre //"alan"
obj.saludar //function
obj.saludar()//"hola yo soy alan"

//bracket notation 
obj["edad"] //28
obj["nombre"]//"alan"

var prop = "saludar"

obj[prop]() //"hola yo soy alan"

var obj2 ={
    paises:["Argentina","paraguay","Chile"]
}

obj2.paises[1] //Paraguay

var obj3 ={
    continentes:{
        europa:[""],
        africa:[""]
    },

}
//no se puede hacer con objetos
for(var i=0;i<obj.length;i++){
    arr[i]
}

//for in

for(prop in obj){
    console.log(prop)
}


for(prop in obj){
    console.log(obj[prop])
}

Object.values(obj)

Object.keys(obj)