const validarUrl = (url) => {
    if(url.toString().trim().length === 0) {
        return "Este campo no puede estar vacío";
    } else {
        return "";
    }
}


const validarPrecio = (precio) => {
    if(precio.toString().trim().length === 0) {
        return "Este campo no puede estar vacío";
    } 
    
    if(/^[0-9]+$/.test(precio)) {
        return "";
    } 
    
    if(!/^[0-9]+\.[0-9]+/.test(precio)) {
        return "Este campo debe tener solo números";
    }

    return "";
}


const validarDescripcion = (descripcion) => {
    if(descripcion.toString().trim().length === 0) {
        return "Este campo no puede estar vacío";
    } else if (descripcion.length > 150) {
        return "Este campo no puede ser mayor a 150 caracteres";
    } else {
        return "";
    }
}


const validarFormularioAgregarProducto = (datos) => {
    const {url, categoria, nombre, precio, descripcion} = datos;

    const errorUrl = validarUrl(url);
    const errorNombre = validarNombre(nombre, 20);
    const errorPrecio = validarPrecio(precio);
    const errorDescripcion = validarDescripcion(descripcion);

    const errores = {
        url: errorUrl,
        nombreProducto: errorNombre,
        precio: errorPrecio,
        descripcion: errorDescripcion
    }

    const hayErrores = manejarErrores(errores) > 0;

    return hayErrores;

}


