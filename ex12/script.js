function salvarTexto() {
    const texto = document.getElementById('texto').value;
    if (texto) {
        localStorage.setItem('textoSalvo', texto); // Salva o texto no localStorage
        document.getElementById('mensagem').textContent = 'Texto salvo com sucesso!';
    } else {
        document.getElementById('mensagem').textContent = 'Por favor, insira algum texto.';
    }
}

// Função para recuperar o texto salvo ao carregar a página
window.onload = function() {
    const textoSalvo = localStorage.getItem('textoSalvo');
    if (textoSalvo) {
        document.getElementById('texto').value = textoSalvo; // Preenche a textarea com o texto salvo
        document.getElementById('mensagem').textContent = 'Texto recuperado com sucesso!';
    }
}