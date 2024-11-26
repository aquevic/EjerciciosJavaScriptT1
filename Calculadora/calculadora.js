document.addEventListener('DOMContentLoaded', function() {
    var operacion = "";
    var pantalla = document.getElementById('pantalla');
    pantalla.value=("0");

    // Función que agrega el valor del botón a la operación
    function agregarValor(valor) {
        operacion += valor;
        pantalla.value = operacion;
    }

    // Función para calcular el resultado
    function calcularResultado() {
        let resultado = 0;
        let numeroActual = "";
        let operadorActual = '+';

        for (let i = 0; i < operacion.length; i++) {
            const char = operacion[i];

            if (!isNaN(char) || char === '.') {
                // Si es un número o un punto decimal, se agrega al número actual
                numeroActual += char;
            } else {
                // Si encontramos un operador
                if (numeroActual) {
                    // Convierte el número actual a un número y calcula
                    const num = parseFloat(numeroActual);
                    if (operadorActual === '+') {
                        resultado += num;
                    } else if (operadorActual === '-') {
                        resultado -= num;
                    } else if (operadorActual === '*') {
                        resultado *= num;
                    } else if (operadorActual === '/') {
                        if (num !== 0) {
                            resultado /= num;
                        } else {
                            pantalla.value = 'Error';
                            return;
                        }
                    }
                    numeroActual = ""; // Reinicia el número actual
                }
                operadorActual = char; // Actualiza el operador actual
            }
        }

        // Si queda un número al final, se procesa
        if (numeroActual) {
            const num = parseFloat(numeroActual);
            if (operadorActual === '+') {
                resultado += num;
            } else if (operadorActual === '-') {
                resultado -= num;
            } else if (operadorActual === '*') {
                resultado *= num;
            } else if (operadorActual === '/') {
                if (num !== 0) {
                    resultado /= num;
                } else {
                    pantalla.value = 'Error';
                    return;
                }
            }
        }

        pantalla.value = resultado; // Muestra el resultado
        operacion = resultado.toString(); // Actualiza la operación
    }

    // Función para limpiar la pantalla
    function limpiarPantalla() {
        operacion = "";
        pantalla.value = "0";
    }

    // Añadir eventos a los botones
    document.getElementById('btn7').addEventListener('click', function() { agregarValor('7'); });
    document.getElementById('btn8').addEventListener('click', function() { agregarValor('8'); });
    document.getElementById('btn9').addEventListener('click', function() { agregarValor('9'); });
    document.getElementById('btnDiv').addEventListener('click', function() { agregarValor('/'); });
    document.getElementById('btn4').addEventListener('click', function() { agregarValor('4'); });
    document.getElementById('btn5').addEventListener('click', function() { agregarValor('5'); });
    document.getElementById('btn6').addEventListener('click', function() { agregarValor('6'); });
    document.getElementById('btnMul').addEventListener('click', function() { agregarValor('*'); });
    document.getElementById('btn1').addEventListener('click', function() { agregarValor('1'); });
    document.getElementById('btn2').addEventListener('click', function() { agregarValor('2'); });
    document.getElementById('btn3').addEventListener('click', function() { agregarValor('3'); });
    document.getElementById('btnMen').addEventListener('click', function() { agregarValor('-'); });
    document.getElementById('btn0').addEventListener('click', function() { agregarValor('0'); });
    document.getElementById('btnPunto').addEventListener('click', function() { agregarValor('.'); });
    document.getElementById('btnSum').addEventListener('click', function() { agregarValor('+'); });
    document.getElementById('btnClear').addEventListener('click', limpiarPantalla);
    document.getElementById('btnIgual').addEventListener('click', calcularResultado);
});


