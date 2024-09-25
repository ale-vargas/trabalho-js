function abrirAba(evt, abaNome) {
    // Oculta todos os conteúdos das abas
    const tabcontents = document.querySelectorAll('.tabcontent');
    tabcontents.forEach(function(content) {
        content.classList.remove('active');
    });

    // Remove a classe "active" de todos os botões
    const tablinks = document.querySelectorAll('.tablinks');
    tablinks.forEach(function(link) {
        link.classList.remove('active');
    });

    // Exibe o conteúdo da aba clicada e adiciona "active" ao botão da aba
    document.getElementById(abaNome).classList.add('active');
    evt.currentTarget.classList.add('active');
}