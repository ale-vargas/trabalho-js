async function buscarPrevisao() {
    const latitude = -29.16832677816368;
    const longitude = -51.179374297450934;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`;

    document.getElementById('loading').style.display = 'block'; // Exibe mensagem de carregamento

    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();
        const temperaturas = dados.hourly.temperature_2m;
        const horas = dados.hourly.time;

        // Obtém a hora atual
        const agora = new Date();
        const horaAtual = agora.getHours();

        let html = "<h2>Previsão para as próximas horas:</h2>";
        for (let i = 0; i < 5; i++) {
            const horaPrevisao = horaAtual + i + 1;
            const temperatura = temperaturas[horaPrevisao];
            html += `<p>${horaPrevisao}:00 - ${temperatura}°C</p>`;
        }

        document.getElementById('weather').innerHTML = html;
    } catch (erro) {
        document.getElementById('weather').textContent = "Ocorreu um erro ao buscar os dados.";
        console.error(erro);
    } finally {
        document.getElementById('loading').style.display = 'none'; // Esconde mensagem de carregamento
    }
}