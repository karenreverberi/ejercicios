function calcularDescuento(precio, descuento) {
    let montoDescuento = precio * descuento / 100;
    let precioFinal = precio - montoDescuento;
    return precioFinal;
}

let precio = Number(prompt("Ingresá el precio del producto:"));
let descuento = Number(prompt("Ingresá el porcentaje de descuento:"));

let resultado = calcularDescuento(precio, descuento);

console.log("Precio final: $" + resultado);