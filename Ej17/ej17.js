const titulo = document.getElementById('titulo');
let position = window.innerWidth;

function moverTitulo() {
    position -= 2;
    if (position < -titulo.offsetWidth) {
        position = window.innerWidth;
    }
    titulo.style.left = position + 'px';
    requestAnimationFrame(moverTitulo);
}

moverTitulo();

