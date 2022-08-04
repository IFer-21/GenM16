/* Declara un array llamado carreritas con los siguiente valores: 1Lucia, 2Roberto, 3Maria, 4Jesus, 5Andrea y 6Jose (este será el orden de sus posiciones dentro de una carrera).
Deberás imprimir en consola la clasificación actual.

La carrera continua y se van modificando esas posiciones:
Andrea adelanta a Maria
Jose es descalificado de la carrera
Detrás de Lucia y antes de Roberto se clasifican tres nuevo corredores: Cristobal, Fernanda y Armando
Hay un nuevo concursante que toma el primer puesto: Federico.

Imprime en consola la clasificación final con las posiciones que se han modificado.
 */

/* 1 Tauro */
 
let carreritas = ["Lucia", "Roberto", "Maria", "Jesus", "Andrea","Jose"];
console.log(carreritas);

carreritas.splice(4,1);
carreritas.splice(2,0,"Andrea");
console.log(carreritas);

/* jose descalificado */
carreritas.pop();
console.log(carreritas);

/* Detrás de Lucia y antes de Roberto se clasifican tres nuevo corredores: Cristobal, Fernanda y Armando
 */

carreritas.splice(1,0,"Cristobal","Fernanda","Armando");
console.log(carreritas);

/* Nuevo concursante */

carreritas.unshift("Federico");
console.log(carreritas);
