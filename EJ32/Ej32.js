document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario');
    const nombreInput = document.getElementById('nombre');
    const direccionInput = document.getElementById('direccion');
    const telefonoInput = document.getElementById('telefono');
    const dniInput = document.getElementById('dni');
    const correoElectronicoInput = document.getElementById('correoElectronico');
    const localidadInput = document.getElementById('localidad');
    const provinciaInput = document.getElementById('provincia');

    const errorNombre = document.getElementById('error-nombre');
    const errorDireccion = document.getElementById('error-direccion');
    const errorTelefono = document.getElementById('error-telefono');
    const errorDni = document.getElementById('error-dni');
    const errorCorreoElectronico = document.getElementById('error-correoElectronico');
    const errorLocalidad = document.getElementById('error-localidad');

    // Expresiones regulares para validar los campos
    const regexNombre = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/; // Solo letras y espacios
    const regexDireccion = /^[A-Za-z0-9\s,.-]+$/; // Dirección con números, letras y caracteres especiales
    const regexTelefono = /^[0-9]{9}$/; // Teléfono con 9 dígitos
    const regexDni = /^[0-9]{8}[A-Za-z]$/; // DNI español (8 dígitos + letra)
    const regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Correo electrónico
    const regexLocalidad = /^[A-Za-z\s]+$/; // Solo letras y espacios

    // Función para validar el campo y mostrar el error
    const validarCampo = (input, regex, errorDiv) => {
        if (!regex.test(input.value)) {
            input.classList.add('error');
            errorDiv.textContent = 'Dato erroneo';
        } else {
            input.classList.remove('error');
        }
    };

    // Eventos para validación mientras el usuario escribe
    nombreInput.addEventListener('input', () => validarCampo(nombreInput, regexNombre, errorNombre));
    direccionInput.addEventListener('input', () => validarCampo(direccionInput, regexDireccion, errorDireccion));
    telefonoInput.addEventListener('input', () => validarCampo(telefonoInput, regexTelefono, errorTelefono));
    dniInput.addEventListener('input', () => validarCampo(dniInput, regexDni, errorDni));
    correoElectronicoInput.addEventListener('input', () => validarCampo(correoElectronicoInput, regexCorreo, errorCorreoElectronico));
    localidadInput.addEventListener('input', () => validarCampo(localidadInput, regexLocalidad, errorLocalidad));

    // Validación al enviar el formulario
    formulario.addEventListener('submit', (event) => {
        let formValid = true;

        // Recorremos todos los campos para verificar si están correctos
        [nombreInput, direccionInput, telefonoInput, dniInput, correoElectronicoInput, localidadInput].forEach((input, index) => {
            const regexArray = [regexNombre, regexDireccion, regexTelefono, regexDni, regexCorreo, regexLocalidad];
            const errorDivArray = [errorNombre, errorDireccion, errorTelefono, errorDni, errorCorreoElectronico, errorLocalidad];
            
            if (!regexArray[index].test(input.value)) {
                formValid = false;
                input.classList.add('error');
                errorDivArray[index].textContent = 'Dato erroneo';
                errorDivArray[index].style.display = 'block';
            } else {
                input.classList.remove('error');
                errorDivArray[index].style.display = 'none';
            }
        });

        // Si el formulario no es válido, prevenimos el envío
        if (!formValid) {
            event.preventDefault();
        }
    });
});
