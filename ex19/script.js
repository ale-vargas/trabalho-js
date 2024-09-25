const canvas = document.getElementById('desenhoCanvas');
        const ctx = canvas.getContext('2d');

        let desenhando = false;

        // Função para iniciar o desenho
        function iniciarDesenho(evento) {
            desenhando = true;
            desenhar(evento);
        }

        // Função para parar o desenho
        function pararDesenho() {
            desenhando = false;
            ctx.beginPath(); // Começa um novo caminho para o próximo desenho
        }

        // Função que captura os movimentos do mouse e desenha no canvas
        function desenhar(evento) {
            if (!desenhando) return;

            // Calcula as coordenadas do mouse dentro do canvas
            const rect = canvas.getBoundingClientRect();
            const x = evento.clientX - rect.left;
            const y = evento.clientY - rect.top;

            // Configurações do desenho (cor, espessura, etc.)
            ctx.lineWidth = 3;
            ctx.lineCap = 'round'; // Fim arredondado para a linha
            ctx.strokeStyle = 'black'; // Cor da linha

            // Desenha uma linha
            ctx.lineTo(x, y);
            ctx.stroke();

            // Começa um novo caminho a partir das coordenadas atuais
            ctx.beginPath();
            ctx.moveTo(x, y);
        }

        // Eventos para desenhar com o mouse
        canvas.addEventListener('mousedown', iniciarDesenho);
        canvas.addEventListener('mouseup', pararDesenho);
        canvas.addEventListener('mousemove', desenhar);