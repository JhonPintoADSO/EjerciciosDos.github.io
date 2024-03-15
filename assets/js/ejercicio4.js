/**
 * Crea una función que calcule la longitud de una palabra si es corta o si es larga. (palabras
cortas menores de 5 caracteres
 */
function longitud(p) {
    if (p.length <= 5) {
        alert("La palabra es corta");
    }
    else{
        alert("La palabra es larga");
    }
}

let palabra = prompt("Ingrese la palabra");
longitud(palabra);