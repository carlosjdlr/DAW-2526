const productos = [
  { nombre: "Laptop", precio: 800, descripcion: "Portátil ligera y rápida" },
  { nombre: "Mouse", precio: 20, descripcion: "Mouse inalámbrico ergonómico" },
  { nombre: "Teclado", precio: 35, descripcion: "Teclado mecánico retroiluminado" }
];

const lista = document.getElementById("lista-productos");
const btnAgregar = document.getElementById("btn-agregar");

function renderizarProductos() {
  lista.innerHTML = "";
  productos.forEach(producto => {
    const item = document.createElement("li");
    item.textContent = `${producto.nombre} - $${producto.precio} | ${producto.descripcion}`;
    lista.appendChild(item);
  });
}

btnAgregar.addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value.trim();
  const precio = parseFloat(document.getElementById("precio").value);
  const descripcion = document.getElementById("descripcion").value.trim();

  if (nombre && !isNaN(precio) && descripcion) {
    productos.push({ nombre, precio, descripcion });
    renderizarProductos();

    // Limpiar campos
    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("descripcion").value = "";
  } else {
    alert("Por favor, completa todos los campos correctamente.");
  }
});

renderizarProductos();
