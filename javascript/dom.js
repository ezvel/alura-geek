const vaciarCamposFormularioMensaje = () => {
    const $nombre = document.getElementById("nombre");
    const $mensaje = document.getElementById("mensaje");

    $nombre.value = "";
    $mensaje.value = "";
}

const vaciarCamposFormularioLogin = () => {
    const $email = document.getElementById("email");
    const $password = document.getElementById("password");

    $email.value = "";
    $password.value = "";
}