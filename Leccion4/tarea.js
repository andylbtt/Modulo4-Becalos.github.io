// Lista de invitados (debe estar ordenada alfabéticamente acorde al criterio de la tarea)
const invitados = [
    "Andrea", "Cristina","Elena", "Lisseth", "Santiago", "Roman", "Ricardo"
  ];
  
  // Creamos una función que encuentra el primer par de invitados con la misma inicial
  function encontrarPareja(invitados) {
    for (let i = 0; i < invitados.length - 1; i++) {
      const actual = invitados[i];
      const siguiente = invitados[i + 1];
  
      if (actual[0].toUpperCase() === siguiente[0].toUpperCase()) {
        return `El primer par de invitados consecutivos que puedan sentarse juntos son: ${actual} y ${siguiente}`;
      }
    }
  
    return "❌ No se encontró ningún par de invitados con la misma inicial.";
  }
  
  // Ejecutamos la función para mostrar los resultados en la consola
  console.log(encontrarPareja(invitados));  