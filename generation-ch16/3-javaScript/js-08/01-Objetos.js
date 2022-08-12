

let persona = {
    nombre: "Iker",
    apellido: "Martinez",
    email:"im6527@gmail.com",
    edad:20,

    idioma: "es",
    get idioma1(){
        return this.idioma.toUpperCase()
        },
    set idioma1(lang){
        this.idioma = lang.toLowerCase()
        
    }

    
    /* nombreCompleto: function(){
        return this.nombre + " " + this.apellido
    } */
}

console.log(persona.idioma);
persona.idioma = "en"
console.log(persona.idioma);

console.log(persona.idioma1)

console.log(persona);

let persona2 = new Object();

persona2.nombre = "Fernando"
persona2.apellido = "Negrete"
persona2.email = "mcgfeer@gmail.com"
persona2.edad = 20
persona2.tel = 5625104882

console.log(persona2);


 
//console.log(persona.nombreCompleto());

/* for (varPropiedad in persona2){
    console.log(persona2{varPropiedad});

} */


let personaString = JSON.stringify(persona2);
console.log(personaString)

