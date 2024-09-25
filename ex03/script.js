function validarFormulario() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;

    if (nome === "" || idade === "") {
        window.alert("Por favor, preencha todos os campos."); 
    }
    return true; 
}