// Para integrantes y cálculos de edad
const integrantesFamilia = document.querySelector('#integrantes-familia');
const cantidadIntegrantes = document.querySelector('#cantidad-integrantes');
const $botonIngresar = document.querySelector('#crear-labels');
const $botonCalcularEdades = document.createElement('button');
const resultadosEdades = document.querySelector('#resultados-edades');
const $botonLimpiar = document.createElement('button');

function validarCantidadIntegrantes(cantidadIntegrantes){
    if (cantidadIntegrantes === ""){
        return "Este campo no puede estar vacío";
    };

    const cantidad = Number(cantidadIntegrantes);

    if(cantidad <= 0){
        return "La cantidad ingresada debe ser mayor a 0";
    };

    return "";
};

function validarEdad(edad){
    if(edad <= 0){
        return "La edad ingresada debe ser mayor a 0";
    };

    if(edad % 1 !== 0){
        return "La edad no puede tener decimales";
    };
    return "";
};

function validarSalario(salario){
    if(salario <= 0){
        return "El sueldo no puede ser 0 o menor";
    };

    return "";
};

function calcularPromedio(arr) {
    let contador = 0;
    let totalElementos = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "") {
            contador += Number(arr[i]);
            totalElementos++;
        };
    };
    return contador / totalElementos;
};

function calcularMasChico(arr) {
    let chico = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (chico < arr[i] && arr[i] !== "") {
            chico = arr[i];
        };
    };
    return chico;
};

function calcularMasGrande(arr) {
    let grande = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (grande > arr[i] && arr[i] !== "") {
            grande = arr[i];
        };
    };
    return grande;
};

$botonIngresar.onclick = function () {
    cantidadIntegrantes.innerHTML = '';

    for (let i = 0; i < integrantesFamilia.value; i++) {
        let labelFamilia = document.createElement('label');
        let inputFamilia = document.createElement('input');

        labelFamilia.textContent = `Integrante ${i + 1}`;
        inputFamilia.setAttribute('type', 'number');
        inputFamilia.setAttribute('placeholder', 'Edad');
        inputFamilia.setAttribute('class', 'valores-edades')

        cantidadIntegrantes.appendChild(labelFamilia);
        cantidadIntegrantes.appendChild(inputFamilia);
        cantidadIntegrantes.appendChild(document.createElement('br'));
    };

    cantidadIntegrantes.appendChild($botonCalcularEdades);
    $botonCalcularEdades.textContent = "Calcular";

    cantidadIntegrantes.appendChild($botonLimpiar);
    $botonLimpiar.textContent = 'Empezar de nuevo';

    return false;
};


$botonCalcularEdades.onclick = function () {
    let valoresEdades = document.querySelectorAll('.valores-edades');
    let todasLasEdades = calcularPromedio(Array.from(valoresEdades, valores => valores.value));
    let edadMasChica = calcularMasChico(Array.from(valoresEdades, valores => valores.value));
    let edadMasGrande = calcularMasGrande(Array.from(valoresEdades, valores => valores.value));

    resultadosEdades.textContent = `La edad más chica es ${edadMasChica}. La edad más grande es ${edadMasGrande}. 
    El promedio de edad del grupo familiar es ${todasLasEdades}`;

    return false;
};

$botonLimpiar.onclick = function () {
    cantidadIntegrantes.innerHTML = '';
    resultadosEdades.textContent = '';
    integrantesFamilia.value = '';
};


//Para agregar labels y calcular salarios

const $botonAgregar = document.querySelector('#agregar-campos');
const $botonQuitar = document.querySelector('#quitar-campos');
const labelsSalario = document.querySelector('#labels-salario');
const $botonCalcularSalario = document.querySelector('#calcular-salario');
const resultadosSalario = document.querySelector('#resultados-salario');

let contadorIntegrante = 0;

$botonAgregar.onclick = function () {
    contadorIntegrante += 1;
    let labelSalario = document.createElement('label');
    let inputSalario = document.createElement('input');
    let saltoLinea = document.createElement('br');
    labelSalario.textContent = `Ingrese el salario anual del integrante ${contadorIntegrante}`;

    inputSalario.setAttribute('type', 'number');
    inputSalario.setAttribute('placeholder', 'Salario Anual');
    inputSalario.setAttribute('class', 'valores-salarios');

    labelsSalario.appendChild(labelSalario);
    labelsSalario.appendChild(inputSalario);
    labelsSalario.appendChild(saltoLinea);
};

$botonQuitar.onclick = function () {
    if (labelsSalario.children.length > 0) {
        labelsSalario.removeChild(labelsSalario.lastElementChild);
        labelsSalario.removeChild(labelsSalario.lastElementChild);
        labelsSalario.removeChild(labelsSalario.lastElementChild);

        contadorIntegrante -= 1;

        if (labelsSalario.children.length === 0) {
            contadorIntegrante = 0;
        };
    };

    resultadosSalario.textContent = '';
};

$botonCalcularSalario.onclick = function () {
    let valoresSalarios = document.querySelectorAll('.valores-salarios');
    let promedioSalariosAnuales = calcularPromedio(Array.from(valoresSalarios, valores => valores.value));
    let salarioMasGrande = calcularMasGrande(Array.from(valoresSalarios, valores => valores.value));
    let salarioMasChico = calcularMasChico(Array.from(valoresSalarios, valores => valores.value));
    let promedioSalariosMensual = promedioSalariosAnuales / 12;

    resultadosSalario.textContent = `El salario anual promedio es ${promedioSalariosAnuales}. 
    El salario más grande es ${salarioMasGrande}. El salario más chico es ${salarioMasChico}. El salario promedio
    mensual es ${promedioSalariosMensual}`;

    return false;
};

