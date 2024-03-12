'use strict';

function searchParque() {
    let searchInput = document.getElementById("searchInput").value.toLowerCase();

    let guanaParques = ["Parque Nacional Santa Rosa", "Parque Nacional Rincon de la Vieja", "Parque Nacional Barra Honda"];
    let sjParques = ["Parque Nacional Los Quetzales", "Parque Nacional La Cangreja", "Parque Nacional Braulio Carrillo"];
    let puntarenasParques = ["Parque Nacional Manuel Antonio", "Parque Nacional Piedras Blancas", "Parque Nacional Isla Del Coco"];
    let parqueImages = {
        "parque nacional santa rosa": "img/parquesantarosa.jpg",
        "parque nacional rincon de la vieja": "img/parquerincon.jpg",
        "parque nacional barra honda": "img/parquebarra.jpg",
        "parque nacional los quetzales": "img/parquezales.jpg",
        "parque nacional la cangreja": "img/parquecangreja.jpg",
        "parque nacional braulio carrillo": "img/parquebraulio.jpg",
        "parque nacional manuel antonio": "img/parquemanuel.jpg",
        "parque nacional piedras blancas": "img/parquepiedras.jpg",
        "parque nacional isla del coco": "img/parquecoco.jpg",


    };

    let filteredparks = [];

    let allparks = [...guanaParques, ...sjParques, ...puntarenasParques];

    if (searchInput === "") {
        swal.fire({
            icon: "error",
            title: "Verificar la entrada de datos",
            confirmButtonText: "Intentar de nuevo",
            confirmButtonColor: "#0063be",
        });
        return;
    }


    for (let i = 0; i < allparks.length; i++) {
        if (allparks[i].toLowerCase().includes(searchInput)) {
            filteredparks = [allparks[i]];
            break;
        }
    }

    if (filteredparks.length === 0) {
        if (searchInput === "guanacaste") {
            filteredparks = guanaParques;
        } else if (searchInput === "san jose") {
            filteredparks = sjParques;
        } else if (searchInput === "puntarenas") {
            filteredparks = puntarenasParques;
        }
    }

    displayResults(filteredparks, parqueImages);
}



function displayResults(parques, parqueImages) {
    let resultsContainer = document.getElementById("pResult");
    resultsContainer.innerHTML = "";

    if (parques.length === 0) {
        resultsContainer.innerHTML = "<p>NO se encontraron parques nacionales para la ubicación escrita.</p>";
    } else {
        for (let i = 0; i < parques.length; i++) {
            let imageSrc = parqueImages[parques[i].toLowerCase()] || "ruta_por_defecto.jpg";

            let card = document.createElement("div");
            card.className = "card mb-3";
            card.style.maxWidth = "100%";

            card.innerHTML = `
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${imageSrc}" class="img-fluid rounded-start" alt="parque nacional ${parques[i]}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title"> ${parques[i]}</h5>
                            <p class="card-text">Te gustaria reservar en este parque nacional?
                            </p>
                            <button id='boton'>Reserva</button>
                                                    </div>
                    </div>
                </div>
            `;

            resultsContainer.appendChild(card);
        }
    }
}