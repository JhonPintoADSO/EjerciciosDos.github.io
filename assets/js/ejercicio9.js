/**
 * Crea una función para validar un pin que acepte 4 o 6 caracteres de longitud, solo se
aceptan números, la función debe devolver true si el pin es valido y false si no es válido.
 */
function verificar(p){
    let exp = /^[0-9]{4,6}$/;
    return exp.test(p);
}

let pin = parseInt(prompt("Ingrese el pin"));
alert(verificar(pin));