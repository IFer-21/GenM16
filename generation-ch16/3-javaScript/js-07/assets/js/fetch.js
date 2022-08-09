const url = "https://dog.ceo/api/breeds/image/random"

fetch(url).then((respuesta) => {
    //console.log(respuesta)

})
//! Forma 1
fetch(url)
.then((respuesta) => respuesta.json())
.then((datos) => {
    console.log(datos)
}).catch((error) => {
    console.log(error)
})

//! Forma 2

async function perritoRandom() {
    try {
        const respuesta = await fetch(url)
        const datos = await respuesta.json()
        
        console.log(datos)
        
    } catch (error) {
        console.log(error)
    }
    
}

perritoRandom()