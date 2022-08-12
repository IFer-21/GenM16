let cadena = "Esto es una cadena"
let cadena_Obj = new String ("Esto es una cadena obj")
console.log(cadena);
console.log(cadena_Obj);

//* tipo numerico

let numero = 13
let numero_Obj = new Number(13.13)
console.log(numero);
console.log(numero_Obj);


//* Tipo compuesto o unico

let lista = ['2','3','5','7'];
let lista_Obj = new Array('1','4','6','8','9');

console.log(lista);
console.log(lista_Obj);

//* predefinido

let tiempo = new Date();
console.log(tiempo);
console.log(Math);

let obj_literal = {
    nombre: "Iker",
    edad: 35,
}

let obj_constructor =  new Object();

console.log(obj_literal);
console.log(obj_constructor);

obj_constructor.nombre = "Fernando"
obj_constructor.edad = 21



console.log(obj_constructor);