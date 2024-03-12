/**
 * Crea una función para calcular cuantas silabas tiene cada palabra, imprime el resultado
en la consola.
 */
// function silabas(palabra) {
    
// }
// let palabra = prompt("Ingrese la palabra para deerminar las silabas que tiene");

function ContadorSilabas(p) {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    let silabas = 0;
    let anterior = false;
  
    for (let i = 0; i < p.length; i++) {
      const letra = p[i].toLowerCase();
      if (vocales.includes(letra)) {
        if (!anterior) {
          silabas++;
        }
        anterior = true;
      } else {
        anterior = false;
      }
    }
    // check for final 'e' syllable exception
    if (p.endsWith('e') && silabas > 1) {
      silabas--;
    }
    return silabas;
  }
  // Example usage:
  let palabra = prompt("Ingrese la palabra");
  console.log(countSyllables(palabra));