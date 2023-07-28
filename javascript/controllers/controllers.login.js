const $formularioLogin = document.getElementById("form-login");

$formularioLogin.addEventListener("submit", async(e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const datosAValidar = {
        email: email,
        password: password
    }


    const hayErrores = validarFormularioLogin(datosAValidar);

    
    if(!hayErrores) {
        datosValidados = {
            email: email.trim(),
            password: password.trim()
        }

        
        const existe = await validarUsuario(datosValidados);
        
        
        if(existe) {
            window.location.href = "../pages/administrador.html";
        }
    }
    
})