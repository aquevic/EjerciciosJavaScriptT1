let n = parseInt(prompt("Escribe numero multiplicador: "));
let tabla = "";
let color = prompt("Escribe un color: ");
let tam = prompt("Escribe el tamaño(1al6): ");


document.write("<table border=\"1px\" align=\"center\" width=\"650px\" bgcolor=\""+color+"\">");
document.write("<th bgcolor=\""+color+"\" colspan=\"5\" ><font size=\""+tam+"px\">Tablas del numero "+n+"</font></th>");
for (let i = 1; i <= 10; i++) {
    tabla += "<tr align=\"center\"><td><font size=\""+tam+"px\">"+n+"</font></td><td><font size=\""+tam+"px\">x</font></td><td><font size=\""+tam+"px\">" + i + "</font></td><td><font size=\""+tam+"px\">=</font></td><td><font size=\""+tam+"px\">" + (n * i) + "</font></td></tr>";
}
document.write("</table>");
document.write(tabla);
