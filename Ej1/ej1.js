let tabla = "";
let n=7;
for (let i = 0; i <= 10; i++) {
    tabla += "<tr align=\"center\"><td>"+n+"</td><td>x</td><td>" + i + "</td><td>=</td><td>" + (n * i) + "</td></tr>";
}
document.write(tabla);
