function buscarRegaloRecursivo(lista, regalo, index = 0) {
    if (index === lista.length) {
      return `❌ El regalo  \"${regalo}\" no está en la lista.`;
    }
  
    if (lista[index].toLowerCase() === regalo.toLowerCase()) {
      return `¡El regalo \"${regalo}\" fue encontrado en la posición ${index + 1}! :)`;
    }
  
    return buscarRegaloRecursivo(lista, regalo, index + 1);
  }
  
  // 🧪 Ejemplo de uso
  const regalos = ["amor","paz mundial","bicicleta", "carrito", "lego", "rompecabezas"];
  const regaloBuscado = "rompecabezas";
  
  console.log(buscarRegaloRecursivo(regalos, regaloBuscado));  