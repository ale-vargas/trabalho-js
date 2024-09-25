function validarEmail() {
    // Captura o valor do campo de entrada
    const email = document.getElementById('email').value;

    // Expressão regular para validar o formato de e-mail
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verifica se o formato do e-mail está correto
    if (regex.test(email)) {
        document.getElementById('resultado').innerHTML = '<p class="sucesso">Email válido!</p>';
    } else {
        document.getElementById('resultado').innerHTML = '<p class="erro">Formato de email inválido. Por favor, tente novamente.</p>';
    }
}