function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >=25 && imc <30) {
        return'Acima do peso';
    } else if (imc >=30 && imc <40) {
        return'Obeso';
    } else {
        return'Obesidade grave';
    }
    
}

function main () {
const peso = 73.5;
const altura = 1.79;

const imc = calcularImc(peso, altura);
console.log(classificarImc);
}

main();

function calcularMedia(nota1, nota2) {
    const media = (nota1 + nota2) / 2;
}

console.log(calcularMedia(5, 5));