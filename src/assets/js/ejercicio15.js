/**
 * Escribe una función que genere de forma aleatoria un numero entre 1 y 10, y verifica si
este numero es par o impar.
 */
function r(n){
    let pares = [], impares = [];
    let maximo = parseInt(prompt("Ingrese hasta que rango quiere que se genere el numero aleatorio"))
    for (let i = 0; i < n; i++) {
        let numero = Math.floor(Math.random() * maximo + 1);
        console.log(numero);
        if (numero % 2 === 0) {
            console.log(`El numero ${numero} es par`);
            pares.push(numero);
        }
        else{
            console.log(`El numero ${numero} es impar`);
            impares.push(numero);
        }
    }
    console.log(`Los numeros pares son ${pares.length} \n [${pares}]`);
    console.log(`Los numero impares son ${impares.length} \n [${impares}]`);
}

let cantidad = parseInt(prompt("Ingrese la cantidad de numeros a determinar cuales son pares o impares"));
r(cantidad);
