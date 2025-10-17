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
});// navbar/navbar.js
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("navbar-container");

  // Carrega o HTML da navbar
  fetch("./html/navbar.html")
  
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

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');
  let currentIndex = 0;
  const visibleSlides = 3;

  function updateSlide(index) {
    const slideWidth = slides[0].getBoundingClientRect().width + 20;
    track.style.transform = `translateX(-${slideWidth * index}px)`;
  }

  nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex > slides.length - visibleSlides) {
      currentIndex = 0; // Volta pro início
    }
    updateSlide(currentIndex);
  });

  prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = slides.length - visibleSlides; // Vai pro final
    }
    updateSlide(currentIndex);
  });
});



  