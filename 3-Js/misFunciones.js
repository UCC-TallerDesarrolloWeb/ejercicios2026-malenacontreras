/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
function convertirUnidades(id,value){
    if(isNaN(valor)){//me devuelve si es numerica o no
        alert("Se ingreso un valor incorrecto: "+id);
    }else if(id=="metro"){
        document.getElementById("pulgada").value=valor*39.09361;
        document.getElementById("pie").value=valor*3.28084;
        document.getElementById("yarda").value=valor*1.09361;

    }
}