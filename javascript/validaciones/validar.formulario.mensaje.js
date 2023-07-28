const validarNombre = (nombre, max) => {
    if(nombre.toString().trim().length === 0) {
        return "Este campo no puede estar vacío";
    } else if (!/^[a-z\sáéíóúñ]+$/i.test(nombre)) {
        return "Este campo solo debe contener letras";
    } else if (nombre.length > max) {
        return "Este campo no puede ser mayor a " + max + " caracteres";
    } else {
        return "";
    }
}

const validarMensaje = (mensaje) => {
    if(mensaje.toString().trim().length === 0) {
        return "Este campo no puede estar vacío";
    } else if (mensaje.length > 120) {
        return "Este campo no puede ser mayor a 120 caracteres";
    }
}

const validarFormularioMensaje = (datos) => {
    const {nombre, mensaje} = datos;
    
    const errorNombre = validarNombre(nombre, 40);
    const errorMensaje = validarMensaje(mensaje);

    const errores = {
        nombre: errorNombre,
        mensaje: errorMensaje
    }

    const hayErrores = manejarErrores(errores) > 0;

    return hayErrores;
}