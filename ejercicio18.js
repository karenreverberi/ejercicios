function mayorDeTres(num1, num2, num3) {

    let mayor = num1;

    if (num2 > mayor) {
        mayor = num2;
    }

    if (num3 > mayor) {
        mayor = num3;
    }

    return mayor;
}

let num1 = Number(prompt("Ingresá el primer número:"));
let num2 = Number(prompt("Ingresá el segundo número:"));
let num3 = Number(prompt("Ingresá el tercer número:"));

console.log("El mayor es: " + mayorDeTres(num1, num2, num3));