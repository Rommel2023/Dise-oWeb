
function menu() {

    let seleccion = document.getElementById('opciones').value;

    switch (seleccion) {
        case 'A':
            Swal.fire({
                icon: "success",
                title: "Cine Capo San Ramon",
                text: "Un momento por favor...",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                window.location.href = "https://ccmcinemas.com/cines/2/";
            });
            return;
        //window.open("retrato.html","_self");
        case 'B':
            Swal.fire({
                icon: "success",
                title: "Cine Capo San Carlos",
                text: "Un momento por favor...",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                window.location.href = "https://ccmcinemas.com/cines/4/";
            });
            return;
        //window.open("boda.html","_self");
        case 'C':
            Swal.fire({
                icon: "success",
                title: "Cine Capo Jacó",
                text: "Un momento por favor...",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                window.location.href = "https://ccmcinemas.com/cines/6/";
            });
            return;
        //window.open("paisaje.html","_self");
    }
}