const urlGato = "https://api.thecatapi.com/v1/images/search"





const boton = document.getElementById("botonGato")
//console.log(botonGato);

boton.addEventListener("click", () => {
    
    obtenerGatoRandom(urlGato)
})


async function obtenerGatoRandom(url){
    
    const respuesta = await fetch(url)
    const datos = await respuesta.json()
    
   // console.log(datos)
    //console.log(datos[0].url)
 
    
    imgGato.src = datos[0].url
}

obtenerGatoRandom(urlGato)


