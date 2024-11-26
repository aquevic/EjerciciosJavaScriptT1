let tabla = "";
let n=7;
for (let i = 0; i <= 10; i++) {
    if(i%2==0){
        tabla += "<tr align=\"center\" bgcolor=\"#39FF14\"><td >"+n+"</td><td>x</td><td>" + i + "</td><td>=</td><td><font color=\"red\">"+ (n * i) + "</font></td></tr>";
    }else{
        tabla += "<tr align=\"center\"  bgcolor=\"#14faff\"><td>"+n+"</td><td>x</td><td>" + i + "</td><td>=</td><td><font color=\"red\">" + (n * i) + "</font></td></tr>";
    }
   
}
document.write(tabla);