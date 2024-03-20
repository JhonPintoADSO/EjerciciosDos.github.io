/**
 * Crea una función que tome un conjunto de números y devuelva el inverso aditivo de cada
uno. Todo los positivos se devuelve negativo y todos los negativos se devuelve positivo.
 */
function inverso(n) {
    for (let i = 0; i < n; i++) {
        let numero = parseInt(prompt("Ingrese el numero que quiere hallarle el inverso aditivo"));
        if (numero < 0) {
            let nuevo = numero * -1;
            console.log(nuevo)
        }
        else{
            if (numero > 0) {
                let nuevo = numero * (-1);
                console.log(nuevo);
            }
        }
    }
}
let cantidad = parseInt(prompt("Ingrese la cantidad de numeros"));
inverso(cantidad);