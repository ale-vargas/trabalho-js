function adicionarCaixaTexto() {
    // Criar um novo elemento input
    const novaCaixa = document.createElement("input");

    // Definir o tipo e classe para estilização
    novaCaixa.type = "text";
    novaCaixa.className = "caixa-texto";

    // Obter o contêiner onde as caixas de texto serão adicionadas
    const container = document.getElementById("caixasDeTexto");

    // Adicionar a nova caixa de texto ao contêiner
    container.appendChild(novaCaixa);
}