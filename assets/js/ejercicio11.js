/**
 * Obtén una serie de número y devuelve la suma de todos los números positivos, si no
tenemos números positivos la sume debe devolver 0.
 */
function suma (n){
    let suma = 0;
    for (let i = 0; i < n; i++) {
        let numero = parseInt(prompt("Ingrese el numero a sumar"));
        if (numero > 0) {
            suma += numero;
        }
        else if (numero < 0) {
            suma += 0;
        }
    }
    return suma;
}
let cantidad = parseInt(prompt("Ingrese la cantidad de numeros a sumar"));
alert(`La suma de los numeros es: ${suma(cantidad)}`)