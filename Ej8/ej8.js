// Obtener la información básica del navegador
let nombreNavegador;
let versionNavegador;
let sistemaOperativo;
let lenguaje ;

window.document.getElementById("nombre-navegador").textContent+=navigator.appCodeName;
window.document.getElementById("version-navegador").textContent += navigator.appVersion;
window.document.getElementById("sistema-operativo").textContent += navigator.platform;
window.document.getElementById("lenguaje").textContent += navigator.language;
