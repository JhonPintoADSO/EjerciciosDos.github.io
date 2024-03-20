/**
 * Crea una función que convierta números del 0 al 5 en su representación textual, por
ejemplo: “cero”, “uno”, “dos”, “tres” etc.
 */

function texto(num) {
    let numeroTexto = {
        0: "Cero",
        1: "Uno",
        2: "Dos",
        3: "Tres",
        4: "Cuatro",
        5: "Cinco"
    };  
    if (num >= 0 && num <= 5 && numeroTexto.hasOwnProperty(numero)) {
        return numeroTexto[num];
    }
    else{
        return "Ha ocurrido un error y no se a encontrado el numero en forma textual";
    }
}

let numero = parseInt(prompt("Ingrese el numero del rango 0 a 5"));
console.log(texto(numero));