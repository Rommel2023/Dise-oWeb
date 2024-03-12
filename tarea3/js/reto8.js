// JavaScript para manejar la funcionalidad
const formulario = document.getElementById('formulario');
const selector = document.getElementById('selector');
const tablaDatos = document.getElementById('tablaDatos');
const datos = [];

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);

    const nuevoDato = { nombre, apellido, nota1, nota2, nota3 };
    datos.push(nuevoDato);
    actualizarSelector();
    formulario.reset();
});

selector.addEventListener('change', function () {
    const indiceSeleccionado = selector.selectedIndex;
    if (indiceSeleccionado > 0) {
        const datoSeleccionado = datos[indiceSeleccionado - 1];
        mostrarDatosSeleccionados(datoSeleccionado);
    } else {
        ocultarTablaDatos();
    }
});

function actualizarSelector() {
    selector.innerHTML = '<option value="">Seleccione un nombre</option>';
    datos.forEach(function (dato, index) {
        const option = document.createElement('option');
        option.textContent = dato.nombre + ' ' + dato.apellido;
        option.value = index.toString(); // Para identificar el índice del dato en el arreglo
        selector.appendChild(option);
    });
}

function mostrarDatosSeleccionados(dato) {
    const tbody = tablaDatos.querySelector('tbody');
    tbody.innerHTML = '';
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${dato.nombre}</td>
        <td>${dato.apellido}</td>
        <td>${dato.nota1}</td>
        <td>${dato.nota2}</td>
        <td>${dato.nota3}</td>
    `;
    tbody.appendChild(row);
    tablaDatos.style.display = 'table';
}

function ocultarTablaDatos() {
    tablaDatos.style.display = 'none';
}
