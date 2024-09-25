let posicaoX = 0;
        let direcao = 1; // 1 = para a direita, -1 = para a esquerda
        const circulo = document.getElementById('circulo');
        const containerLargura = window.innerWidth;
        const velocidade = 2; // Velocidade de movimento (px)

        function moverCirculo() {
            // Atualiza a posição do círculo
            posicaoX += direcao * velocidade;

            // Se atingir a borda direita, inverter a direção
            if (posicaoX + circulo.offsetWidth >= containerLargura) {
                direcao = -1;
            }

            // Se atingir a borda esquerda, inverter a direção
            if (posicaoX <= 0) {
                direcao = 1;
            }

            // Atualiza a posição do círculo
            circulo.style.left = posicaoX + 'px';
        }

        // Inicia a animação com o setInterval
        setInterval(moverCirculo, 10); // A cada 10ms, o círculo se move