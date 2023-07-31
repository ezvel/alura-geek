const $formularioAgregarProducto = document.getElementById("form-agregar-producto");

$formularioAgregarProducto.addEventListener("submit", async(e) => {
    e.preventDefault();

    const url = document.getElementById("url-imagen").value;
    const categoria = $formularioAgregarProducto.categoria.value;
    const nombre = document.getElementById("nombre-producto").value;
    const precio = document.getElementById("precio-producto").value;
    const descripcion = document.getElementById("descripcion-producto").value;

    const datosAValidar = {
        url: url,
        categoria: categoria,
        nombre: nombre,
        precio: precio,
        descripcion: descripcion
    }

    const hayErrores = validarFormularioProducto(datosAValidar);

    if(!hayErrores) {
        datosValidados = {
            url: url.trim(),
            categoria: categoria,
            nombre: nombre.trim(),
            precio: precio.toString().trim(),
            descripcion: descripcion.trim()
        };


        const respuesta = await creaProducto(datosValidados);
        

        vaciarCamposFormularioProducto();        
        

        document.addEventListener("DOMContentLoaded", () => {
            alert(respuesta);
        })

    }

})
