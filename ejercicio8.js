function verificarEdad(anioNacimiento) {
    let actual = new Date().getFullYear();
    let edad = actual - anioNacimiento;

    if (edad >= 18) {
        return "Es mayor";
    } else {
        return "Es menor";
    }
}