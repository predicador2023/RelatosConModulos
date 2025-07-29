import { renderRelato } from './renderRelato.js';

export function cargarRelatos() {
  fetch('relatos.json')
    .then(response => response.json())
    .then(relatos => {
      relatos.forEach(relato => {
        renderRelato(relato); // ✅ delegás todo a esta función modular
      });
    })
    .catch(error => {
      console.error("❌ Error al cargar relatos:", error);
    });
}
