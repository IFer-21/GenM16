// crear un elemento
const imagen = document.createElement("img");
document.body.appendChild(imagen)

imagen.src = "https://placeimg.com/200/200/nature"
imagen.alt = "Imagenes Aleatorias"


//lo insertamos en un elemento padre

document.body.appendChild(imagen)
//document.body.insertAdjacentElement("afterbegin",imagen)
//document.body.insertAdjacentElement("afterend",imagen)
//document.body.insertAdjacentElement("beforebegin")
//document.body.insertAdjacentElement("beforeend")

/* Forma correcta de insertar elemento
    1 se crea el elemento que contenera la imagen
    2 seleccionar elemento padre
*/
    const padreImg = document.getElementById('padreImg')

//  3 crear elemento
    const imagen2 = document.createElement('img');

    // 4 
    imagen2.src = "https://placeimg.com/200/200/tech"
    imagen2.alt = "imagenes Naturaleza"


    padreImg.appendChild(imagen2)
    const frutas = ["Toranja", "Manzana", "Mandarina", "Limon", "Granada", "Melon", "Platano" , "Guayaba"]
    const listaFrutas = document.getElementById("frutas")

    /* Forma 1 
    frutas.forEach((element) => {
        const li = document.createElement("li");
        li.textContent = element
        listaFrutas.appendChild(li)
    })
 */
    frutas.forEach((el) =>{
        console.log(el)
        listaFrutas.innerHTML += `<li>${el}</li>` //Signo de pesos porque es para interpolar la respuesta 

    })