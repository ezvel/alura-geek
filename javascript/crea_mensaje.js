const creaMensaje = async(datos) => {
    const {nombre, mensaje} = datos;
    
    try {
        const res = await fetch("http://localhost:3000/mensajes", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                "nombre": nombre,
                "mensaje": mensaje
            })
        })
    
        if(res.ok) {
            location.reload();
        } else {
            throw {
                status: res.status,
                statusText: res.statusText
            }
        }

    } catch(err) {
        alert(`${err.status} ${err.statusText}`)
    }

}