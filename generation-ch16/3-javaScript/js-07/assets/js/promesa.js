//Variable que simula los pedidos
const saludo = "Hola mundo";
const datos = [
    {
    nombre: "Jonathan",
    apellido : "Vazquez"
    },
    {
    nombre: "Jonathan",
    apellido : "Vazquez"
    },
    {
    nombre: "Jonathan",
    apellido : "Vazquez"    
    }
]

console.log(saludo);

//Funcion para simular una petición

function obtenerDatos(){
    
    return new Promise( (resolve, reject) => {
        
        setTimeout( () => {
            
            if(false){
                resolve(datos)
                
            } else{

                reject("Nunca Te quiso");
            }
            
        }, 5000)
    })

}

console.log(obtenerDatos())

obtenerDatos().then((datos) => {
    
    console.log(datos)

}).catch((error) => {
    console.log("existe un error")
    console.log(error)
})


//! segunda forma

async function funcionAsincrona() {

    try {
        
        const datos = await obtenerDatos()
        console.log(datos)
        
    } catch (error) {
        
        console.log(error)
        
    }




}

funcionAsincrona()