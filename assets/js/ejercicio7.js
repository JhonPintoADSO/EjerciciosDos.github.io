/**
 * Crea una función de nos devuelva el elemento mayor de un arreglo de números
 */
function determinar(...a){
    let mayor = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > mayor) {
            mayor = a[i];
        }
    }
    return mayor
}

let a = parseInt(prompt("Ingrese la cantidad de elementos que tendra la array"))
let arreglo = [];
for (let j = 0; j < a; j++) {
    let x = parseInt(prompt(`Ingrese el numero en la posicicion ${j} del arreglo`));
    arreglo.push(x);
}
console.log(determinar(...arreglo));