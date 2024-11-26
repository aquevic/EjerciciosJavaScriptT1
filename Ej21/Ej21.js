document.addEventListener('DOMContentLoaded', main);

function main() {
    var numeros = [];
    var resultadoDiv = document.getElementById('resultado');
    var addBoton = document.getElementById('addBoton');
    var addNumero = document.getElementById('addNumero');

    addBoton.addEventListener("click", agregarBotones); 

    function agregarBotones() {
        var numero = parseInt(addNumero.value);

        if (!isNaN(numero) && numeros.length < 10) {
            numeros.push(numero);
            addNumero.value = '';

            resultadoDiv.innerHTML = '';

            var max = Math.max(...numeros);
            var min = Math.min(...numeros);

            for (var i = 0; i < numeros.length; i++) {
                var texto = numeros[i] + ' ';

                if (numeros[i] === max) {
                    resultadoDiv.innerHTML += '<span class="red">' + texto + '</span>';
                } else if (numeros[i] === min) {
                    resultadoDiv.innerHTML += '<span class="green">' + texto + '</span>';
                } else {
                    resultadoDiv.innerHTML += texto;
                }
            }
        } else if (numeros.length >= 10) {
            alert("Ya has introducido 10 números.");
        } else {
            alert("Por favor, introduce un número válido.");
        }
    }
}
