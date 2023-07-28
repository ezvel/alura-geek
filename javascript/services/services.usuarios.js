const leerUsuarios = async(datos) => {

    try {
        let res = await fetch("http://localhost:3000/administradores", {
            method: "GET"
        })

        if(res.ok) {
            let json = await res.json();
            return [json, datos];
        } else {
            throw {"status": res.status, "statusText": res.statusText}
        }

    } catch(err) {
        alert(`${err.status} ${err.statusText}`)
    }

}