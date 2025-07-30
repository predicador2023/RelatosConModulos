export function setupThemeToggle() {
  const toggle = document.getElementById('themeToggle');
  const body = document.body;
  const sol = document.querySelector('.sol');
  const luna = document.querySelector('.luna');

  function alternarTema() {
    const modoOscuro = body.classList.toggle('dark-mode');
    sol.style.display = modoOscuro ? 'none' : 'block';
    luna.style.display = modoOscuro ? 'block' : 'none';
  }

  toggle.addEventListener('click', alternarTema);
}
