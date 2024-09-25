function atualizarSubcategoria() {
    // Pegando a escolha do primeiro dropdown (categoria)
    const categoria = document.getElementById("categoria").value;

    // Pegando o segundo dropdown (subcategoria)
    const subcategoria = document.getElementById("subcategoria");

    // Limpando as opções atuais do segundo dropdown
    subcategoria.innerHTML = '<option value="">Selecione uma subcategoria</option>';

    // Criando um objeto com as subcategorias correspondentes
    const opcoes = {
        frutas: ["Maçã", "Banana", "Laranja"],
        legumes: ["Cenoura", "Batata", "Tomate"],
        bebidas: ["Água", "Refrigerante", "Suco"]
    };

    // Verificando se há subcategorias para a categoria selecionada
    if (categoria && opcoes[categoria]) {
        // Adicionando as novas opções dinamicamente
        opcoes[categoria].forEach(function(item) {
            const option = document.createElement("option");
            option.value = item.toLowerCase();
            option.textContent = item;
            subcategoria.appendChild(option);
        });
    }
}