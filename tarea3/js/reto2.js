"use strict";
var num = 1;

function calcularFactura() {

    var nombreTxt = document.getElementById("nombre").value;
    var articuloTxt = document.getElementById("articulo").value;
    var precio = parseFloat(document.getElementById("precio").value);
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var iva = 0.13;
    var servicio = 0.05;
    precio1 = 0;
    precio2 = 0
    console.log("Articulo:", articuloTxt);

    // Mostrar datos del cliente y artículo
    document.getElementById("nombreCliente").innerHTML = "Nombre: " + nombreTxt;
    document.getElementById("articuloTxt").innerHTML = "Articulo: " + articuloTxt;
    document.getElementById("precioProducto").innerHTML = "Precio: ₡" + precio.toFixed(2);


    var subtotal = precio * cantidad;
    var precioConIva = subtotal * iva;
    var precio1 = precioConIva + precio;
    var precioServi = subtotal * servicio;
    var precio2 = precioServi + precio;

    var total = subtotal + precioConIva + precioServi;

    document.getElementById("subtotal").innerHTML = "Subtotal: ₡" + subtotal.toFixed(2);
    document.getElementById("precioConIva").innerHTML = "\ IVA: ₡" + precio1.toFixed(2);
    document.getElementById("precioServi").innerHTML = "servicio: ₡" + precio2.toFixed(2);
    document.getElementById("total").innerHTML = "Total: ₡" + total.toFixed(2);

    // Mostrar los botones
    document.getElementById("limpiarBtn").style.display = "inline-block";
    document.getElementById("boton1").style.display = "inline-block";
    document.getElementById("boton2").style.display = "inline-block";

    if (nombreTxt == "" || articuloTxt == "" || precio == "" || cantidad == "") {
        Swal.fire({
            title: 'Atención',
            icon: 'error',
            iconColor: '#3a7aa5',
            text: 'Campos vacios. Intentar de nuevo por favor.',
            imageUrl: "imagenes/logo.png",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Logotipo de la empresa',
        })



        //limpiar los campos input
        document.getElementById("nombre").value = "";
        document.getElementById("articulo").value = "";
        document.getElementById("precio").value = "";
        document.getElementById("cantidad").value = "";
    };

};

function Numeros(string) {//Solo numeros
    var out = '';
    var filtro = '1234567890';//Caracteres validos

    //Recorrer el texto y verificar si el caracter se encuentra en la lista de validos 
    for (var i = 0; i < string.length; i++)
        if (filtro.indexOf(string.charAt(i)) != -1)
            //Se añaden a la salida los caracteres validos
            out += string.charAt(i);

    //Retornar valor filtrado
    return out;
}


function limpiar() {
    //asigna 1 al campo numero
    num = 1;
    //recarga la pagina web
    location.reload();
    // borra el contenido de los campos
    document.getElementById("nombre").value = "";
    document.getElementById("articulo").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("cantidad").value = "";
    //borra el contenido de la tabla
    document.getElementById("tabla").innerHTML = "";
    document.getElementById("limpiarBtn").style.display = "none";
    document.getElementById("boton1").style.display = "none";
    document.getElementById("boton2").style.display = "none";
}