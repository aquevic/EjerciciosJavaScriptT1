let tabla ="";
let n = parseInt(prompt("Dame un numero: "));

tabla = crearTabla(n);
let nodo = document.getElementById("mitabla");
nodo.innerHTML = tabla;

function crearTabla(n){
    tabla+="<table border=\"1px\" align=\"center\" width=\"650px\">";
    tabla+="<th colspan=\"5\">Tabla del 7</th>";
    for (let i = 0; i <= 10; i++) {
        tabla += "<tr align=\"center\"><td>" + n + "</td><td>x</td><td>" + i + "</td><td>=</td><td>" + (n * i) + "</td></tr>";
    }
    tabla+= "</table>";
    return tabla;
}



