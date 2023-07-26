const vaciarCamposFormularioMensaje = () => {
    const $nombre = document.getElementById("nombre");
    const $mensaje = document.getElementById("mensaje");

    $nombre.value = "";
    $mensaje.value = "";
}