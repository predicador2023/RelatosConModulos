// 🔎 Filtrar relatos según búsqueda
export function initBuscador() {
  const buscador = document.getElementById('buscador');

  buscador.addEventListener('input', () => {
    const termino = buscador.value.toLowerCase();
    const relatos = document.querySelectorAll('.relato');

    relatos.forEach(relato => {
      const titulo = relato.querySelector('h2').textContent.toLowerCase();
      relato.style.display = titulo.includes(termino) ? 'block' : 'none';
    });
  });
}
