// Função para aumentar o tamanho da fonte
function aumentarFonte() {
    const texto = document.getElementById('texto');
    let tamanhoFonte = window.getComputedStyle(texto, null).getPropertyValue('font-size');
    tamanhoFonte = parseFloat(tamanhoFonte); // Converter o valor para número
    texto.style.fontSize = (tamanhoFonte + 2) + 'px'; // Aumenta o tamanho da fonte em 2px
}

// Função para diminuir o tamanho da fonte
function diminuirFonte() {
    const texto = document.getElementById('texto');
    let tamanhoFonte = window.getComputedStyle(texto, null).getPropertyValue('font-size');
    tamanhoFonte = parseFloat(tamanhoFonte); // Converter o valor para número
    texto.style.fontSize = (tamanhoFonte - 2) + 'px'; // Diminui o tamanho da fonte em 2px
}