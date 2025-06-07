//js do index prinicipal
// Array com os itens do carrossel (cursos e nomes)
const carouselItems = [
    { title: "Administração", image: "/img/administração.jpg" },
    { title: "Alimentos", image: "/img/alimentos.png" },
    { title: "Biotecnologia", image: "/img/biotecnologia.jpg" },
    { title: "Contabilidade", image: "/img/contabilidade.jpg" },
    { title: "Desenvolvimento de Sistemas", image: "/img/desenvolvimento de sistemas.jpg" },
    { title: "Edificações", image: "/img/edificações.jpg" },
    { title: "Eletromecânica", image: "/img/eletromecanica.jpg" },
    { title: "Enfermagem", image: "/img/enfermagem (1).jpg" },
    { title: "Informática", image: "/img/informatica.jpg" },
    { title: "Química", image: "/img/quimica.jpg" },
    { title: "Saúde Bucal", image: "/img/saude bocal.jpg" },
    { title: "Segurança do Trabalho", image: "/img/segurança do trabalho.png" },
    { title: "Técnico em Eletrônica", image: "/img/Técnico em Eletrônica.jpg" },
    { title: "Técnico em Eletrotécnica", image: "/img/Técnico em Eletrotécnica.jpg" },
    { title: "Técnico em Mecânica", image: "/img/Técnico em Mecânica.png" },
    { title: "Transações Imobiliárias", image: "/img/Transações Imobiliárias.jpg" }
];

let currentIndex = 0;

const titleElement = document.getElementById("carousel-title");
const imageElement = document.getElementById("carousel-image");
const dotLeft = document.getElementById("dot-left");
const dotActive = document.getElementById("dot-active");
const dotRight = document.getElementById("dot-right");

// Array com os dados das instituições (3 itens)
const institutions = [
    { name: "CEDUP Industrial Lages", image: "/img/colegio (1).jpeg" },
    { name: "CEDUP Renato Ramos da Silva", image: "/img/cedup.jpg" },
    { name: "IFSC (Instituto Federal de Santa Catarina)", image: "/img/ifsc.jpg" }
];

const institutionImage = document.getElementById("institution-image");

// Atualiza o carrossel (imagem e título dos cursos do nome)
function updateCarousel() {
    const currentItem = carouselItems[currentIndex];
    titleElement.textContent = currentItem.title;
    imageElement.src = currentItem.image;
    imageElement.alt = currentItem.title;
    resetTimerAnimation();
    updateDots();
    updateInstitutions();
}

// Atualiza os atributos dos dots 
function updateDots() {
    const n = carouselItems.length;
    dotLeft.setAttribute("data-index", (currentIndex - 1 + n) % n);
    dotActive.setAttribute("data-index", currentIndex);
    dotRight.setAttribute("data-index", (currentIndex + 1) % n);
}

// Reinicia a animação do timer na bolinha ativa
function resetTimerAnimation() {
    dotActive.classList.remove("active-dot");
    void dotActive.offsetWidth;
    dotActive.classList.add("active-dot");
}

// Avança para o próximo slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
}

// Retorna para imagfe anterior
function prevSlide() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
}

// Atualiza a seção de Instituições (usando currentIndex mod 3)
function updateInstitutions() {
    const instIndex = currentIndex % institutions.length;
    institutionImage.src = institutions[instIndex].image;
    institutionImage.alt = institutions[instIndex].name;

    // Atualiza o destaque nos nomes
    document.getElementById("inst-1").classList.remove("active-inst");
    document.getElementById("inst-2").classList.remove("active-inst");
    document.getElementById("inst-3").classList.remove("active-inst");
    document.getElementById("inst-" + (instIndex + 1)).classList.add("active-inst");
}

// Quando a animação do timer da bola feia ativa terminar, avança automaticamente
dotActive.addEventListener("animationend", () => {
    nextSlide();
});

// Inicia o carrosel
updateCarousel();