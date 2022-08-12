class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

}


let persona1 = new Persona("iker","Fernando")
console.log(persona1);

let persona2 = new Persona("Martinez","Negrete")
console.log(persona2);

