const slides = document.querySelectorAll('.slide');
let index = 0;

function autoSlide() {
    // Remover 'active' do slide atual e adicionar 'exit' para movimento lateral
    slides[index].classList.remove('active');
    slides[index].classList.add('exit');

    // Avançar para o próximo slide
    index++;
    if (index >= slides.length) {
        index = 0;
    }

    // Adicionar 'active' ao próximo slide e remover 'exit' de slides antigos
    slides[index].classList.add('active');
    slides.forEach(slide => slide.classList.remove('exit'));
}


// Troca de slide a cada 3 segundos
setInterval(autoSlide, 4000);
