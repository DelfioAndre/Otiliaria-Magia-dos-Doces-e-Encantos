let aberto = false

function menubar() {
    let menu = document.getElementById("menu")
    if (aberto) {
        aberto = false
        menu.style.display = "none"
    } else {
        menu.style.display = "block"
        aberto = true
    }
}


/*function menubar() {
    let menu = document.getElementById('menu')
    if (menu.style.display != 'none') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }
}*/
        // Função genérica para inicializar um slider
        function initSlider(containerId) {
            const container = document.getElementById(containerId);
            const slides = container.querySelector('.slides');
            const slide = container.querySelectorAll('.slide');
            const anterior = container.querySelector('.prev');
            const proximo = container.querySelector('.next');
            let index = 0;

            // Função para mostrar o slide
            function showSlide(i) {
                index = (i + slide.length) % slide.length;
                slides.style.transform = `translateX(-${index * 100}%)`;
            }

            // Botões de navegação
            anterior.addEventListener('click', () => {
                showSlide(index - 1);
                resetTimer();
            });

            proximo.addEventListener('click', () => {
                showSlide(index + 1);
                resetTimer();
            });

            // Transição automática
            let timer = setInterval(() => {
                showSlide(index + 1);
            }, 3000);

            // Resetar o temporizador após interação manual
            function resetTimer() {
                clearInterval(timer);
                timer = setInterval(() => {
                    showSlide(index + 1);
                }, 3000);
            }
        }

        // Inicializar os dois sliders
        initSlider('slider1');
        initSlider('slider2');
        initSlider('slider3');
        initSlider('slider4');