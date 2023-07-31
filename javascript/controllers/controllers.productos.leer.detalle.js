$detalleProductoSolicitado = document.getElementById("detalle-producto__solicitado");
$detalleProductoSimilares = document.getElementById("detalle-producto__similares");


document.addEventListener("DOMContentLoaded", async() => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    const categoria = url.searchParams.get("categoria");

    const productoSolicitado = await leerProductosPorID(id);
    const productosSimilares = await leerProductos();

    //PRODUCTO SOLICITADO
    $productoImagen = document.createElement("img");
    $productoImagen.src = productoSolicitado.url;
    $productoNombre = document.createElement("h2");
    $productoNombre.innerText = productoSolicitado.nombre;
    $productoPrecio = document.createElement("p");
    $productoPrecio.innerText = "$ " + productoSolicitado.precio;
    $productoDescripcion = document.createElement("p");
    $productoDescripcion.innerText = productoSolicitado.descripcion;

    $productoImagen.classList.add("detalle-producto__imagen");
    $productoNombre.classList.add("detalle-producto__nombre");
    $productoPrecio.classList.add("detalle-producto__precio");
    $productoDescripcion.classList.add("detalle-producto__descripcion");

    $productoImagenContainer = document.createElement("div");
    $productoDetalleContainer = document.createElement("div");

    $productoImagenContainer.classList.add("detalle-producto__imagen-container");
    $productoDetalleContainer.classList.add("detalle-producto__detalle-container")


    $productoImagenContainer.appendChild($productoImagen);
    $productoDetalleContainer.appendChild($productoNombre);
    $productoDetalleContainer.appendChild($productoPrecio);
    $productoDetalleContainer.appendChild($productoDescripcion);

    $detalleProductoSolicitado.appendChild($productoImagenContainer);
    $detalleProductoSolicitado.appendChild($productoDetalleContainer);
    
    $productoImagenContainer.classList.add("col-12");
    $productoImagenContainer.classList.add("col-xs-6");
    $productoDetalleContainer.classList.add("col-12");
    $productoDetalleContainer.classList.add("col-xs-6");


    //PRODUCTOS SIMILARES
    $fragement = document.createDocumentFragment();
    productosSimilares.forEach((producto) => {
        if(producto.categoria === categoria && producto.id != id) {
            const $producto = document.createElement("article");
            const $producto__header = document.createElement("header");
            const $producto__content = document.createElement("section");
            const $producto__imagen = document.createElement("img");
            const $producto__nombre = document.createElement("h2");
            const $producto__precio = document.createElement("p");
            const $producto__link = document.createElement("a");

            $producto.classList.add("productos__producto");
            $producto.classList.add("producto");
            $producto.classList.add("col-12");
            $producto.classList.add("col-xs-6");
            $producto.classList.add("col-sm-3");
            $producto.classList.add("col-md-2");
            $producto__header.classList.add("producto__header");
            $producto__content.classList.add("producto__content");
            $producto__imagen.classList.add("producto__imagen")
            $producto__nombre.classList.add("producto__nombre");
            $producto__precio.classList.add("producto__precio");
            $producto__link.classList.add("producto__link");
        

            $producto__imagen.src = producto.url;
            $producto__nombre.innerText = producto.nombre;
            $producto__precio.innerText = "$ " + producto.precio;
            $producto__link.innerText = "Ver producto";
            $producto__link.href = `../../pages/detalle_producto.html?id=${producto.id}&categoria=${producto.categoria}`;

            $producto__header.appendChild($producto__imagen);
            $producto__content.appendChild($producto__nombre);
            $producto__content.appendChild($producto__precio);
            $producto__content.appendChild($producto__link);

            $producto.appendChild($producto__header);
            $producto.appendChild($producto__content);

            $fragement.appendChild($producto);
        }
    })      

    $detalleProductoSimilares.appendChild($fragement);

});
