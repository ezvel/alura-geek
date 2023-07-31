const creaProducto = async(datos) => {
    const {url, categoria, nombre, precio, descripcion} = datos;
    
    try {
        const res = await fetch("http://localhost:3000/productos", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                "url": url,
                "categoria": categoria,
                "nombre": nombre,
                "precio": precio,
                "descripcion": descripcion
            })
        })
    
        if(res.ok) {
            return "Producto cargado exitosamente";
        } else {
            throw {
                status: res.status,
                statusText: res.statusText
            }
        }

    } catch(err) {
        return "Error al cargar el producto";
    }
}

const modificaProducto = async(datos) => {
    const {id, url, categoria, nombre, precio, descripcion} = datos;
    try {
        const res = await fetch("http://localhost:3000/productos/" + id, {
            method: "PUT",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                "id": id,
                "url": url,
                "categoria": categoria,
                "nombre": nombre,
                "precio": precio,
                "descripcion": descripcion
            })
        })
    
        if(res.ok) {
            return "Producto modificado exitosamente";
        } else {
            throw {
                status: res.status,
                statusText: res.statusText
            }
        } 
    } catch(err) {
        return "Error al modificar el producto";
    }
} 

const leerProductos = async() => {
    try {
        const res = await fetch("http://localhost:3000/productos", {
            method: "GET"
        });
    
        if(res.ok) {
            return res.json();
        } else {
            throw {
                status: res.status,
                statusText: res.statusText
            }
        }

    } catch(err) {
        return alert(`Error ${res.status}`);
    }
}


const leerProductosPorID = async(id) => {
    try {
        const res = await fetch("http://localhost:3000/productos/" + id, {
            method: "GET"
        });
    
        if(res.ok) {
            return res.json();
        } else {
            throw {
                status: res.status,
                statusText: res.statusText
            }
        }

    } catch(err) {
        return alert(`Error ${res.status}`);
    }
}

const eliminarProducto = async(id) => {
    const eliminar = confirm("¿Desea eliminar el producto?");

    if(eliminar) {
        try {
            const res = await fetch("http://localhost:3000/productos/" + id, {
                method: "DELETE",
                headers: {"Content-type": "application/json"}
            })
        
            if(res.ok) {
                return "Producto eliminado exitosamente";
            } else {
                throw {
                    status: res.status,
                    statusText: res.statusText
                }
            } 
        } catch(err) {
            return "Error al modificar el producto";
        }
    }
}