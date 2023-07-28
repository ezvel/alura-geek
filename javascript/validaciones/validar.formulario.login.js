const validarEmail = (email) => {
    if(email.toString().trim().length === 0) {
        return "Este campo no puede estar vacío";
    } else if (!/^[a-zA-Z0-9-_\.]+@[a-z]+(\.[a-z]{1,4}){1,2}$/.test(email)) {
        return "El campo correo tiene que tener un formato válido";
    } else {
        return "";
    }
}


const validarPassword = (password) => {
    if(password.toString().trim().length === 0) {
        return "Este campo no puede estar vacío";
    } else if (password.toString().trim().length < 9) {
        return "Este campo no puede tener menos de 8 caracteres";
    } else if (/\s/.test(password)) {
        return "Este campo no puede tener espacios";
    } else {
        return  "";
    }
}

const validarFormularioLogin = (datos) => {
    const {email, password} = datos;

    
    const errorEmail = validarEmail(email);
    const errorPassword = validarPassword(password);

    const errores = {
        email: errorEmail,
        password: errorPassword
    }

    const hayErrores = manejarErrores(errores) > 0;

    return hayErrores;
}

const validarUsuario = async(datos) => {
    
    const usuariosBbddUsuarioLogin = await leerUsuarios(datos);

    const usuariosBbdd = await usuariosBbddUsuarioLogin[0];
    const usuarioLogin = await usuariosBbddUsuarioLogin[1];

    for(let i = 0; i < usuariosBbdd.length; i++) {
        if( (usuariosBbdd[i].email === usuarioLogin.email) && (usuariosBbdd[i].password === usuarioLogin.password)) {
            return true;
        } else {
            alert("Verifique sus datos");
        }   
    }
}