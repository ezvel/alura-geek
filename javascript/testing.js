const probarValidarNombre = () => {
    //Lo que no debe ir en el campo nombre
    console.assert(
        validarNombre("") === "Este campo no puede estar vacío",
        "La función validarNombre no validó que el campo está vacío"
    );

    console.assert(
        validarNombre(1) === "Este campo solo debe contener letras",
        "La función validarNombre no validó que se ingresó un número"
    );

    console.assert(
        validarNombre("*") === "Este campo solo debe contener letras",
        "La función validarNombre no validó que se ingresó un caracter especial"
    );

    console.assert(
        validarNombre("Pedro María 1") === "Este campo solo debe contener letras",
        "La función validar no validó que se ingresó un número junto a palabras y espacios"
    )

    console.assert(
        validarNombre("sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss", 40) === "Este campo no puede ser mayor a 40 caracteres",
        "El campo validarNombre no validó que se ingresó un campo mayor a 40 caracteres"
    )

    //Lo que sí debe ir
    console.assert(
        validarNombre("á") === "",
        "La función validarNombre no validó cómo correcto al caracter 'á' con acento"
    );

    console.assert(
        validarNombre("é") === "",
        "La función validarNombre no validó cómo correcto al caracter 'é' con acento"
    );

    console.assert(
        validarNombre("í") === "",
        "La función validarNombre no validó cómo correcto al caracter 'í' con acento"
    );

    console.assert(
        validarNombre("ó") === "",
        "La función validarNombre no validó cómo correcto al caracter 'ó' con acento"
    );

    console.assert(
        validarNombre("ú") === "",
        "La función validarNombre no validó cómo correcto al caracter 'ú' con acento"
    );

    console.assert(
        validarNombre("ñ") === "",
        "La función validarNombre no validó cómo correcto al caracter 'ñ'"
    );

    console.assert(
        validarNombre("   Pedro") === "",
        "La función validar no validó cómo correcto que se ingresará un espacio al principio, ya que con el trim() se formaterará correctamanete al nombre"
    );

    console.assert(
        validarNombre("Pedro   ") === "",
        "La función validar no validó cómo correcto que se ingresará un espacio al final, ya que con el trim() se formaterará correctamanete al nombre"
    )

    console.assert(
        validarNombre("Pedro María") === "",
        "La función validar no validó cómo correcto que se ingresará un espacio entre dos palabras"
    )

}

const probarValidarMensaje = () => {
    console.assert(
        validarMensaje("") === "Este campo no puede estar vacío",
        "La función validarMensaje no validó que se ingresó un campo vacío"
    );

    console.assert(
        validarMensaje("ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss") 
        === "Este campo no puede ser mayor a 120 caracteres",
        "La función validarMensaje no validó que se ingresó un campo con más de 120 caracteres"
    )
}

probarValidarNombre();
probarValidarMensaje();

