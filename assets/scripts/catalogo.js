//Mostrar detalles de productos

// Definimos un catálogo base
const productos = [
  {
    id: 1,
    nombre: "Parlante Portátil 3 X2 Extra Bass Bluetooth Luz Led Rgb Color Negro",
    precio: 17.654,
    imagen: "assets/images/productos/1.webp",
    descripcion: "Suono GTS-1558 ofrece un sonido natural, con una gran claridad y precisión, que se dispersa de manera uniforme.",
    categoria: "Audio",
    caracteristicas: [
      "Voltaje: 220V.",
      "Potencia de salida de 6 W para un sonido potente y claro.",
      "Dos parlantes para una experiencia de audio envolvente.",
      "Autonomía de batería de hasta 4 horas.",
      "Conexión Bluetooth para reproducir música de forma inalámbrica.",
      "Diseño portátil.",
      "Luces LED RGB que añaden un toque visual atractivo."
    ]
  },
  {
    id: 2,
    nombre: "Lavarropas LG ThinQ 10Kg Silver",
    precio: 1250000,
    imagen: "assets/images/productos/2.jpg",
    descripcion: "Lavarropas automático con conectividad ThinQ y programas inteligentes de lavado.",
    categoria: "Electrodomésticos",
    caracteristicas: [
      "Capacidad de 10 kg.",
      "14 programas de lavado que se adaptan a cada tipo de tejido.",
      "Ajusta los movimientos según el peso y la textura de las prendas.",
      "Su función Spa Steam elimina hasta el 99.9% de alérgenos.",
      "Velocidad de secado de 1400 RPM."
    ]
  },
  {
    id: 3,
    nombre: "Auriculares Inalámbricos Sony WH-CH720N",
    precio: 151999.2,
    precioAnterior: 189999,
    descuento: "20%",
    imagen: "assets/images/productos/3.webp",
    descripcion: "Auriculares Bluetooth con cancelación de ruido y hasta 35 horas de batería.",
    categoria: "Audio",
    caracteristicas: [
      "Cantidad de pares: 1.",
      "Alcance inalámbrico de 9.997 m.",
      "La duración máxima de la batería es 35 h.",
      "Modo manos libres incluido.",
      "Asistente de voz integrado: Siri.",
      "Con cancelación de ruido.",
      "Con micrófono incorporado.",
      "Su clasificación IP es IPX4.",
      "El largo del cable es de 1.2 m.",
      "Uso apto para entretenimiento.",
      "Cuenta con sensores de proximidad.",
      "Tamaño del altavoz: 3cm."
    ]
  },
  {
    id: 4,
    nombre: "Smart TV 55'' Philips 4K",
    precio: 619999,
    imagen: "assets/images/productos/4.webp",
    descripcion: "Televisor 4K Ultra HD con Android TV y control por voz.",
    categoria: "Televisores",
    caracteristicas: [
      "Amazon Alexa (Integrado) incorporado.",
      "Cuenta con wi-fi y puerto de red.",
      "Posee 3 puertos HDMI.",
      "Equipado con conexión USB.",
      "Con conectividad mediante Bluetooth.",
      "Dimensiones: 1.231m de ancho, 72.3cm de alto y 8.2cm de profundidad.",
      "Accesorios incluidos: Control remoto, 2 baterías AAA, Soporte para la mesa, Cable de alimentación, Guía de uso rápido, Folleto legal y de seguridad."
    ]
  },
  {
    id: 5,
    nombre: "Notebook Lenovo Thinkpad T14 G2 Ryzen 7 16g 512g W11p Negro",
    precio: 1818750,
    precioAnterior: 2425000,
    descuento: "25%",
    imagen: "assets/images/productos/7.jpg",
    descripcion: "Notebook Lenovo ThinkPad T14 Gen 2, una laptop de alto rendimiento y segura para el profesional moderno.",
    categoria: "Computadoras",
    caracteristicas: [
      "Procesador: AMD Ryzen 7 5000.",
      "Versión del sistema operativo: 10.",
      "Edición del sistema operativo: Pro.",
      "Nombre del sistema operativo: Windows.",
      "Capacidad de disco SSD: 512 GB.",
      "Memoria RAM: 16 GB.",
      "Con pantalla táctil: No.",
      "Resolución de pantalla: 1920 px x 1080 px.",
      "Modo de sonido Estéreo."
    ]
  },
  {
    id: 6,
    nombre: "Joystick Inalámbrico Compatible Con Ps4",
    precio: 20703.45,
    precioAnterior: 24357,
    descuento: "15%",
    imagen: "assets/images/productos/5.jpg",
    descripcion: "Cuenta con conexión Bluetooth de alta tecnología para usarlo en cualquier ordenador o dispositivo; ya no necesitarás de aplicaciones de terceros ni cable USB. ",
    categoria: "Accesorios",
    caracteristicas: [
      "Unidades por pack: 1.",
      "Cuenta con Bluetooth.",
      "Pantalla táctil.",
      "Mando inalámbrico.",
      "Compatible con: PlayStation 4.",
      "Con sistema de vibración incorporado.",
      "Cuenta con cable.",
      "Largo del cable: 1m."
    ]
  },
  {
    id: 7,
    nombre: "Gabinete Sentey H30 Micro Gs-6130 Vidrio 5 Fan Argb Blanco",
    precio: 62891.5,
    precioAnterior: 73990,
    descuento: "20%",
    imagen: "assets/images/productos/6.jpg",
    descripcion: "El Gabinete Sentey H30 Micro GS-6130 es la elección ideal para entusiastas del gaming que buscan un diseño atractivo y funcionalidad avanzada. Su estructura Micro ATX permite excelente compatibilidad con placas madre Mini-ITX y Micro-ATX, lo que lo convierte en una opción versátil para cualquier configuración. ",
    categoria: "Gabinetes",
    caracteristicas: [
      "Estructura Micro ATX compatible con placas madre Mini-ITX y Micro-ATX.",
      "Permite instalar hasta cinco ventiladores para un óptimo flujo de aire.",
      "Soporte para refrigeración líquida de hasta 240mm en el top o lado.",
      "Panel lateral de vidrio templado para exhibir los componentes internos.",
      "Puertos USB 3.0 y 2.0 para fácil acceso a periféricos.",
      "Fabricado con acero y vidrio templado para mayor durabilidad."
    ]
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

  // Precio actual
  document.querySelector(".price-current").textContent = `$ ${producto.precio}`;

  // Precio anterior
  const priceOld = document.querySelector(".price-old");
  if (producto.precioAnterior) {
    priceOld.textContent = `$ ${producto.precioAnterior}`;
    priceOld.style.display = "inline"; //Hace que el elemento quede visible
  } else {
    priceOld.style.display = "none"; //Oculta en caso que no tenga precio anterior
  }

  // Descuento
  const priceDiscount = document.querySelector(".price-discount");
  if (producto.descuento) {
    priceDiscount.textContent = `(-${producto.descuento})`;
    priceDiscount.style.display = "inline";
  } else {
    priceDiscount.style.display = "none";
  }

  document.querySelector(".product-description").textContent = producto.descripcion;
  document.querySelector(".product-meta p strong").nextSibling.textContent =
    " " + producto.categoria;

  //Busca dentro del HTML el espacio donde va la lista
  const featuresContainer = document.getElementById("product-features");

  //Características
  if (producto.caracteristicas) {
  //Empieza a crear el código HTML de la lista
  let html = "<h3>Características</h3>";
  html += "<ul class='list-group'>";

  //Recorre cada elemento de la lista de características
  producto.caracteristicas.forEach(caracteristica => {
    //Por cada una, agregar un <li> a la lista
    html += "<li style='margin-left: 30px'>" + caracteristica + "</li>";
  });

  //Cierra el ul
  html += "</ul>";

  //Insertar toda la lista dentro del HTML real
  featuresContainer.innerHTML = html;
  }
  

} else {
  // Si el id no existe
  document.querySelector("main.container").innerHTML = "<h2>Producto no encontrado</h2>";
}
}
