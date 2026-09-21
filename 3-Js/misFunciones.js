/**
 * Convierte distintas unidades de medida a partir de un valor ingresado.
 * @method convertirUnidades
 * @param {string} id - El identificador del input modificado.
 * @param {number|string} valor - El valor ingresado que se desea convertir.
 */
function convertirUnidades(id, valor) {
    let metros, pulgadas, pie, yardas;

    if (isNaN(valor)) { 
        alert("Se ingresó un valor incorrecto: " + id);
        metros = "";
        pulgadas = "";
        yardas = "";
        pie = "";
    } else if (id == "metro") {
        metros = valor;
        pulgadas = valor * 39.3701;
        pie = valor * 3.28084;
        yardas = valor * 1.09361;
    } else if (id == "pulgada") {
        pulgadas = valor;
        metros = valor * 0.0254;
        pie = valor * 0.0833333;
        yardas = valor * 0.0277778;
    } else if (id == "pie") {
        pie = valor;
        metros = valor * 0.3048;
        pulgadas = valor * 12;
        yardas = valor * 0.333333;
    } else if (id == "yarda") {
        yardas = valor;
        metros = valor * 0.9144;
        pulgadas = valor * 36;
        pie = valor * 3;
    }
    
    document.getElementById("metro").value = metros;
    document.getElementById("pulgada").value = pulgadas;
    document.getElementById("pie").value = pie;
    document.getElementById("yarda").value = yardas;
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