window.onload = function () {
    // combo llamado modelo ID 
    document.getElementById("hamburguesas").onchange = function (e) {
        // destino del valor selecionado combo1
        a = e.target.value;
        if (a == "BigMac") {
            var imagen = "img/bigmac.png";
        } else if (a == "McNifica") {
            var imagen = "img/mcnifica.png";
        } else if (a == "McPollo") {
            var imagen = "img/mcpollo.png";
        } else if (a == "Hongos") {
            var imagen = "img/hongos.png";
        }

        document.getElementById("imagen").src = imagen;
    }
    document.getElementById("combo").onchange = function (es) {

        n = es.target.value;
    }

}


function calcular() {
    var monto = 0;
    switch (a) {
        case "BigMac":
            if (n == "No") monto = 3200;
            else monto = 5200;

        case "McNifica":
            if (n == "No") monto = 3200;
            else monto = 5200;

        case "McPollo":
            if (n == "No") monto = 3200;
            else monto = 5200;

        case "Hongos":
            if (n == "No") monto = 3200;
            else monto = 5200;
        default:
            break;
    }

    let imagenDireccion = "img/" + a.toLowerCase() + ".png";

    swal.fire({
        imageUrl: imagenDireccion,
        html: "<p> El precio de la hamburguesa seria" +
            "<br>" +
            "₡" +
            monto,
        imagewidth: 600,
        imageheight: 250,
        imageAlt: "Vehiculo" + a,
    });

}