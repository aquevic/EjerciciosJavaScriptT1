let entradaActual = '';
let operacion = '';
let valorMemoria = 0;

function agregarNumero(numero) {
    entradaActual += numero.toString();
    actualizarCalculadora();
}

function establecerOperacion(op) {
    if (entradaActual === '') return;
    if (operacion !== '') calcularResultado();
    operacion = op;
    entradaActual += ` ${operacion} `;
    actualizarCalculadora();
}

function calcularResultado() {
    if (entradaActual === '') return;
    try {
        const resultado = eval(entradaActual.replace(/x/g, '*'));
        entradaActual = resultado.toString();
        actualizarCalculadora();
        operacion = '';
    } catch {
        entradaActual = 'Error';
        actualizarCalculadora();
    }
}

function actualizarCalculadora() {
    document.getElementById('calculadora').value = entradaActual;
}

function guardarMemoria() {
    valorMemoria = parseFloat(entradaActual);
    entradaActual = '';
    actualizarCalculadora();
}

function recuperarMemoria() {
    if (valorMemoria !== 0) {
        entradaActual = valorMemoria.toString();
        actualizarCalculadora();
    }
}

function borrarMemoria() {
    valorMemoria = 0;
}

function mostrarLupa() {
    if (entradaActual) {
        alert(`Número: ${entradaActual}`);
    }
}
