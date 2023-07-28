const probarValidarEmail = () => {
    console.assert(
        validarEmail("") === "Este campo no puede estar vacío",
        "La función validarEmail no validó que se ingresó un campo vacío"
    );
    console.assert(
        validarEmail("shdhs*@gmail.com") === "El campo correo tiene que tener un formato válido",
        "La función validarEmail no validó que se ingresó un aterisco (*)"
    )
}

const probarValidarContrasena = () => {
    console.assert(
        validarPassword("") === "Este campo no puede estar vacío",
        "La función validarPassword no validó que se ingresó un campo vacío"
    );
    console.assert(
        validarPassword("sshdh") === "Este campo no puede tener menos de 8 caracteres",
        "La función validarPassword no validó que se ingresaron menos de 8 caracteres"
    );
    console.assert(
        validarPassword("sdas   sdsad") === "Este campo no puede tener espacios",
        "La función validarPassword no validó que se ingresaron espacios"
    )
}

probarValidarEmail();
probarValidarContrasena();


