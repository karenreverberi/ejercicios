function generarEmail(nombre, apellido) {

    return nombre.toLowerCase() + "." + apellido.toLowerCase() + "@utnaulachacabuco.com";

}

let nombre = prompt("Ingresá tu nombre:");
let apellido = prompt("Ingresá tu apellido:");

console.log(generarEmail(nombre, apellido));