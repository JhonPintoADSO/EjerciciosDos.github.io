/**
 * Escribe una función que tome una cadena y devuelva una nueva cadena sin las vocales.
 */
function sinVocales(p){
    let exp = /[aeiou]/g;
    console.log(p.replaceAll(exp, ""));
}

let palabra = prompt("Ingrese la palabra que quiere quitarle las vocales");
sinVocales(palabra);