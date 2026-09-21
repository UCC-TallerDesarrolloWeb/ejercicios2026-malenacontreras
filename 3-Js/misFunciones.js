/**
 * Convierte distintas unidades de medida a partir de un valor ingresado.
 * @method convertirUnidades
 * @param {string} id - El identificador del input modificado.
 * @param {number|string} valor - El valor ingresado que se desea convertir.
 */
function convertirUnidades(id, valor) {
    // Si se ingresa una coma, la cambiamos a punto para que JavaScript pueda hacer la matemática
    if (valor.includes(",")) {
        valor = valor.replace(",", ".");
    }

    if (isNaN(valor)) { // me devuelve si es numérico o no
        alert("Se ingresó un valor incorrecto: " + id);
        // Opcional: limpiar los campos si el valor es incorrecto
        document.getElementById("metro").value = "";
        document.getElementById("pulgada").value = "";
        document.getElementById("pie").value = "";
        document.getElementById("yarda").value = "";
    } else if (id == "metro") {
        document.getElementById("pulgada").value = valor * 39.3701;
        document.getElementById("pie").value = valor * 3.28084;
        document.getElementById("yarda").value = valor * 1.09361;
    } else if (id == "pulgada") {
        document.getElementById("metro").value = valor * 0.0254;
        document.getElementById("pie").value = valor * 0.0833333;
        document.getElementById("yarda").value = valor * 0.0277778;
    } else if (id == "pie") {
        document.getElementById("metro").value = valor * 0.3048;
        document.getElementById("pulgada").value = valor * 12;
        document.getElementById("yarda").value = valor * 0.333333;
    } else if (id == "yarda") {
        document.getElementById("metro").value = valor * 0.9144;
        document.getElementById("pulgada").value = valor * 36;
        document.getElementById("pie").value = valor * 3;
    }
}

/**
 * conversion de grados a radianes
 * @method convertirGR
 * @param {string} id - El identificador del input modificado.
 */
function convertirGR(id){
    let grad, rad;

    if(id=="grados"){
        grad=document.getElementById("grados").value;
        rad = grad*Math.PI/180;
    }else{
        rad = document.getElementById("radianes").value;

        grad = rad*180/Math.PI;

    }
    document.getElementById("grados").value=grad;
    document.getElementById("radianes").value=rad;

}