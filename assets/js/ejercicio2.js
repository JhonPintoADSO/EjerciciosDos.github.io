/**
 * Crea una función que tome un número como argumento y devuelva la cadena si el
numero es par o impar.
 */
function par(n){
    if (n % 2 === 0) {
        alert("El numero es par");
    }
    else{
        alert("El numero es impar");
    }
}

let numero = parseInt(prompt("Ingrese el numero a revisar"));
par(numero);