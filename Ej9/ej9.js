document.bgColor = 'yellow';


let botonRojo = document.getElementById('ro');
let botonVerde = document.getElementById('ve');
let botonAzul = document.getElementById('az');
let botonAmarillo = document.getElementById('am');
let botonMas = document.getElementById('ma');
resaltarBoton(botonAmarillo);

botonRojo.onclick = function() {
    document.bgColor = 'red';
    resaltarBoton(botonRojo);
};

botonVerde.onclick = function() {
    document.bgColor = 'green';
    resaltarBoton(botonVerde);
};
botonAzul.onclick = function() {
    document.bgColor = 'blue';
    resaltarBoton(botonAzul);
};

botonAmarillo.onclick = function() {
    document.bgColor= 'yellow';
    resaltarBoton(botonAmarillo);
};

function resaltarBoton(boton) {
    botonRojo.style.border = '';
    botonVerde.style.border = '';
    botonAzul.style.border = '';
    botonAmarillo.style.border = '';
    botonMas.style.border = '';
    boton.style.border = '3px solid black';
}

function cambiarFondo(color){
    document.bgColor = color;
}

document.getElementById("ma").onclick=function(){
    var colorActual = document.bgColor;
    if (colorActual==="red"){
        cambiarFondo("green");
    }else if(colorActual==="green"){
        cambiarFondo("blue");
    }else if(colorActual==="blue"){
        cambiarFondo("yellow");
    }else if(colorActual==="yellow"){
        cambiarFondo("red");
    }
    resaltarBoton(botonMas);
}





