/* Crea un programa llamado Número mágico, donde generas un número aleatorio y el usuario tendrá que adivinarlo.

Considera lo siguiente:

Si el numero ingresado es mayor, mostrar “El número que ingresaste es mayor al número mágico”
Si el numero ingresado es menor, mostrar “El número que ingresaste es menor al número mágico”
Si el número ingresado es igual al número mágico, mostrar “Felicidades, adivinaste el número mágico”
Agregar una opción para finalizar el programa
 */

/* Scorpio  */

function aleatorio(max) {
    return Math.floor(Math.random() * max);
  }

let numeroAdivinar = aleatorio(20);

let nIngresado =parseInt(prompt("Adivina el numero magico"))


while (nIngresado != numeroAdivinar) {
   
   if (nIngresado > numeroAdivinar) {
            alert("El número que ingresaste es mayor al número mágico");
            nIngresado =parseInt(prompt("Adivina el numero"))
        }
        else if (nIngresado < numeroAdivinar){
            alert("El número que ingresaste es menor al número mágico");
            nIngresado =parseInt(prompt("Adivina el numero"))
        }
        
    
        
}

alert("Felicidades, adivinaste el número mágico") 