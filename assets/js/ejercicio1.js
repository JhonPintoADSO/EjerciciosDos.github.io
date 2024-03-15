/**
 * Crea una función que reciba dos números como parámetros y devuelva el mayor de
ellos.
 */
function mayor(n1,n2){
  if (n1 > n2) {
    return n1;
  }
  else{
    return n2;
  }
}
let numeroUno = parseInt(prompt("Ingrese el numero 1"));
let numeroDos = parseInt(prompt("Ingrese el numero 2"));
alert(`El numero mayor es ${mayor(numeroUno,numeroDos)}`);