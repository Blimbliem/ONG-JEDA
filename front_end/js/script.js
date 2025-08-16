// Script para abrir/fechar menu mobile
const btn = document.getElementById('mobile-menu-button');
const menu = document.getElementById('mobile-menu');

if (btn) {
  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
}
