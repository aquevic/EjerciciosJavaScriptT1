document.addEventListener("DOMContentLoaded", principal);

function principal() {
  let boton = document.getElementById("abrir");
  boton.addEventListener("click", abrirPaginas);
}

function abrirPaginas() {
  let checkboxesSeleccionados = document.querySelectorAll("#paginasWebs input[type='checkbox']:checked");

  if (checkboxesSeleccionados.length > 0) {
    for (let checkbox of checkboxesSeleccionados) {
      window.open(checkbox.value, "_blank");
    }
  } else {
    alert("Por favor selecciona al menos una pagina");
  }
}
