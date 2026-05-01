function convertirADolares(pesos) {
    return pesos / 1000;
}

function sueldoFinal(sueldoPesos) {

    let impuestos = sueldoPesos * 10 / 100;
    let sueldoLimpio = sueldoPesos - impuestos;

    return convertirADolares(sueldoLimpio);
}

let sueldo = Number(prompt("Ingresá tu sueldo en pesos:"));

console.log("Te quedan U$D " + sueldoFinal(sueldo));