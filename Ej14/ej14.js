function actualizarFechaYHora() {
    const fechaActual = new Date();

    // Primer formato
    const dia = String(fechaActual.getDate()).padStart(2, '0');
    const mes = String(fechaActual.getMonth() + 1).padStart(2, '0'); // Mes comienza en 0
    const anio = fechaActual.getFullYear();
    const fechaFormato1 = `Fecha: ${dia}/${mes}/${anio}`;
    //Segundo formato
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fechaFormato2 = `Hoy es ${fechaActual.toLocaleDateString('es-ES', opciones)}`;

    //Imprimir en html
    document.getElementById('fechaFormato1').innerText = fechaFormato1;
    document.getElementById('fechaFormato2').innerText = fechaFormato2;

    //Formato segundo a segundo
    const hora = String(fechaActual.getHours()).padStart(2, '0');
    const minutos = String(fechaActual.getMinutes()).padStart(2, '0');
    const segundos = String(fechaActual.getSeconds()).padStart(2, '0');
    const horaActual = `Hora actual: ${hora}:${minutos}:${segundos}`;

    document.getElementById('horaActual').innerText = horaActual;
}

actualizarFechaYHora();

setInterval(actualizarFechaYHora, 1000);


