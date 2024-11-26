document.addEventListener("DOMContentLoaded", main);

function main() {
    let fechaObjetivo = new Date("2024-11-10");
    let fechaActual = new Date();
    let msPorDia = 1000*60*60*24;
    let diasRestantes = Math.floor((fechaObjetivo - fechaActual) / msPorDia);
    let decenas = Math.floor(diasRestantes / 10);
    let unidades = Math.floor(diasRestantes % 10);

    document.querySelector("#decenas").innerHTML = `<img src="${decenas}.png">`;
    document.querySelector("#unidades").innerHTML = `<img src="${unidades}.png">`;
}