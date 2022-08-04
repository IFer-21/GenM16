/* Crea un programa que emule las funciones de un cajero automático.

Considera lo siguiente:

El cajero solo cuenta con $10,000 de saldo.
Cada transacción se descontará del saldo del cajero.
Se debe tener una función para consultar el saldo del cajero
 */

let iSaldo = 10000;
let retirar = 0;
let parar= false;



function consSaldo() {
    alert("El saldo del cajero es: " + iSaldo)
    console.log(iSaldo);
}

function retiro() {
    let quita=parseInt(prompt("Cuanto dinero deseas retirar (Cantidad Maxima: " + iSaldo + " )"));
    iSaldo =  iSaldo - quita;
    console.log(quita);
    console.log(iSaldo);
}

function menu() {
    let nMenu= prompt("(1) Consultar saldo   - - - - -   (2) Retirar ")

    
    switch (nMenu) {
        case "1": consSaldo()
        console.log(parar)
        break;
        
        case "2":
            alert("s")
            console.log(parar)
            break;
            
        case "3":
                parar = true
                console.log(parar)
            break;
                
               
         default: alert("Ingresa opcion valida")
         console.log(parar)
                break; 
            }
            
}

/* while (iSaldo != 0 || parar != true ){
    menu()
    console.log(parar)
}
 */



while (iSaldo != 0 || parar != true ){
    menu()
}