let saldo = 1000;

function consultarSaldo() {
    return saldo;
}

function retirarDinero(monto) {

    if (monto <= saldo) {
        saldo = saldo - monto;
        return "Retiro exitoso. Nuevo saldo: $" + saldo;
    } else {
        return "Saldo insuficiente";
    }

}

let monto = Number(prompt("¿Cuánto dinero querés retirar?"));

console.log(retirarDinero(monto));