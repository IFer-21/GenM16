/* Una juguetería tiene mucho éxito en dos productos: payasos y muñecas. Suele hacer venta por  correo y la empresa de logística les cobra por paquete, así que deben calcular el peso de los paquetes que se enviaran. Cada payaso pesa 112 gramos y cada muñeca 75 gramos.

Escribe un programa que lea el número de payasos y muñecas vendidos y calcula el peso total del pedido que será enviado, considerando que el peso máximo del paquete es de 1kg.

Muestra en alertas el peso total por cada artículo
Muestra en alertas cuántos paquetes se enviaran 
 */

let payaso = 112;
let muneca = 75;
let paquete = 1000;

let nPayaso = 7;
let nMuneca = 5;


function peso(nPayaso,nMuneca,payaso,muneca){
   /*  let pesoP = (nPayaso*payaso)
    let pesoM = (nMuneca*muneca) */
    let pesoTotal = ((nPayaso*payaso)+(nMuneca*muneca));
    alert(pesoTotal);
    let paquete = (pesoTotal/1000);
    
    let paquetes = Math.ceil(paquete)
    alert(paquetes);
}

peso(nPayaso,nMuneca,payaso,muneca)