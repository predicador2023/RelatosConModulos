// asideRelatos.js
// 🪄 Módulo que carga los títulos en el aside desde localStorage

export function renderAsideRelatos() {
  const aside = document.getElementById("panel-secundario");
  const historias = JSON.parse(localStorage.getItem("historias")) || [];

  historias.forEach(historia => {
    const item = document.createElement("div");
    item.textContent = historia.titulo;
    aside.appendChild(item);
  });
}
