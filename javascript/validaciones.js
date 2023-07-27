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


const validarEmail = (email) => {
    if(email.toString().trim().length === 0) {
        return "Este campo no puede estar vacío";
    } else if (!/^[a-zA-Z0-9-_.]+@[a-z]+(\.[a-z]{1,4}){1,2}$/.test(email)) {
        return "El campo correo tiene que tener un formato válido";
    } else {
        return "";
    }
}


const validarPassword = (password) => {
    if(password.toString().trim().length === 0) {
        return "Este campo no puede estar vacío";
    } else if (password.toString().trim().length < 9) {
        return "Este campo no puede tener menos de 8 caracteres";
    } else if (/\s/.test(password)) {
        return "Este campo no puede tener espacios";
    } else {
        return  "";
    }
}


const validarFormularioMensaje = (datos) => {
    const {nombre, mensaje} = datos;
    
    const errorNombre = validarNombre(nombre);
    const errorMensaje = validarMensaje(mensaje);

    const errores = {
        nombre: errorNombre,
        mensaje: errorMensaje
    }

    const hayErrores = manejarErrores(errores) > 0;

    return hayErrores;
}


const validarFormularioLogin = (datos) => {
    const {email, password} = datos;

    const errorEmail = validarEmail(email);
    const errorPassword = validarPassword(password);

    const errores = {
        email: errorEmail,
        password: errorPassword
    }

    const hayErrores = manejarErrores(errores) > 0;

    return hayErrores;
}


const validarUsuario = async(datos) => {
    const usuariosBbddUsuarioLogin = await leerUsuarios(datos);

    const usuariosBbdd = await usuariosBbddUsuarioLogin[0];
    const usuarioLogin = await usuariosBbddUsuarioLogin[1];

    for(let i = 0; i < usuariosBbdd.length; i++) {
        if( (usuariosBbdd[i].email === usuarioLogin.email) && (usuariosBbdd[i].password === usuarioLogin.password)) {
            return true;
        } else {
            console.log("Verifique sus datos");
        }   
    }
}


const manejarErrores = (errores) => {
    const errorNombre = errores.nombre;
    const errorMensaje = errores.mensaje;
    const errorEmail = errores.email;
    const errorPassword = errores.password;

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

    if(errorEmail) {
        const $email = document.querySelector(".form-login__email");

        $email.value = "";
        $email.placeholder = errorEmail;
        $email.style.color = "red";
        $email.style.border = "1px solid red";

        $email.addEventListener("click", () => {
            $email.placeholder = "Escriba su correo electrónico";
            $email.style.color = "";
            $email.style.border = "";
        })

        cantidadErrores++;
    }

    if(errorPassword) {
        const $password = document.querySelector(".form-login__password");

        $password.value = "";
        $password.placeholder = errorPassword;
        $password.style.color = "red";
        $password.style.border = "1px solid red";

        $password.addEventListener("click", () => {
            $password.placeholder = "Escriba su contraseña";
            $password.style.color = "";
            $password.style.border = "";
        })

        cantidadErrores++;
    }

    return cantidadErrores;
}