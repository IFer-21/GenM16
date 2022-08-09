function saluda(){
    alert("hola")
}

//addEventListener

const boton = document.getElementById("boton")
console.log(boton)

boton.addEventListener("click",() => alert("hola"))

const formulario = document.getElementById("formulario")

formulario.addEventListener("submit",(e) =>{
    e.preventDefault()
    alert(formulario[0].value)
})