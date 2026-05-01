function tablaMultiplicar(numero) {

    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }

}

let numero = Number(prompt("Ingresá un número:"));

tablaMultiplicar(numero);