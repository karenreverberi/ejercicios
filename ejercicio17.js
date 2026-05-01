function contarA(palabra) {

    let contador = 0;

    for (let i = 0; i < palabra.length; i++) {

        if (palabra[i].toLowerCase() === "a") {
            contador++;
        }

    }

    return contador;
}

console.log(contarA("Banana"));