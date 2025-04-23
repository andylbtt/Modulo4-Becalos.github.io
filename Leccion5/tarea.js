// Generamos la función para encontrar la palabra más larga dado una cadena de texto
function encontrarPalabraMasLarga(texto) {
    const palabras = texto.split(' ');
    let palabraMasLarga = '';
  
    for (let i = 0; i < palabras.length; i++) {
      const palabra = palabras[i].trim();
      if (palabra.length > palabraMasLarga.length) {
        palabraMasLarga = palabra;
      }
    }
  
    return palabraMasLarga;
  }  

// Adicionalmente, generé una función para que se impriman todas las palabras que sean las más largas en caso de empate 
  function encontrarTodasLasPalabrasLargas(texto) {
    const palabras = texto.split(' ').map(p => p.trim());
    let maxLongitud = 0;
    let palabrasLargas = [];
  
    for (const palabra of palabras) {
      if (palabra.length > maxLongitud) {
        maxLongitud = palabra.length;
        palabrasLargas = [palabra];
      } else if (palabra.length === maxLongitud) {
        palabrasLargas.push(palabra); 
      }
    }
  
    return `Las palabras más largas del texto son: ${palabrasLargas}`;
  }

// Probamos las funciones para mostrar los resultados en la consola:
console.log(encontrarPalabraMasLarga("Estoy contentísima de estar aprendiendoo cada día más algo nuevo en JavaScript"));
console.log(encontrarTodasLasPalabrasLargas("Estoy contentísima de estar aprendiendoo cada día más algo nuevo en JavaScript"));