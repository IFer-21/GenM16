const urlRamdom = "https://dog.ceo/api/breeds/image/random"


// elemento del dom
const imagenPerrito = document.getElementById("img-perrito")
console.log(imagenPerrito)

const boton = document.getElementById("botonP")
console.log(botonP);

boton.addEventListener("click", () => {
    console.log("Presioando")
    obtenerPerritoRandom()
})


async function obtenerPerritoRandom(url){
    
    const respuesta = await fetch(url)
    const datos = await respuesta.json()

    console.log(datos)
    console.log(datos.message)
    console.log(datos.status)

    imagenPerrito.src = datos.message
}





