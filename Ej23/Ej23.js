document.addEventListener("DOMContentLoaded", principal);

function principal() {
  const boton = document.getElementById("abrir");

  boton.addEventListener("click", abrirPagina);
}

function abrirPagina() {
  const radioSeleccionado = document.querySelector("input[name='paginaWeb']:checked");

  if (radioSeleccionado) {
    window.open(radioSeleccionado.value, "_blank");
  } else {
    alert("Por favor, selecciona una página antes de continuar.");
  }
}
