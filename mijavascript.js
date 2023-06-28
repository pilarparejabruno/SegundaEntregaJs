const listaProductosCuidadoFacial = [];
const listaProductosCuidadoCapilar = [];
const listaProductosCuidadoLabial = [];
const listaProductosAccesorios = [];

listaProductosCuidadoFacial.push(
  new Producto(
    "Crema Cielo",
    "Cuidado facial",
    "hidratante facial",
    "Kamikaze",
    5040
  )
);

listaProductosCuidadoFacial.push(
  new Producto(
    "Espuma Nube",
    "Cuidado facial",
    "espuma de limpieza facial",
    "Kamikaze",
    2850
  )
);

listaProductosCuidadoFacial.push(
  new Producto(
    "Scrub facial de almendras",
    "Cuidado facial",
    "exfoliante facial",
    "Kamikaze",
    3180
  )
);

listaProductosCuidadoFacial.push(
  new Producto(
    "Mascarilla Neptuno",
    "Cuidado facial",
    "Mascarilla de arcilla",
    "Kamikaze",
    2520
  )
);
listaProductosCuidadoFacial.push(
  new Producto("Sheetmask", "Cuidado facial", "Mascara facial", "Kamikaze", 150)
);
listaProductosCuidadoCapilar.push(
  new Producto(
    "Shampoo solido",
    "Cuidado capilar",
    "Shampoo fortalecedor y restaurador",
    "Kamikaze",
    2160
  )
);
listaProductosCuidadoCapilar.push(
  new Producto(
    "Acondicionador solido",
    "Cuidado capilar",
    "HIdratacion intensa",
    "Kamikaze",
    2160
  )
);
listaProductosCuidadoLabial.push(
  new Producto(
    "balsamo labial",
    "Cuidado labial",
    "balsamo labial con color y aroma",
    "Kamikaze",
    2270
  )
);
listaProductosAccesorios.push(
  new Producto(
    "Pad XL",
    "Accesorio",
    "Pad facial reutilizable",
    "Kamikaze",
    900
  )
);
listaProductosAccesorios.push(
  new Producto(
    "Gua Sha",
    "Accesorio",
    "Piedra para masaje facial",
    "Kamikaze",
    3000
  )
);

const todosLosProductos = [];
todosLosProductos.push(listaProductosCuidadoFacial);
todosLosProductos.push(listaProductosCuidadoCapilar);
todosLosProductos.push(listaProductosCuidadoLabial);
todosLosProductos.push(listaProductosAccesorios);

console.log(todosLosProductos);

// Filtrar productos

const filtroCuidadoFacial = todosLosProductos[0].filter((producto) =>
  producto.categoria.includes("Cuidado facial")
);

const filtroCuidadoCapilar = todosLosProductos[1].filter((producto) =>
  producto.categoria.includes("Cuidado capilar")
);

const filtroCuidadoLabial = todosLosProductos[2].filter((producto) =>
  producto.categoria.includes("Cuidado labial")
);

const filtroAccesorios = todosLosProductos[3].filter((producto) =>
  producto.categoria.includes("Accesorio")
);

console.log(filtroCuidadoFacial);
console.log(filtroCuidadoCapilar);
console.log(filtroCuidadoLabial);
console.log(filtroAccesorios);

//Simulador de carrito

let opcionProducto;
let precioProducto = 0;
let cantidadProducto;
let continuarComprando;
let total = 0;

function cuidadoFacial() {
  opcionProducto = listaProductosCuidadoFacial
    .map((producto) => `${producto.nombre} $ ${producto.precio}`)
    .join("\n");

  const productoElegido = prompt(
    "Ingrese el nombre del producto que desea agregar al carrito:" +
      "\n" +
      opcionProducto
  );

  const productoEncontrado = listaProductosCuidadoFacial.find(
    (producto) => producto.nombre === productoElegido
  );

  if (productoEncontrado) {
    cantidadProducto = parseInt(prompt("Ingrese la cantidad que prefiere:"));
    const precio = productoEncontrado.precio * cantidadProducto;
    return precio;
  } else {
    alert("El producto ingresado no existe");
    return 0;
  }
}

function cuidadoCapilar() {
  opcionProducto = listaProductosCuidadoCapilar
    .map((producto) => `${producto.nombre} $ ${producto.precio}`)
    .join("\n");

  const productoElegido = prompt(
    "Ingrese el nombre del producto que desea agregar al carrito:" +
      "\n" +
      opcionProducto
  );

  const productoEncontrado = listaProductosCuidadoCapilar.find(
    (producto) => producto.nombre === productoElegido
  );

  if (productoEncontrado) {
    cantidadProducto = parseInt(prompt("Ingrese la cantidad que prefiere:"));
    const precio = productoEncontrado.precio * cantidadProducto;
    return precio;
  } else {
    alert("El producto ingresado no existe");
    return 0;
  }
}

function cuidadoLabial() {
  opcionProducto = listaProductosCuidadoLabial
    .map((producto) => `${producto.nombre} $ ${producto.precio}`)
    .join("\n");

  const productoElegido = prompt(
    "Ingrese el nombre del producto que desea agregar al carrito:" +
      "\n" +
      opcionProducto
  );

  const productoEncontrado = listaProductosCuidadoLabial.find(
    (producto) => producto.nombre === productoElegido
  );

  if (productoEncontrado) {
    cantidadProducto = parseInt(prompt("Ingrese la cantidad que prefiere:"));
    const precio = productoEncontrado.precio * cantidadProducto;
    return precio;
  } else {
    alert("El producto ingresado no existe");
    return 0;
  }
}

function accesorios() {
  opcionProducto = listaProductosAccesorios
    .map((producto) => `${producto.nombre} $ ${producto.precio}`)
    .join("\n");

  const productoElegido = prompt(
    "Ingrese el nombre del producto que desea agregar al carrito:" +
      "\n" +
      opcionProducto
  );

  const productoEncontrado = listaProductosAccesorios.find(
    (producto) => producto.nombre === productoElegido
  );

  if (productoEncontrado) {
    cantidadProducto = parseInt(prompt("Ingrese la cantidad que prefiere:"));
    const precio = productoEncontrado.precio * cantidadProducto;
    return precio;
  } else {
    alert("El producto ingresado no existe");
    return 0;
  }
}

alert('"Bienvidxs a Raíces, cosmética natural"');
do {
  let categoria = parseInt(
    prompt(
      "Seleccione la categoría de productos que prefiere:" +
        "\n" +
        "1- Cuidado facial" +
        "\n" +
        "2- Cuidado capilar" +
        "\n" +
        "3- Cuidado labial" +
        "\n" +
        "4- Accesorios"
    )
  );

  switch (categoria) {
    case 1:
      precioProducto = cuidadoFacial();
      break;
    case 2:
      precioProducto = cuidadoCapilar();
      break;
    case 3:
      precioProducto = cuidadoLabial();
      break;
    case 4:
      precioProducto = accesorios();
  }

  total += precioProducto;
  continuarComprando = prompt(
    "Desea continuar agregando productos al carrito? Si / No"
  );
} while (continuarComprando.toLocaleLowerCase() !== "no");

alert("El total del carrito es de $" + total);
