/**
 * Crea una función que tome una cadena como parámetro y devuelva la cadena en orden
inverso, por ejemplo, si la cadena de entrada es ‘Hola’, la función debería retornar ‘aloH’.
 */

function invertir(p){
    let cadena = "";
    for (let i = p.length-1; i >= 0; i--) {
        cadena += p[i];
    }
    return cadena;
}

let palabra = prompt("Ingresela cadne que desa invertir");
alert(`La palabra ${palabra} invertida es: ${invertir(palabra)}`);