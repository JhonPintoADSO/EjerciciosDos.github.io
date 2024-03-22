/**
 * Escribir una función llamada fizzBuzz que reciba un número y retorne un string de acuerdo a lo siguiente:

"fizz" si el número es múltiplo de 3.
"buzz" si el número es múltiplo de 5.
"fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
Si no cumple ninguna de las condiciones anteriores debe retornar el mismo número.
 */


// let fizzBuzz = function(num){
//     if (num % 3 === 0 && num % 5 === 0) {
//         console.log("FizzBuzz");
//     }
//     else if (num % 3 === 0) {
//         console.log("Fizz");
//     }
//     else if (num % 5 === 0) {
//         console.log("Buzz");
//     }
//     else{
//         console.error("No se determina dentro de la funcion")
//     }
// }

// let numero = parseInt(prompt("Ingrese el numero"));
// fizzBuzz(numero);

/**
 * Escribir una función llamada removerCeros que reciba un arreglo de números y retorne un nuevo arreglo excluyendo los ceros (0).
 */


// function removerCeros(...arreglo){
//     return arreglo.filter(arreglo => arreglo !== 0);
//     // El .filter me ayuda para poder iterar sobre ese mismo arreglos y filtra solamente los numeros que son diferentes a 0
// }

// let x = [0,2,4,5,69,0,4,2,0,4,0,0,5];
// console.log(`Array antes de quitarle los ceros \n ${x}`);
// console.log(removerCeros(...x));

/**
 * Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra de cada palabra:
 */

function capitalizar(pal) {
    let x = pal.split(" ");
    return x.map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(" ");
}

let palabra = prompt("Ingrese la palabra");
console.log(capitalizar(palabra));