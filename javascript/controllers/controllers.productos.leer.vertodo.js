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
        $producto__id.innerText = producto.id;

        $producto__header.appendChild($producto__imagen);
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

    });


    $productos.appendChild($fragmentStarWars);
    $productos.appendChild($fragmentConsolas);
    $productos.appendChild($fragmentDiversos);


});
