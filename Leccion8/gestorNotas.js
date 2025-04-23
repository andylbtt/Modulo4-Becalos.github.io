// Generamos las funciones para la última lección del módulo 
const fs = require('fs');
const rutaArchivo = 'notas.json';

// Función para cargar las notas desde el archivo
function cargarNotas() {
  try {
    const data = fs.readFileSync(rutaArchivo, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return []; // Si no existe o está vacío, devolvemos arreglo vacío
  }
}

// Función para guardar las notas en el archivo
function guardarNotas(notas) {
  fs.writeFileSync(rutaArchivo, JSON.stringify(notas, null, 2));
}

// Función para crear una nueva nota
function crearNota(titulo, contenido) {
  const notas = cargarNotas();

  if (notas.find(nota => nota.titulo === titulo)) {
    console.log("❌ Ya existe una nota con ese título.");
    return;
  }

  notas.push({ titulo, contenido });
  guardarNotas(notas);
  console.log("✅ Nota guardada con éxito.");
}

// Función para listar todas las notas
function listarNotas() {
  const notas = cargarNotas();

  if (notas.length === 0) {
    console.log("No hay notas guardadas.");
    return;
  }

  console.log("=== Lista de notas:===");
  notas.forEach((nota, index) => {
    console.log(`\n[${index + 1}] ${nota.titulo}`);
    console.log(`     > ${nota.contenido}`);
  });
}

// Función para eliminar una nota por título
function eliminarNota(titulo) {
  let notas = cargarNotas();
  const nuevasNotas = notas.filter(nota => nota.titulo !== titulo);

  if (notas.length === nuevasNotas.length) {
    console.log("❌ No se encontró una nota con ese título.");
  } else {
    guardarNotas(nuevasNotas);
    console.log("✅ Nota eliminada con éxito.");
  }
}

// Procesamos los comandos desde la terminal
const [,, comando, ...args] = process.argv;

switch (comando) {
  case 'crear':
    const [tituloCrear, ...contenidoCrear] = args;
    crearNota(tituloCrear, contenidoCrear.join(' '));
    break;

  case 'listar':
    listarNotas();
    break;

  case 'eliminar':
    const tituloEliminar = args.join(' ');
    eliminarNota(tituloEliminar);
    break;

  default:
    console.log("❌ Función no reconocida. Usa: crear, listar o eliminar.");
}