//ejercicio 1//
function calcularEdadCanina(edadHumana) {
    let edadPerro = edadHumana * 7;
    return edadPerro;
}

let edad = prompt("Ingresá una edad:");
let resultado = calcularEdadCanina(edad);

console.log(resultado);


//ejercicio 2//
function verificarParidad(numero) {

    if (numero % 2 === 0) {
        return "El número " + numero + " es par";
    } else {
        return "El número " + numero + " es impar";
    }

}

let numero = Number(prompt("Ingresá un número"));

console.log(verificarParidad(num));


//ejercicio 3//
function convertirTemperatura(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

let grados = Number(prompt("Ingresá grados Celsius:"));

let resultado = convertirTemperatura(grados);

console.log("La temperatura en Fahrenheit es: " + resultado);

