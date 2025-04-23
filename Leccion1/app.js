const destinosRegistrados = [];

const calcularCosto = (destino, transporte) => {
    const baseCostos = {
    "Avión": 600,
    "Tren": 400,
    "Bus": 250
    };
    return `$${baseCostos[transporte] || 300}`;
};

const registrarDestino = (destino, fecha, hora, transporte) => {
    const costo = calcularCosto(destino, transporte);
    destinosRegistrados.push({ destino, fecha, hora, transporte, costo });
};

const mostrarItinerario = () => {
    destinosRegistrados.forEach(viaje => {
    console.log(`Destino: ${viaje.destino}`);
    console.log(`Fecha: ${viaje.fecha}`);
    console.log(`Transporte: ${viaje.transporte}`);
    console.log(`Costo: ${viaje.costo}`);
    console.log(`---------------------------`);
    });
};

const __resetDestinos = () => destinosRegistrados.length = 0;

const destinoEl = document.getElementById('destino');
const fechaEl = document.getElementById('fecha');
const horaEl = document.getElementById('hora');
const transporteEl = document.getElementById('transporte');
const detalleItinerario = document.getElementById('detalleItinerario');
const errorFecha = document.getElementById('errorFecha');
const errorDestino = document.getElementById('errorDestino');
const errorTransporte = document.getElementById('errorTransporte');

const now = new Date();
const today = now.toISOString().split('T')[0];
fechaEl.setAttribute('min', today);
fechaEl.value = today;
destinoEl.value = "";
transporteEl.value = "";

const mostrar = () => {
    detalleItinerario.innerHTML = '';
    destinosRegistrados.forEach((viaje, index) => {
    const div = document.createElement('div');
    div.className = 'viaje';
    div.innerHTML = `
        <button class="btn-eliminar" data-index="${index}">Eliminar</button>
        <strong>Destino:</strong> ${viaje.destino}<br>
        <strong>Fecha:</strong> ${new Date(viaje.fecha).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })} ${viaje.hora}<br>
        <strong>Transporte:</strong> ${viaje.transporte}<br>
        <strong>Costo:</strong> ${viaje.costo}
    `;
    detalleItinerario.appendChild(div);
    });

    document.querySelectorAll('.btn-eliminar').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const index = parseInt(e.target.dataset.index);
        destinosRegistrados.splice(index, 1);
        mostrar();
    });
    });
};

document.getElementById('registrarBtn').addEventListener('click', () => {
    let firstErrorField = null;
    const destino = destinoEl.value;
    const fecha = fechaEl.value;
    const hora = horaEl.value;
    const transporte = transporteEl.value;

    errorFecha.textContent = '';
    errorDestino.textContent = '';
    errorTransporte.textContent = '';

    destinoEl.classList.remove('error');
    fechaEl.classList.remove('error');
    transporteEl.classList.remove('error');

    let hasError = false;

    if (destino === '') {
    errorDestino.textContent = 'Por favor selecciona un destino.';
    destinoEl.classList.add('error');
    if (!firstErrorField) firstErrorField = destinoEl;
    hasError = true;
    }

    if (fecha === '') {
    errorFecha.textContent = 'Por favor selecciona una fecha.';
    fechaEl.classList.add('error');
    if (!firstErrorField) firstErrorField = fechaEl;
    hasError = true;
    } else if (fecha < today) {
    errorFecha.textContent = 'No puedes seleccionar una fecha anterior a hoy.';
    fechaEl.classList.add('error');
    if (!firstErrorField) firstErrorField = fechaEl;
    fechaEl.value = today;
    hasError = true;
    }

    if (transporte === '') {
    errorTransporte.textContent = 'Por favor selecciona un transporte.';
    transporteEl.classList.add('error');
    if (!firstErrorField) firstErrorField = transporteEl;
    hasError = true;
    }

    if (hasError) {
    if (firstErrorField) firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
    }

    registrarDestino(destino, fecha, hora, transporte);
    mostrar();
    fechaEl.value = today;
});
