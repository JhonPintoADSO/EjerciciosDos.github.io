/**
 *  Crea una función que reciba dos números como parámetros y devuelva el mayor de
ellos
 */
function mayor(nUno, nDos){
    if (nUno > nDos) {
        return `El mayor es el numero ${nUno}`;
    }
    else{
        return `El mayor es el numero ${nDos}`;
    }
}

let numeroUno = parseFloat(prompt("Ingrese el numero uno"));
let numeroDos = parseFloat(prompt("Ingrese el numero dos"));
console.log(mayor(numeroUno, numeroDos));