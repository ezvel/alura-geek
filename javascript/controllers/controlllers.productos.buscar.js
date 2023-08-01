const $botonBuscar = document.getElementById("buscar-boton");

$botonBuscar.addEventListener("click", (e) => {
    e.preventDefault();

    const nombreProducto = document.getElementById("buscar-input").value;

    window.location.href = "../../pages/buscar_producto.html?nombre=" + nombreProducto;

})