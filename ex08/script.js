let arrayElementos = [];

        function adicionarElemento() {
            // Obter o valor do input
            const novoElemento = document.getElementById("inputElemento").value;

            // Verificar se o input não está vazio
            if (novoElemento !== "") {
                // Adicionar o elemento ao array
                arrayElementos.push(novoElemento);

                // Atualizar a exibição da lista
                exibirElementos();

                // Limpar o campo de input
                document.getElementById("inputElemento").value = "";
            } else {
                alert("Por favor, insira um valor.");
            }
        }

        function exibirElementos() {
            // Obter a referência ao elemento <ul>
            const lista = document.getElementById("listaElementos");

            // Limpar a lista antes de atualizar
            lista.innerHTML = "";

            // Percorrer o array e criar um <li> para cada elemento
            arrayElementos.forEach(function(elemento) {
                const li = document.createElement("li");
                li.textContent = elemento;
                lista.appendChild(li);
            });
        }