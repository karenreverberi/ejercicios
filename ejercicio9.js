function repetirMensaje(texto, cantidad) {
    for (let i = 1; i <= cantidad; i++) {
        console.log(texto);
    }
}

let mensaje = prompt("Ingresá un mensaje:");
let veces = Number(prompt("¿Cuántas veces querés repetirlo?"));

repetirMensaje(mensaje, veces);