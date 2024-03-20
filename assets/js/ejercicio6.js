/**
 * Crea una función que genere la tabla de multiplicar del número 5, no se debe mostrar 5
* 5, nos debe mostrar el resultado para las demás multiplicaciones.
 */
function tabla(n){
    for (let i = 1; i <= 10; i++) {
        if (i === n) {
            console.log("No se muestra");
        }
        else{
            console.log(`${n} X ${i} = ${n * i}`);
        }
    }
}
let numero = parseInt(prompt("Ingrese el numero"))
tabla(numero);