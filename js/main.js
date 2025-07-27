// 📢 Funciones para compartir
function compartirWhatsApp(titulo) {
  const texto = encodeURIComponent(`📖 "${titulo}" desde La Voz del Atril`);
  const url = encodeURIComponent(window.location.href);
  window.open(`https://wa.me/?text=${texto}%20${url}`, '_blank');
}

function compartirX(titulo) {
  const texto = encodeURIComponent(`📖 "${titulo}" desde La Voz del Atril`);
  const url = encodeURIComponent(window.location.href);
  window.open(`https://twitter.com/intent/tweet?text=${texto}&url=${url}`, '_blank');
}

function copiarURL() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    alert("📎 ¡Enlace copiado al portapapeles!");
  });
}

// 📥 Cargar relatos desde relatos.json
fetch('relatos.json')
  .then(response => response.json())
  .then(relatos => {
    relatos.forEach(relato => {
      const contenedor = document.createElement("div");
      contenedor.classList.add("relato");

      contenedor.innerHTML = `
        <h2>${relato.titulo}</h2>
        <img src="${relato.imagen}" alt="${relato.titulo}" class="imagen-relato">
        <div class="contenido" style="display: none;">
          <p>${relato.texto}</p>
        </div>
        <button class="boton-leer">Leer más</button>

        <div class="compartir">
          <button onclick="compartirWhatsApp('${relato.titulo}')">🟢 WhatsApp</button>
          <button onclick="compartirX('${relato.titulo}')">🔵 X</button>
          <button onclick="copiarURL()">📋 Copiar URL</button>
        </div>
      `;

      document.getElementById("contenedor-relatos").appendChild(contenedor);

      const botonLeer = contenedor.querySelector('.boton-leer');
      botonLeer.addEventListener('click', () => {
        toggleRelato(botonLeer);
      });
    });
  })
  .catch(error => {
    console.error("❌ Error al cargar relatos:", error);
  });

// 🧠 Función reutilizable para mostrar/ocultar contenido e imagen
function toggleRelato(boton) {
  const relato = boton.closest('.relato');
  const contenido = relato.querySelector('.contenido');
  const imagen = relato.querySelector('.imagen-relato');

  const estaVisible = contenido.style.display === 'block';

  if (!estaVisible) {
    contenido.style.display = 'block';
    imagen.classList.add('expandida');
    boton.textContent = 'Leer menos';
  } else {
    contenido.style.display = 'none';
    imagen.classList.remove('expandida');
    boton.textContent = 'Leer más';
  }
}
