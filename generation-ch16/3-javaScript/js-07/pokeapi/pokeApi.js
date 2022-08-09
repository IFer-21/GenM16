
const urlPoke = "https://pokeapi.co/api/v2/pokemon/25"

const imgPokemon = document.getElementById("imgPokemon")
console.log(imgPokemon)
const idPokemon = document.getElementById("idPokemon")

const nombrePokemon = document.getElementById("nombrePokemon")
console.log(nombrePokemon)

const descPokemon = document.getElementById("descPokemon")
console.log(descPokemon)


async function obtenerPokemon(url){

    const respuesta = await fetch(url)
    const datos = await respuesta.json()
    /* 
    console.log(datos)
    console.log(datos.id)
    console.log(datos.forms[0].name)
    console.log(datos.abilities)
    console.log(datos.types)
    console.log(datos.sprites.other["official-artwork"].front_default) */
    
    const pokemon = {
        nombre: datos.forms[0].name,
        habilidades: datos.abilities,
        id: datos.id,
        tipos: datos.types,
        imagen: datos.sprites.other["official-artwork"].front_default,
        

    }
    imgPokemon.src = pokemon.imagen
    //console(pokemon.imagen)
    nombrePokemon.textContent = pokemon.nombre
    idPokemon.textContent = pokemon.id
    //descPokemon.textContent = 

    
}

obtenerPokemon(urlPoke)