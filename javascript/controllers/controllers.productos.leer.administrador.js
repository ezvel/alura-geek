document.addEventListener("DOMContentLoaded", async() => {
    const $productos = document.getElementById("productos");
    
    const productos = await leerProductos();

    const $fragmentStarWars = document.createDocumentFragment();
    const $fragmentConsolas = document.createDocumentFragment();
    const $fragmentDiversos = document.createDocumentFragment();

    productos.forEach((producto) => {
        const $producto = document.createElement("article");
        const $producto__header = document.createElement("header");
        const $producto__content = document.createElement("section");
        const $producto__imagen = document.createElement("img");
        const $producto__nombre = document.createElement("h2");
        const $producto__precio = document.createElement("p");
        const $producto__link = document.createElement("a");
        const $producto__id = document.createElement("p");
        const $producto__editar = document.createElement("a");
        const $producto__eliminar = document.createElement("button");

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
        $producto__editar.classList.add("producto__editar");
        $producto__editar.id = producto.id;
        $producto__eliminar.classList.add("producto__eliminar");
        $producto__eliminar.id = producto.id;

        $producto__imagen.src = producto.url;
        $producto__nombre.innerText = producto.nombre;
        $producto__precio.innerText = producto.precio;
        $producto__link.innerText = "Ver producto";
        $producto__link.href = "#";
        $producto__id.innerText = producto.id;
        $producto__editar.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" height="30" viewBox="0 -960 960 960" width="30"><path d="M180-180h44l443-443-44-44-443 443v44Zm614-486L666-794l42-42q17-17 42-17t42 17l44 44q17 17 17 42t-17 42l-42 42Zm-42 42L248-120H120v-128l504-504 128 128Zm-107-21-22-22 44 44-22-22Z"/></svg>';
        $producto__eliminar.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" height="30" viewBox="0 -960 960 960" width="30"><path d="M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z"/></svg>';
        $producto__editar.href="../../pages/modificar_producto.html?id=" + producto.id;

        $producto__header.appendChild($producto__imagen);
        $producto__header.appendChild($producto__editar);
        $producto__header.appendChild($producto__eliminar);
        $producto__content.appendChild($producto__nombre);
        $producto__content.appendChild($producto__precio);
        $producto__content.appendChild($producto__link);
        $producto__content.appendChild($producto__id);

        $producto.appendChild($producto__header);
        $producto.appendChild($producto__content);

        switch(producto.categoria) {
            case "star-wars": $fragmentStarWars.appendChild($producto);break;
            case "consolas": $fragmentConsolas.appendChild($producto);break;
            case "diversos": $fragmentDiversos.appendChild($producto);break;
        };

        $producto__eliminar.addEventListener("click", async() => {
            const respuesta = await eliminarProducto(producto.id);
        })

    });


    $productos.appendChild($fragmentStarWars);
    $productos.appendChild($fragmentConsolas);
    $productos.appendChild($fragmentDiversos);


});
