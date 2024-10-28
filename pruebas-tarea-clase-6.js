function probarValidarCantidadIntegrantes() {
    console.assert(
        validarCantidadIntegrantes("") === "Este campo no puede estar vacío",
        "validarCantidadIntegrantes no validó que el campo no esté vacío"
    );

    console.assert(
        validarCantidadIntegrantes(0) === "La cantidad ingresada debe ser mayor a 0",
        "validarCantidadIntegrantes no validó que el número sea mayor a 0"
    );

    console.assert(
        validarCantidadIntegrantes(2) === "",
        "validarCantidadIntegrantes falló con un número válido"
    );
};

function probarValidarEdad(){
    console.assert(
        validarEdad(0) === "La edad ingresada debe ser mayor a 0",
        "validarEdad no validó que la edad sea mayor a 0"
    );

    console.assert(
        validarEdad(2.5) === "La edad no puede tener decimales",
        "validarEdad no validó que la edad no tenga decimales"
    );

    console.assert(
        validarEdad(2) === "",
        "validarEdad falló con una edad válida"
    );
};

function probarValidarSalario(){
    console.assert(
        validarSalario(0) === "El sueldo no puede ser 0 o menor",
        "validarSalario no validó que el salario no sea 0 o menor"
    );

    console.assert(
        validarSalario(123) === "",
        "validarSalario no funcionó con un salario correcto"
    );
};

probarValidarCantidadIntegrantes();
probarValidarEdad();
probarValidarSalario();
