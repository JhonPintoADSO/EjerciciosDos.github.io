/**
 * Crea una función de nos devuelva el elemento mayor de un arreglo de números
 */
function determinar(...a){
    let mayor = 0;
    for (let i = 0; i < x.length; i++) {
        if (i > mayor) {
            mayor = i;
        }
    }
    return mayor
}

let arreglo = [];
for (let j = 0; j < 5; j++) {
    let x = parseInt(prompt(`Ingrese el numero en la posicicion ${i} del arreglo`));
    arreglo.push(x);
}
alert(`El numero mayor de la array es ${determinar(...arreglo)}`);