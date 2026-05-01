function calcularAreaRectangulo(base, altura) {
    let area = base * altura;
    return area;
}

let baseIngresada = Number(prompt("Ingresá la base del rectángulo:"));
let alturaIngresada = Number(prompt("Ingresá la altura del rectángulo:"));

let resultado = calcularAreaRectangulo(baseIngresada, alturaIngresada);

console.log("El área del rectángulo es: " + resultado);