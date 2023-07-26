const $formularioMensaje = document.getElementById("form-mensaje");

$formularioMensaje.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const mensaje = document.getElementById("mensaje").value;

    const datos = {
        nombre: nombre,
        mensaje: mensaje
    }

    const hayErrores = validarFormularioMensaje(datos);

    
    if(!hayErrores) {
        creaMensaje(datos);
        vaciarCamposFormularioMensaje();
    }
    
})


