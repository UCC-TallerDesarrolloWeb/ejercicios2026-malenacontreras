const productos = [
  {
    nombre: "Cabezal Sparring",
    description: "Cabezal de Sparring.",
    categoria: "Protectores",
    marca: "Gran Marc",
    talle: ["1", "2", "3"],
    precio: 35000,
    web: "https://www.granmarctiendaonline.com.ar/productos/cabezal-cerrado/",
    imagen: "cabezal-cerrado.webp",
  },
  {
    nombre: "Dobok Dan",
    description: "Bobok aprobado para torneos internacionales.",
    categoria: "Dobok",
    marca: "Daedo",
    talle: ["1", "2", "3", "4", "5", "6", "7", "8"],
    precio: 115000,
    web: "https://www.daedo.com/products/taitf-10813",
    imagen: "dobok.webp",
  },
  {
    nombre: "Escudo de Potencia",
    description: "Escudo de potencia para entrenamientos.",
    categoria: "Entrenamiento",
    marca: "Gran Marc",
    talle: ["s/talle"],
    precio: 51700,
    web: "https://www.granmarctiendaonline.com.ar/productos/escudo-de-potencia-grande/",
    imagen: "escudo-potencia.webp",
  },
  {
    nombre: "Par de focos redondos",
    description: "Par de focos de 25cm x 25cm para hacer entrenamiento.",
    categoria: "Entrenamiento",
    marca: "Gran Marc",
    talle: ["s/talle"],
    precio: 15000,
    web: "https://www.granmarctiendaonline.com.ar/productos/foco-con-dedos/",
    imagen: "foco-con-dedos.webp",
  },
  {
    nombre: "Guantes 10 onzas",
    description:
      "Guantes de Sparring de 10 onzas habilitados para torneos internacionales",
    categoria: "Protectores",
    marca: "Daedo",
    talle: ["s/talle"],
    precio: 35000,
    web: "https://www.daedo.com/products/pritf-2020",
    imagen: "protectores-manos.webp",
  },
  {
    nombre: "Protectores Pie",
    description: "Protectores de Pie habilitados para torneos internacionales",
    categoria: "Protectores",
    marca: "Daedo",
    talle: ["XXS", "XS", "S", "M", "L", "XL"],
    precio: 35000,
    web: "https://www.daedo.com/collections/collection-itf-gloves/products/pritf-2022",
    imagen: "protectores-pie.webp", 
  },
];

const formatPrice = (price) => {
    const numberFormat = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS'
    });
    return numberFormat.format(price);
};

const cargarProductos = (prod = productos) => {
    let contenido = "";

    prod.forEach((elemento, indice) => {
        contenido += `
            <div>
                <img src="https://ucc-tallerdesarrolloweb.github.io/filminas/images/ejercicios/${elemento.imagen}" alt="${elemento.nombre}">
                <h3>${elemento.nombre}</h3>
                <p>${formatPrice(elemento.precio)}</p>
                <button onclick="abrirDialogo(${indice})">Ver detalle del producto</button>
                <button type="button" onclick="agregarCarrito(${indice})">Agregar al carrito</button>
            </div>
        `;
    });

    let divCatalogo = document.getElementById("mostrar-catalogo");
    if(divCatalogo){
        divCatalogo.innerHTML = contenido;
    }
};

function abrirDialogo(indice) {
    document.getElementById("titulo-producto").innerText = productos[indice].nombre;
    document.getElementById("descripcion-producto").innerText = productos[indice].description;
    document.getElementById("dialogo").showModal();
}

function cerrarDialogo() {
    document.getElementById("dialogo").close();
}

let agregarCarrito = (id) => {
    let carritoList = localStorage.getItem("carrito");
    let arrayProductos = [];

    if (carritoList === null) {
        arrayProductos = [];
    } else {
        arrayProductos = JSON.parse(carritoList);
    }
    
    arrayProductos.push(id);
    localStorage.setItem("carrito", JSON.stringify(arrayProductos));
    contarProductos();
};

let cargarCarrito = () => {
    let carritoList = localStorage.getItem("carrito");
    let contenido = "";

    let divCarrito = document.getElementById("mostrar-carrito");
    if(!divCarrito) return;

    if (carritoList == null) {
        contenido = `<div>su carrito está vacío</div>`;
    } else {
        carritoList = JSON.parse(carritoList);
        
        const listaProd = [];
        const listCantidad = [];

        carritoList.forEach((num) => {
            if (!listaProd.includes(num)) {
                listaProd.push(num);
                listCantidad.push(1);
            } else {
                const idx = listaProd.indexOf(num);
                listCantidad[idx] += 1;
            }
        });

        contenido += `<button type="button" onclick="vaciarCarrito()">Vaciar carrito</button>`;
        
        let total = 0;

        listaProd.forEach((num, id) => {
            let p = productos[num];
            total += p.precio * listCantidad[id];
            
            contenido += `
                <div>
                    <h3>${p.nombre}</h3>
                    <p>${formatPrice(p.precio)}</p>
                    <p>cantidad: ${listCantidad[id]}</p>
                    <button type="button" onclick="eliminarProducto(${id})">Eliminar producto</button>
                </div>
            `;
        });
        
        contenido += `<div>Total: ${formatPrice(total)}</div>`;
    }

    divCarrito.innerHTML = contenido;
};

let vaciarCarrito = () => {
    localStorage.removeItem("carrito");
    contarProductos();
    window.location.reload();
};

let eliminarProducto = (id) => {
    let carritoList = JSON.parse(localStorage.getItem("carrito"));
    
    carritoList.splice(id, 1);
    
    if (carritoList.length > 0) {
        localStorage.setItem("carrito", JSON.stringify(carritoList));
    } else {
        localStorage.removeItem("carrito");
    }
    
    contarProductos();
    window.location.reload();
};

let contarProductos = () => {
    let getCart = localStorage.getItem("carrito");
    
    if (getCart != null) {
        getCart = JSON.parse(getCart);
        document.getElementById("cp-prod").innerHTML = getCart.length;
    } else {
        document.getElementById("cp-prod").innerHTML = "0";
    }
};

const filtrarProductos = () => {
    let searchWord = document.getElementById("search").value.toLowerCase();
    
    let newLista = productos;

    if (searchWord !== "") {
        newLista = newLista.filter(prod => 
            prod.nombre.toLowerCase().includes(searchWord) || 
            prod.description.toLowerCase().includes(searchWord)
        );
    }

    cargarProductos(newLista);
};

let ordenarCatalogo = () => {
    let option = document.getElementById("order").value;
    let newProducts = productos;

    switch (option) {
        case "menor":
            newProducts.sort((a, b) => a.precio - b.precio);
            break;
        case "mayor":
            newProducts.sort((a, b) => b.precio - a.precio);
            break;
        case "a-z":
            newProducts.sort((a, b) => {
                if (a.nombre.toUpperCase() < b.nombre.toUpperCase()) {
                    return -1;
                } else {
                    return 1;
                }
            });
            break;
        case "z-a":
            newProducts.sort((a, b) => {
                if (a.nombre.toUpperCase() > b.nombre.toUpperCase()) {
                    return -1;
                } else {
                    return 1;
                }
            });
            break;
        default:
            newProducts.sort((a, b) => a.precio - b.precio);
            break;
    }
    
    cargarProductos(newProducts);
};