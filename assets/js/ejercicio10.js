/**
 * Genera un patrón de asteriscos en forma de pirámide.
 */
function aster(a){
    let piramide = [];
    for (let i = 0; i < a; i++) {
        piramide.push("*");
        console.log(piramide);
    }
}
let altura = parseInt(prompt("Ingrese la altura de la piramide"));
aster(altura);