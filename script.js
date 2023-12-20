let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % document.querySelectorAll('.carousel-image').length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + document.querySelectorAll('.carousel-image').length) % document.querySelectorAll('.carousel-image').length;
    updateCarousel();
}

function updateCarousel() {
    const imageContainer = document.getElementById('image-container');
    const slideWidth = document.querySelector('.carousel-image').clientWidth;
    imageContainer.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

function abrirModal(botao) {
    var modal = document.getElementById("modalProduto");
    document.getElementById("modal-titulo").innerText = botao.dataset.titulo;
    document.getElementById("modal-imagem").src = botao.dataset.imagem;
    document.getElementById("modal-descricao").innerText = botao.dataset.descricao;
    document.getElementById("modal-preco").innerText = botao.dataset.preco;
    modal.style.display = "block";
}

var botoesVerMais = document.querySelectorAll(".ver-mais");

botoesVerMais.forEach(function(botao) {
    botao.addEventListener("click", function() {
        abrirModal(botao);
    });
});

function fecharModal() {
    var modal = document.getElementById("modalProduto");
    modal.style.display = "none";
}
