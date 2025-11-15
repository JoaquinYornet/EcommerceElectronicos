//Mostrar detalles de productos

// Definimos un catálogo base
const productos = [
  {
    id: 1,
    nombre: "Thinkpad T14 G1",
    precio: 2425000,
    imagen: "assets/images/productos/1.jpg",
    descripcion: "Notebook Lenovo ThinkPad T14 G1 de alto rendimiento ideal para profesionales.",
    categoria: "Computadoras"
  },
  {
    id: 2,
    nombre: "Lavarropas LG ThinQ 10Kg Silver",
    precio: 1250000,
    imagen: "assets/images/productos/2.jpg",
    descripcion: "Lavarropas automático con conectividad ThinQ y programas inteligentes de lavado.",
    categoria: "Electrodomésticos"
  },
  {
    id: 3,
    nombre: "Auriculares Inalámbricos Sony WH-CH720N",
    precio: 151999.2,
    precioAnterior: 189999,
    descuento: "20%",
    imagen: "assets/images/productos/3.webp",
    descripcion: "Auriculares Bluetooth con cancelación de ruido y hasta 35 horas de batería.",
    categoria: "Audio"
  },
  {
    id: 4,
    nombre: "Smart TV 55'' Philips 4K",
    precio: 619999,
    imagen: "assets/images/productos/4.webp",
    descripcion: "Televisor 4K Ultra HD con Android TV y control por voz.",
    categoria: "Televisores"
  },
  {
    
  }
];

// Detectar si estamos en la página de detalle
if (window.location.pathname.includes("detalle.html")) {
  // Obtener ID desde la URL (ejemplo: ?id=3)
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  // Buscar el producto en la lista
  const producto = productos.find(p => p.id === id);

  // Mostrar datos si existe
  if (producto) {
    document.querySelector(".main-image").src = producto.imagen;
    document.querySelector(".product-title").textContent = producto.nombre;
    document.querySelector(".price-current").textContent = `$ ${producto.precio}`;
    if (producto.precioAnterior)
      document.querySelector(".price-old").textContent = `$ ${producto.precioAnterior}`;
    if (producto.descuento)
      document.querySelector(".price-discount").textContent = `(-${producto.descuento})`;
    document.querySelector(".product-description").textContent = producto.descripcion;
    document.querySelector(".product-meta p strong").nextSibling.textContent = " " + producto.categoria;
  } else {
    // Si el id no existe
    document.querySelector("main.container").innerHTML = "<h2>Producto no encontrado</h2>";
  }
}
