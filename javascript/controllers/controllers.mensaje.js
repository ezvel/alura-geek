const $formularioMensaje = document.getElementById("form-mensaje");

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