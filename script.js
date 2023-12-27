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
    document.getElementById("modal-check").src = botao.dataset.check;
    document.getElementById("modal-topo").innerText = botao.dataset.topo;
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


function updateImage() {
    var bannerImage1 = document.getElementById('bannerImage1');
    var bannerImage2 = document.getElementById('bannerImage2');
    var bannerImage3 = document.getElementById('bannerImage3');

    var screenWidth = window.innerWidth;

    if (screenWidth < 600) {  
        bannerImage1.src = 'img/header/bannerMobile1.png';
        bannerImage2.src = 'img/header/bannerMobile2.png';
        bannerImage3.src = 'img/header/bannerMobile3.png';
    } else if (screenWidth < 900) {  
        bannerImage1.src = 'img/header/bannerTablet1.png';
        bannerImage2.src = 'img/header/bannerTablet2.png';
        bannerImage3.src = 'img/header/bannerTablet3.png';
    } else {  
        bannerImage1.src = 'img/header/Banner1G.png'; 
        bannerImage2.src = 'img/header/Banner2G.png'; 
        bannerImage3.src = 'img/header/Banner3G.png'; 
    }
}


window.onload = updateImage;
window.onresize = updateImage;