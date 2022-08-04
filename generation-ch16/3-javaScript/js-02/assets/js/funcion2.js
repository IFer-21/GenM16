let a = 30
let b = 7


function miFuncion(a, b) {
    return (a + b);
}

let resultado=miFuncion(a, b);
console.log("El resultado es: " + resultado);

/* ---------- */
let suma = function(a, b){
     return (a + b);
}
resultado = suma(a, b)
console.log("El resultado es: " + resultado);

let resta = function(a, b){
     return (a - b);
}
resultado = resta(a, b)
console.log("El resultado es: " + resultado);

let division = function(a, b){
     return (a / b);
}
resultado = division(a, b)
console.log("El resultado es: " + resultado);

let multiplicacion = function(a, b){
     return (a * b);
}
resultado = multiplicacion(a, b)
console.log("El resultado es: " + resultado);

/* ------------------------------------- */
// Funcion de self invoking
(function (a,b){
    console.log("El resultado de SelfInvoking es: " + (a+b))}
)

(1,2)


