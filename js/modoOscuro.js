// 🌗 Alternancia de modo claro/oscuro
export function initModoOscuro() {
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;
  const temaContainer = document.querySelector('.tema-container');
  const solIcon = document.querySelector('.icon.sol');
  const lunaIcon = document.querySelector('.icon.luna');

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    solIcon.style.opacity = body.classList.contains('dark-mode') ? '0.3' : '1';
    lunaIcon.style.opacity = body.classList.contains('dark-mode') ? '1' : '0.3';

    temaContainer.style.transition = 'background-color 0.5s ease';
  });
}
