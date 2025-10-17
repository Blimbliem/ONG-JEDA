// navbar/navbar.js
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("navbar-container");

  // Carrega o HTML da navbar
  fetch("/html/navbar.html")
  
    .then(response => response.text())
    .then(data => {
      console.log("Navbar carregada com sucesso!")
      container.innerHTML = data;

      // Depois que o HTML foi carregado, adiciona funcionalidade do toggle
      const toggle = container.querySelector(".navbar-toggle");
      const menu = container.querySelector(".navbar-menu");

      toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
      });
    })
    .catch(error => console.error("Erro ao carregar navbar:", error));
});

const track = document.querySelector(".carousel-track");
const cards = document.querySelectorAll(".card");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

let index = 0;

function getCardsPerView() {
  if (window.innerWidth <= 600) return 1;
  if (window.innerWidth <= 900) return 2;
  return 3;
}

function updateCarousel() {
  const cardWidth = cards[0].offsetWidth + 20; // largura + gap
  track.style.transform = `translateX(${-index * cardWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  const cardsPerView = getCardsPerView();
  if (index < cards.length - cardsPerView) {
    index++;
  } else {
    index = 0; // 🔄 volta pro início
  }
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  const cardsPerView = getCardsPerView();
  if (index > 0) {
    index--;
  } else {
    index = cards.length - cardsPerView; // 🔄 vai pro final
  }
  updateCarousel();
});

window.addEventListener("resize", () => {
  updateCarousel();
});

