console.log(document.getElementById('parrafo1'));

const parrafo1 = document.getElementById('parrafo1');

/* console.log(document.getElementById('hola').textContent); */
console.log(parrafo1.textContent)

//parrafo1.textContent = "";

console.log(parrafo1.textContent)

parrafo1.style.color = 'red'

const parrafo2 = document.querySelector('.parrafo');
console.log(parrafo2.textContent)

parrafo2.textContent += "\n Modificando el contenido desde JavaScript"

const parrafos = document.querySelectorAll('p')
console.log(parrafos[2])

parrafos[2].style.fontSize= "2rem"

// modificar atributos en html

const enlace = document.getElementById('enlace');
console.log(enlace);

enlace.href = 'https://www.google.com'
enlace.target = "_blank"
enlace.textContent = 'enlace yt'



const p2 = document.getElementById("p2")
p2.style.backgroundColor = 'green'

const p3 = document.getElementById("p3")
p3.style.backgroundColor = 'brown'

// Reemplazar contenido

const parrafo4 = document.getElementById('parrafo4')
//(x.nodeName) Tipo de etiqueta
//(x.textContent) Texto
//(x.innerHTML) Parte interna
//(x.outerHTML) Parte externa (etiqueta completa)

console.log(parrafo4.outerHTML)
parrafo4.innerHTML = '<a href = "https://www.google.com">Enlace</a>'


console.log(parrafo4.classList.contains("elemento")) //busca clase

const cambiarcolor = () => {
    parrafo4.classList.toggle('elemento') // alterna el estado actual de la clase entre activo y descctivado
}

cambiarcolor()
cambiarcolor()