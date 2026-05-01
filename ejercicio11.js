function calcularPromedio(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

function mostrarPromedio(nota1, nota2, nota3) {
    return "El promedio es: " + calcularPromedio(nota1, nota2, nota3);
}

console.log(mostrarPromedio(7, 8, 9));