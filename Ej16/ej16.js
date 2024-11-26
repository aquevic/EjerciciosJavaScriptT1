
function contarLetras() {
    const cadena = prompt("Introduce cadena");
    let vocales = 0;
    let consonantes = 0;

    const cadenaMin = cadena.toLowerCase();

    for (let letra of cadenaMin) {
        if (/[aeiou]/.test(letra)) {
            vocales++;
        } else if (/[bcdfghjklmnpqrstvwxyz]/.test(letra)) {
            consonantes++;
        }
    }

    const resultado = document.getElementById('resultado');
    resultado.textContent = `Vocales: ${vocales}, Consonantes: ${consonantes}`;
}

contarLetras();
