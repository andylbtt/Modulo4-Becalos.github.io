// Arreglo de productos
const productos = [
    { nombre: "Café", precio: 80, categoria: "Bebidas" },
    { nombre: "Teclado", precio: 300, categoria: "Electrónica" },
    { nombre: "Taza", precio: 60, categoria: "Hogar" },
    { nombre: "Cuaderno", precio: 45, categoria: "Papelería" },
    { nombre: "Audífonos", precio: 95, categoria: "Electrónica" },
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" }
  ];
  
  // 1️. Usamos filter() para obtener productos de menos de $100
  const productosBaratos = productos.filter(producto => producto.precio < 100);
  console.log("🟡 Productos con precio menor a $100:");
  console.log(productosBaratos);
  
  // 2️. Usamos sort() para ordenarlos alfabéticamente por nombre
  const productosOrdenados = [...productosBaratos].sort((a, b) => a.nombre.localeCompare(b.nombre));
  console.log("🟢 Productos ordenados alfabéticamente:");
  console.log(productosOrdenados);
  
  // 3️. Usamos map() para obtener solo los nombres
  const nombresProductos = productosOrdenados.map(producto => producto.nombre);
  console.log("🔵 Solo los nombres de los productos ordenados:");
  console.log(nombresProductos);
  
  // 4️. BONUS: Usamos reduce() para obtener el total del precio de productos < $100
  const totalBaratos = productosBaratos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
  console.log("🟣 Precio total de productos < $100:");
  console.log(`$${totalBaratos}`);
  
  // 5️. BONUS: ¿Hay algún producto de papelería?
  const tienePapeleria = productos.some(producto => producto.categoria === "Papelería");
  console.log("🟠 ¿Existe algún producto de papelería?");
  console.log(tienePapeleria ? "Sí, hay productos de papelería." : "No hay productos de papelería.");
  