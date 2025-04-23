// Generamos la función para el proyecto de divide y vencerás
function encontrarMaximo(arr) {
    // Caso base: si solo queda un número, es el máximo
    if (arr.length === 1) {
      return arr[0];
    }
  
    // Dividir el arreglo a la mitad
    const medio = Math.floor(arr.length / 2);
    const izquierda = arr.slice(0, medio);
    const derecha = arr.slice(medio);
  
    // Conquistar: obtener el máximo de cada mitad
    const maxIzquierda = encontrarMaximo(izquierda);
    const maxDerecha = encontrarMaximo(derecha);
  
    // Combinar: devolver el máximo entre ambos
    return Math.max(maxIzquierda, maxDerecha);
  }
  
// Probamos la función:
const numeros = [0.25];
const maximo = encontrarMaximo(numeros);
console.log("El máximo de los números del arreglo es:", maximo);
