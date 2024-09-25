function corAleatoria() {
    const letras = '0123456789ABCDEF';
    let cor = '#';
    for (let i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
}

// Função que muda a cor de fundo com base na tecla pressionada
function mudarCor(event) {
    const tecla = event.key.toLowerCase(); // Pega a tecla pressionada em minúsculas

    // Condições para mudar a cor com base na tecla
    if (tecla === 'r') {
        document.body.style.backgroundColor = 'red';
    } else if (tecla === 'g') {
        document.body.style.backgroundColor = 'green';
    } else if (tecla === 'b') {
        document.body.style.backgroundColor = 'blue';
    } else {
        // Qualquer outra tecla gera uma cor aleatória
        document.body.style.backgroundColor = corAleatoria();
    }
}

// Adiciona um ouvinte de eventos de teclado ao documento
document.addEventListener('keydown', mudarCor);