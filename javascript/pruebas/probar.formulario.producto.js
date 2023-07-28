const probarValidarNombreProducto = () => {
    //Lo que no debe ir en el campo nombre
    console.assert(
        validarNombre("", 20) === "Este campo no puede estar vacío",
        "La función validarNombre no validó que el campo está vacío"
    );

    console.assert(
        validarNombre(1, 20) === "Este campo solo debe contener letras",
        "La función validarNombre no validó que se ingresó un número"
    );

    console.assert(
        validarNombre("*", 20) === "Este campo solo debe contener letras",
        "La función validarNombre no validó que se ingresó un caracter especial"
    );

    console.assert(
        validarNombre("Pedro María 1", 20) === "Este campo solo debe contener letras",
        "La función validar no validó que se ingresó un número junto a palabras y espacios"
    )
        /*
    console.assert(
        validarNombre("sssssssssssssssssssssssssssss", 20) === "Este campo no puede ser mayor a 40 caracteres",
        "El campo validarNombre no validó que se ingresó un campo mayor a 20 caracteres"
    )*/

    //Lo que sí debe ir
    console.assert(
        validarNombre("á", 20) === "",
        "La función validarNombre no validó cómo correcto al caracter 'á' con acento"
    );

    console.assert(
        validarNombre("é", 20) === "",
        "La función validarNombre no validó cómo correcto al caracter 'é' con acento"
    );

    console.assert(
        validarNombre("í", 20) === "",
        "La función validarNombre no validó cómo correcto al caracter 'í' con acento"
    );

    console.assert(
        validarNombre("ó", 20) === "",
        "La función validarNombre no validó cómo correcto al caracter 'ó' con acento"
    );

    console.assert(
        validarNombre("ú", 20) === "",
        "La función validarNombre no validó cómo correcto al caracter 'ú' con acento"
    );

    console.assert(
        validarNombre("ñ", 20) === "",
        "La función validarNombre no validó cómo correcto al caracter 'ñ'"
    );

    console.assert(
        validarNombre("   Pedro", 20) === "",
        "La función validar no validó cómo correcto que se ingresará un espacio al principio, ya que con el trim() se formaterará correctamanete al nombre"
    );

    console.assert(
        validarNombre("Pedro   ", 20) === "",
        "La función validar no validó cómo correcto que se ingresará un espacio al final, ya que con el trim() se formaterará correctamanete al nombre"
    )

    console.assert(
        validarNombre("Pedro María", 20) === "",
        "La función validar no validó cómo correcto que se ingresará un espacio entre dos palabras"
    )

}


const probarValidarUrl = () => {
    console.assert(
        validarUrl("") === "Este campo no puede estar vacío",
        "La función validarUrl no validó que se ingresó un campo vacío"
    );
    console.assert(
        validarUrl("sadsad1321123") === "",
        "La función validarUrl no validó que se ingresaron correctamente los datos"
    );
}


const probarValidarPrecio = () => {
    console.assert(
        validarPrecio("") === "Este campo no puede estar vacío",
        "La función validarPrecio no validó que se ingresó un campo vacío"
    );
    console.assert(
        validarPrecio(2000) === "",
        "La función validarPrecio no notó que se ingresó correctamente el precio"
    );
    console.assert(
        validarPrecio(2000.50) === "",
        "La función validarPrecio no notó que se ingresó correctamente el precio"
    );
    console.assert(
        validarPrecio(2000,50) === "",
        "La función validarPrecio no notó que se ingresó una coma en el precio(,)"
    )
    console.assert(
        validarPrecio(2000*50) === "",
        "La función validarPrecio no notó que se ingresó una aterisco en el precio(*)"
    )
}


const probarValidarDescripcion = () => {
    console.assert(
        validarDescripcion("") === "Este campo no puede estar vacío",
        "La función validarDescripcion no validó que se ingresó un campo vacío"
    );
    console.assert(
        validarDescripcion("sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss") === "Este campo no puede ser mayor a 150 caracteres",
        "La función validarDescripción no validó que se ingresaron más de 150 caracteres" 
    )
    console.assert(
        validarDescripcion("Soy una descripción correcta") === "",
        "La función validarDescripcion no validó que se ingresó la decripción correctamente"
    );
}


probarValidarNombreProducto();
probarValidarUrl();
probarValidarPrecio();
probarValidarDescripcion();