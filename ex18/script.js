// Obtém o vídeo pelo ID
const video = document.getElementById("meuVideo");

// Função para iniciar o vídeo
function playVideo() {
    video.play();
}

// Função para pausar o vídeo
function pauseVideo() {
    video.pause();
}

// Função para parar o vídeo (pausa e volta ao início)
function stopVideo() {
    video.pause();
    video.currentTime = 0; // Volta para o início
}