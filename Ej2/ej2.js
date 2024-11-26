let n = parseInt(prompt("Escribe un numero=: "));
let tabla = "";

for (let i = 1; i <= 10; i++) {
    tabla += "<tr align=\"center\"><td>" +n+"</td><td>x</td><td>" + i + "</td><td>=</td><td>" + (n * i) + "</td></tr>";
}
document.write(tabla);