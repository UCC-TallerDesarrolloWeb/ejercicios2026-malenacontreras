/**
 * Convierte distintas unidades de medida a partir de un valor ingresado.
 * @method convertirUnidades
 * @param {string} id - El identificador del input modificado.
 * @param {number|string} valor - El valor ingresado que se desea convertir.
 */
function convertirUnidades(id, valor) {
    if (valor.includes(',')) {
        valor = valor.replace(',', '.');
    }

    let metro, pulgada, pie, yarda;

    if (id === "metro") {
        metro = valor;
        pulgada = Math.round(valor * 39.3701 * 100) / 100;
        pie = Math.round(valor * 3.28084 * 100) / 100;
        yarda = Math.round(valor * 1.09361 * 100) / 100;
    } else if (id === "pulgada") {
        pulgada = valor;
        metro = Math.round((valor / 39.3701) * 100) / 100;
        pie = Math.round((valor / 12) * 100) / 100;
        yarda = Math.round((valor / 36) * 100) / 100;
    } else if (id === "pie") {
        pie = valor;
        metro = Math.round((valor / 3.28084) * 100) / 100;
        pulgada = Math.round(valor * 12 * 100) / 100;
        yarda = Math.round((valor / 3) * 100) / 100;
    } else if (id === "yarda") {
        yarda = valor;
        metro = Math.round((valor / 1.09361) * 100) / 100;
        pulgada = Math.round(valor * 36 * 100) / 100;
        pie = Math.round(valor * 3 * 100) / 100;
    }

    document.getElementsByName("unid_metro")[0].value = metro;
    document.getElementsByName("unid_pulgada")[0].value = pulgada;
    document.getElementsByName("unid_pie")[0].value = pie;
    document.getElementsByName("unid_yarda")[0].value = yarda;
}
/**
 * conversion de grados a radianes
 * @method convertirGR
 * @param {string} id - El identificador del input modificado.
 */
function convertirGR(id) {
    let grad, rad;

    if (id == "grados") {
        grad = document.getElementById("grados").value;
        rad = grad * Math.PI / 180;
    } else {
        rad = document.getElementById("radianes").value;
        grad = rad * 180 / Math.PI;
    }
    
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}

/**
 * mostrar u ocultar div
 * @method mostrarOcultar
 * @param {string} valor - valor del input
 */
function mostrarOcultar(valor) {
    if (valor == "val_mostrar") {
        document.getElementById("unDiv").style.display = 'block';
    } else {
        document.getElementById("unDiv").style.display = 'none';
    }
}
/**
 * Suma dos valores ingresados por el usuario.
 * @method sumar
 */
function sumar() {
    let num1 = Number(document.getElementById("nums1").value);
    let num2 = Number(document.getElementById("nums2").value);
    document.getElementById("totalS").value = num1 + num2;
}

/**
 * Resta dos valores ingresados por el usuario.
 * @method restar
 */
function restar() {
    let num1 = Number(document.getElementById("numr1").value);
    let num2 = Number(document.getElementById("numr2").value);
    document.getElementById("totalR").value = num1 - num2;
}

/**
 * Multiplica dos valores ingresados por el usuario.
 * @method multiplicar
 */
function multiplicar() {
    let num1 = Number(document.getElementById("numm1").value);
    let num2 = Number(document.getElementById("numm2").value);
    document.getElementById("totalM").value = num1 * num2;
}

/**
 * Divide dos valores ingresados por el usuario.
 * @method dividir
 */
function dividir() {
    let num1 = Number(document.getElementById("numd1").value);
    let num2 = Number(document.getElementById("numd2").value);
    
    // Pequeña validación por si intentan dividir por cero
    if (num2 === 0) {
        alert("No se puede dividir por cero");
        document.getElementById("totalD").value = "";
    } else {
        document.getElementById("totalD").value = num1 / num2;
    }
}