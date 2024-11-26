const fotos = [
    './Fotos/1.png',
    './Fotos/2.png',
    './Fotos/3.png',
    './Fotos/4.png'
];

const colores = [
    'red',
    'green',
    'blue',
    'orange'
];

let indice = 0;

function cargarLogo() {
    let logo = document.getElementById('logo');
    logo.src = fotos[indice];

    let subtitulo = document.getElementById('subtitulo');
    subtitulo.style.color = colores[indice];

    indice = (indice + 1) % fotos.length;
}

setInterval(cargarLogo, 2000);
cargarLogo();

