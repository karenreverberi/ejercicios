function validarUsuario(usuario, contraseña) {

    if (usuario === "admin" && contraseña === "1234") {
        return true;
    } else {
        return false;
    }

}

let usuario = prompt("Ingresá usuario:");
let contraseña = prompt("Ingresá contraseña:");

if (validarUsuario(usuario, contraseña)) {
    console.log("Acceso concedido");
} else {
    console.log("Acceso denegado");
}