$formModificar = document.getElementById("form-modificar-producto");

document.addEventListener("DOMContentLoaded", async() => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const producto = await leerProductosPorID(id);

    $formModificar["url-imagen"].value = producto.url;
    $formModificar["categoria-producto"].value = producto.categoria;
    $formModificar["nombre-producto"].value = producto.nombre;
    $formModificar["precio-producto"].value = producto.precio;
    $formModificar["descripcion-producto"].value = producto.descripcion;
    
})

$formModificar.addEventListener("submit", async(e) => {
    e.preventDefault();

    const urlId = new URL(window.location);
    const id = urlId.searchParams.get("id");

    const url = document.getElementById("url-imagen").value;
    const categoria = document.getElementById("categoria-producto").value;
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
            id: id,
            url: url.trim(),
            categoria: categoria,
            nombre: nombre.trim(),
            precio: precio.toString().trim(),
            descripcion: descripcion.trim()
        };
    }

    const respuesta = await modificaProducto(datosValidados);
        
    vaciarCamposFormularioProducto();        
      
    window.location.href="../../pages/administrador.html"

})