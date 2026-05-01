function sumarRango(inicio, fin) {
    let suma = 0;

    for (let i = inicio; i <= fin; i++) {
        suma = suma + i;
    }

    return suma;
}

console.log(sumarRango(1, 4));