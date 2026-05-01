function verificarParidad(numero) {

    if (numero % 2 === 0) {
        return "El número " + numero + " es par";
    } else {
        return "El número " + numero + " es impar";
    }

}

let numero = Number(prompt("Ingresá un número"));

console.log(verificarParidad(num));