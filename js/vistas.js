// 🗂️ Lógica para gestión de vistas o navegación
// Este módulo puede servir para:
// - Mostrar una vista específica desde el hash en la URL
// - Ocultar/mostrar secciones como "Inicio", "Relatos", "Acerca de", etc.

export function cambiarVista(vistaId) {
  const vistas = document.querySelectorAll('.vista');
  vistas.forEach(vista => {
    vista.style.display = vista.id === vistaId ? 'block' : 'none';
  });
}

// 📍 Detectar hash en la URL y actualizar la vista
export function initVistas() {
  window.addEventListener('hashchange', () => {
    const vistaId = location.hash.replace('#', '');
    cambiarVista(vistaId);
  });

  // Vista inicial según el hash al cargar
  const vistaInicial = location.hash.replace('#', '') || 'inicio';
  cambiarVista(vistaInicial);
}
