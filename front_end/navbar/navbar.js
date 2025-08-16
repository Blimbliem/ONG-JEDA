document.addEventListener("DOMContentLoaded", function() {
  // Cria um container para a navbar
  const navbarContainer = document.createElement("div");
  navbarContainer.id = "navbar-container";
  document.body.prepend(navbarContainer);

  // Carrega o navbar.html
  fetch("navbar/navbar.html")
    .then(response => response.text())
    .then(data => {
      navbarContainer.innerHTML = data;

      // Configura menu mobile
      const menuToggle = document.getElementById("menu-toggle");
      const menu = document.getElementById("menu");
      menuToggle.addEventListener("click", () => {
        menu.classList.toggle("show");
      });
    })
    .catch(error => console.error("Erro ao carregar navbar:", error));
});
