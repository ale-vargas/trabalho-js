function calcular(operacao) {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    let resultado;

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    switch(operacao) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            if (numero2 === 0) {
                alert("Divisão por zero não é permitida.");
                return;
            }
            resultado = numero1 / numero2;
            break;
    }

    document.getElementById('resultado').innerText = "Resultado: " + resultado;
}