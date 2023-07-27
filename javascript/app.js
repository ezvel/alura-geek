const $formularioMensaje = document.getElementById("form-mensaje");
const $formularioLogin = document.getElementById("form-login");

$formularioMensaje.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const mensaje = document.getElementById("mensaje").value;

    const datosAValidar = {
        nombre: nombre,
        mensaje: mensaje
    };

    const hayErrores = validarFormularioMensaje(datosAValidar);

    
    if(!hayErrores) {
        datosValidados = {
            nombre: nombre.trim(),
            mensaje: mensaje.trim()
        };

        creaMensaje(datosValidados);
        vaciarCamposFormularioMensaje();
    }
    
})


$formularioLogin.addEventListener("submit", async(e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const datosAValidar = {
        email: email,
        password: password
    }

    const hayErrores = validarFormularioLogin(datosAValidar);

    
    if(!hayErrores) {
        datosValidados = {
            email: email.trim(),
            password: password.trim()
        }

        const existe = await validarUsuario(datosValidados);
        
        if(existe) {
            window.location.href = "../pages/administrador.html";
        }
    }
    
})

