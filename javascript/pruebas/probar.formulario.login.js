const probarValidarEmail = () => {
    console.assert(
        validarEmail("") === "Este campo no puede estar vacío",
        "La función validarEmail no validó que se ingresó un campo vacío"
    )
}

probarValidarEmail();



