
const urlPoke = "https://pokeapi.co/api/v2/pokemon/" 


const inputPoket = document.getElementById("inputPoke")
//console.log(inputPoket);

const busquedaPoke = document.getElementById("busquedaPoke")
//console.log(imgPokemon)
const imgPokemon = document.getElementById("imgPokemon")
//console.log(imgPokemon)
const idPokemon = document.getElementById("idPokemon")

const nombrePokemon = document.getElementById("nombrePokemon")
console.log(nombrePokemon)

const descPokemon = document.getElementById("descPokemon")
//console.log(descPokemon)

const listaHabilidades = document.getElementById("listaHabi")
//console.log(listaHabilidades);
const listaTipo = document.getElementById("listaTipo")
//console.log(listaTipo);

//! Eventos
inputPoket.addEventListener("submit", (e) => {
    e.preventDefault()
   // console.log("Boton");
    const busquedaPoke = document.getElementById("busquedaPoke")
    let nombreIngresado = busquedaPoke.value
    //console.log(busquedaPoke.value);
    //let urlPokemon = urlPoke
    const urlPokemon = urlPoke + nombreIngresado
    //console.log(urlPokemon);
    obtenerPokemon(urlPokemon)
})


async function obtenerPokemon(url){

    try {
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

    //? Lista de habilidades

    
    let templeate = ''
    for (let i = 0; i < pokemon.habilidades.length; i++) {
        const nombreAbility = pokemon.habilidades[i].ability.name;
        //console.log(nombreAbility);
        templeate += `<li class="list-group-item">${nombreAbility}</li>`
    }
    
    listaHabilidades.innerHTML = templeate

    //? lista tipo
    //!Con forLoop
    /*  let templeateT = ''
    for (let i = 0; i < pokemon.tipos.length; i++) {
        const nombreTipo = pokemon.tipos[i].type.name;
        console.log(nombreTipo);
        templeateT += `<li class="list-group-item">${nombreTipo}</li>`
    }    
    listaTipo.innerHTML += templeateT */
    //! con forEach
    let templeateTipos = ''
    pokemon.tipos.forEach(tipo => {
        const nombreTipo = tipo.type.name
       // console.log(tipo.type.name)
        templeateTipos += `<li class="list-group-item">${nombreTipo}</li>`
        
    });
    
    listaTipo.innerHTML = templeateTipos 
    } catch (error) {
    alert("Nombre incorrecto o numero muy alto")
    }
}




