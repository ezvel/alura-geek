const $producto = document.querySelectorAll(".oculto");

let desktop = window.matchMedia("(min-width: 1024px)");


window.onresize = function() {    
    if(window.innerWidth >= 1024) {
        for(let i = 0; i < $producto.length; i++) {
            if($producto[i].classList.contains("oculto")) {
                $producto[i].classList.remove("oculto");
            }
        }
    } else {
        for(let i = 0; i < $producto.length; i++) {
            if(!$producto[i].classList.contains("oculto")) {
                $producto[i].classList.add("oculto");
            }
        }
    }
}