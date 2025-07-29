// 📌 Lógica para encabezado fijo y comportamiento al hacer scroll

export function initHeaderFijo() {
  const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('fijo');
    } else {
      header.classList.remove('fijo');
    }
  });

  // 🌓 Podés complementar con una transición de fondo o cambio de opacidad
  // según el estado del modo oscuro o el scroll
}
