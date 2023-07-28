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
        const $email = document.getElementById("email")

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
        const $password = document.getElementById("password");

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