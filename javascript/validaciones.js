const validarNombre = (nombre) => {
    if(nombre.toString().trim().length === 0) {
        return "Este campo no puede estar vacío";
    } else if (!/^[a-z\sáéíóúñ]+$/i.test(nombre)) {
        return "Este campo solo debe contener letras";
    } else if (nombre.length > 40) {
        return "Este campo no puede ser mayor a 40 caracteres";
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
    let {nombre, mensaje} = datos;
    
    const errorNombre = validarNombre(nombre);
    const errorMensaje = validarMensaje(mensaje);

    const errores = {
        nombre: errorNombre,
        mensaje: errorMensaje
    }

    const hayErrores = manejarErrores(errores) > 0;

    return hayErrores;
}

const manejarErrores = (errores) => {
    const errorNombre = errores.nombre;
    const errorMensaje = errores.mensaje;

    let cantidadErrores = 0;

    if(errorNombre) {
        const $nombre = document.querySelector(".form__nombre");

        $nombre.value = "";
        $nombre.placeholder = errorNombre;
        $nombre.style.color = "red";
        $nombre.style.borderColor = "red";

        $nombre.addEventListener("click", () => {
            $nombre.placeholder = "";
            $nombre.style.color = "";
            $nombre.style.borderColor = "";
        })

        cantidadErrores++;
    }

    if(errorMensaje) {
        const $mensaje = document.querySelector(".form__mensaje");

        $mensaje.value = "";
        $mensaje.placeholder = errorMensaje;
        $mensaje.style.color = "red";
        $mensaje.style.borderColor = "red";

        $mensaje.addEventListener("click", () => {
            $mensaje.placeholder = "Escribe tu mensaje";
            $mensaje.style.color = "";
            $mensaje.style.borderColor = "";
        })

        cantidadErrores++;
    }

    return cantidadErrores;

}