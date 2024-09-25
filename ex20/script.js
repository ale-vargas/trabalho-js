function play(userChoice) {
    const choices = ['pedra', 'papel', 'tesoura'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result;

    if (userChoice === computerChoice) {
        result = "Empate! Ambos escolheram " + userChoice + ".";
    } else if (
        (userChoice === 'pedra' && computerChoice === 'tesoura') ||
        (userChoice === 'papel' && computerChoice === 'pedra') ||
        (userChoice === 'tesoura' && computerChoice === 'papel')
    ) {
        result = "Você ganhou! " + userChoice + " vence " + computerChoice + ".";
    } else {
        result = "Você perdeu! " + computerChoice + " vence " + userChoice + ".";
    }

    document.getElementById("result").innerText = result;
}