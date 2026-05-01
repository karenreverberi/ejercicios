function saludar(nombre, momento) {
    if (momento == "mañana") {
        return "¡Buenos días, " + nombre + "!";
    } else if (momento == "tarde") {
        return "¡Buenas tardes, " + nombre + "!";
    } else {
        return "¡Buenas noches, " + nombre + "!";
    }
}

console.log(saludar("Karen", "noche"));