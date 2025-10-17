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
