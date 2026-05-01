function gritarFrase(texto) {
    return "¡" + texto.toUpperCase() + "!";
}

let frase = prompt("Ingresá una frase:");

console.log(gritarFrase(frase));