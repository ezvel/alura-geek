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

const vaciarCamposFormularioProducto = () => {
    const url = document.getElementById("url-imagen");
    const nombre = document.getElementById("nombre-producto");
    const precio = document.getElementById("precio-producto");
    const descripcion = document.getElementById("descripcion-producto");

    url.value = "";
    nombre.value = "";
    precio.value = "";
    descripcion.value = "";
}