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


const validarEmail = (email) => {
    if(email.toString().trim().length === 0) {
        return "Este campo no puede estar vacío";
    } else if (!/^[a-zA-Z0-9-_\.]+@[a-z]+(\.[a-z]{1,4}){1,2}$/.test(email)) {
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


const validarUrl = (url) => {
    if(url.toString().trim().length === 0) {
        return "Este campo no puede estar vacío";
    } else {
        return "";
    }
}


const validarPrecio = (precio) => {
    if(precio.toString().trim().length === 0) {
        return "Este campo no puede estar vacío";
    } 
    
    if(/^[0-9]+$/.test(precio)) {
        return "";
    } 
    
    if(!/^[0-9]+\.[0-9]+/.test(precio)) {
        return "Este campo debe tener solo números";
    }

    return "";
}


const validarDescripcion = (descripcion) => {
    if(descripcion.toString().trim().length === 0) {
        return "Este campo no puede estar vacío";
    } else if (descripcion.length > 150) {
        return "Este campo no puede ser mayor a 150 caracteres";
    } else {
        return "";
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


const validarFormularioAgregarProducto = (datos) => {
    const {url, categoria, nombre, precio, descripcion} = datos;

    const errorUrl = validarUrl(url);
    const errorNombre = validarNombre(nombre, 20);
    const errorPrecio = validarPrecio(precio);
    const errorDescripcion = validarDescripcion(descripcion);

    const errores = {
        url: errorUrl,
        nombreProducto: errorNombre,
        precio: errorPrecio,
        descripcion: errorDescripcion
    }

    const hayErrores = manejarErrores(errores) > 0;

    return hayErrores;

}


const manejarErrores = (errores) => {
    const errorNombre = errores.nombre;
    const errorMensaje = errores.mensaje;
    const errorEmail = errores.email;
    const errorPassword = errores.password;
    const errorNombreProducto = errores.nombreProducto;
    const errorUrl = errores.url
    const errorPrecio = errores.precio;
    const errorDescripcion = errores.descripcion;

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

    if(errorUrl) {
        const $url = document.getElementById("url-imagen");

        $url.value = "";
        $url.placeholder = errorUrl;
        $url.style.color = "red";
        $url.style.border = "1px solid red";

        $url.addEventListener("click", () => {
            $url.placeholder = "Url de la imagen";
            $url.style.color = "";
            $url.style.border = "";
        })
        
        cantidadErrores++;
    }

    if(errorNombreProducto) {
        const $nombre = document.getElementById("nombre-producto");

        $nombre.value = "";
        $nombre.placeholder = errorNombreProducto;
        $nombre.style.color = "red";
        $nombre.style.border = "1px solid red";

        $nombre.addEventListener("click", () => {
            $nombre.placeholder = "Nombre del producto";
            $nombre.style.color = "";
            $nombre.style.border = "";
        });
        
        cantidadErrores++;
    }

    if(errorPrecio) {
        const $precio = document.getElementById("precio-producto");

        $precio.value = "";
        $precio.placeholder = errorPrecio;
        $precio.style.color = "red";
        $precio.style.border = "1px solid red";

        $precio.addEventListener("click", () => {
            $precio.placeholder = "Precio del producto";
            $precio.style.color = "";
            $precio.style.border = "";
        });

        cantidadErrores++;
    }


    if(errorDescripcion) {
        const $descripcion = document.getElementById("descripcion-producto");

        $descripcion.value = "";
        $descripcion.placeholder = errorDescripcion;
        $descripcion.style.color = "red";
        $descripcion.style.border = "1px solid red";

        $descripcion.addEventListener("click", () => {
            $descripcion.placeholder = "Descripción del producto";
            $descripcion.style.color = "";
            $descripcion.style.border = "";
        });
        
        cantidadErrores++;   
    }

    return cantidadErrores;
}