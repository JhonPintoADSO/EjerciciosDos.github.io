/**
 * Implemente una función que sume dos números y devuelva su suma en binario, el
número binario devuelto debe ser una cadena.
 */
function convertir(a,b) {
    let suma = a+b;
    let binary = (suma % 2).toString();
    for (; suma > 1;) {
      suma = parseInt(suma / 2);
      binary = (suma % 2) + (binary);
    }
    console.log(binary);
}
let numero1 = parseInt(prompt("Ingrese el numero uno"));
let numero2 = parseInt(prompt("Ingrese el numero dos"));
convertir(numero1, numero2);