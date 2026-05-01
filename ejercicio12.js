function convertirMinutosASegundos(minutos) {
    return minutos * 60;
}

function segundosEnDosHoras() {
    let minutos = 2 * 60;
    return convertirMinutosASegundos(minutos);
}

console.log(segundosEnDosHoras());