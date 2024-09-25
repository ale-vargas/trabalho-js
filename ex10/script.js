function atualizarDataHora() {
    // Obter a data e hora atual
    const agora = new Date();
    
    // Formatar data no padrão: DD/MM/YYYY
    const dia = agora.getDate().toString().padStart(2, '0');
    const mes = (agora.getMonth() + 1).toString().padStart(2, '0'); // Janeiro é mês 0
    const ano = agora.getFullYear();
    
    // Formatar hora no padrão: HH:MM:SS
    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');
    
    // Atualizar o conteúdo do elemento com a data e hora
    const dataHoraTexto = `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
    document.getElementById('dataHora').textContent = dataHoraTexto;
}

// Atualizar a data e hora a cada segundo
setInterval(atualizarDataHora, 1000);

// Chamada inicial para exibir a data/hora imediatamente
atualizarDataHora();