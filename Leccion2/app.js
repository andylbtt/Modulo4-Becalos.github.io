let listaDeCompras = [];
let listaVisible = false;

const agregarProducto = () => {
  const input = document.getElementById('productoInput');
  const producto = input.value.trim();

  if (producto && !listaDeCompras.some(item => item.nombre === producto)) {
    listaDeCompras.push({ nombre: producto, comprado: false });
  } else if (listaDeCompras.some(item => item.nombre === producto)) {
    alert("Ese producto ya está en la lista.");
  }

  input.value = '';
  input.focus();
};

const eliminarProducto = (producto) => {
  listaDeCompras = listaDeCompras.filter(item => item.nombre !== producto);
  if (listaVisible) renderizarLista();
};

const marcarComprado = (producto) => {
  listaDeCompras = listaDeCompras.map(item =>
    item.nombre === producto ? { ...item, comprado: !item.comprado } : item
  );
  if (listaVisible) renderizarLista();
};

const toggleLista = () => {
  listaVisible = !listaVisible;
  const lista = document.getElementById('lista');
  const btn = document.getElementById('toggleListaBtn');

  if (listaVisible) {
    renderizarLista();
    btn.textContent = "Ocultar Lista";
  } else {
    lista.innerHTML = '';
    btn.textContent = "Mostrar Lista";
  }
};

const renderizarLista = () => {
  const lista = document.getElementById('lista');
  lista.innerHTML = '';

  listaDeCompras.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = item.comprado ? 'comprado' : '';

    li.innerHTML = `
      ${index + 1}. ${item.nombre}
      <div class="botones">
        <button onclick="marcarComprado('${item.nombre}')">${item.comprado ? '❌' : '✅'}</button>
        <button onclick="eliminarProducto('${item.nombre}')">🗑️</button>
      </div>
    `;

    lista.appendChild(li);
  });
};
