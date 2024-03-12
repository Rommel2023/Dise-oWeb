window.onload = function () {
    document.getElementById("output-img").innerHTML = "<img src='img/bandera.jpg' class='img-fluid rounded ' alt='bandera' />";

    document.getElementById("parque").onchange = function (e) {
        let n = e.target.value;

        // expresiones que guarda las imagenes de los estadios y la inormacion de cada uno...
        let imagen = "<img src='img/" + n + ".jpg' class='img-fluid thumbnail rounded' alt='Parque Nacional'/>";
        let text = ["Se ubica en Alajuela",
            "Se ubica en Puntarenas",
            "Se ubica en Cartago",
            "Se ubica en San José y la provincia de Limón",
            "Se ubica en Guanacaste",


        ];
        // salida de las imagenes y los textos inormativos..

        document.getElementById("output-img").innerHTML = imagen;
        document.getElementById("output-txt").innerHTML = text[n - 1];


    };
};

// funcion del boton reiniciar 
document.getElementById("btn-clean").onclick = function () {

    document.getElementById("output-img").innerHTML = "<img src='img/bandera.jpg' class='img-fluid rounded ' alt='bandera'/>";
    // limpia los textos informativos  de los estadios
    document.getElementById("output-txt").innerHTML = "";
    // dejar el select con el texto por defecto
    document.getElementById("parque").value = "";


}