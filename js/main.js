// // 🌗 Alternancia de modo claro/oscuro
// const themeToggle = document.getElementById('themeToggle');
// const body = document.body;
// const temaContainer = document.querySelector('.tema-container');
// const solIcon = document.querySelector('.icon.sol');
// const lunaIcon = document.querySelector('.icon.luna');

// themeToggle.addEventListener('click', () => {
//   body.classList.toggle('dark-mode');

//   if (body.classList.contains('dark-mode')) {
//     solIcon.style.opacity = '0.3';
//     lunaIcon.style.opacity = '1';
//   } else {
//     solIcon.style.opacity = '1';
//     lunaIcon.style.opacity = '0.3';
//   }

//   temaContainer.style.transition = 'background-color 0.5s ease';
// });

// // 📢 Firma para redes
// const firma = " —La Voz del Atril 📣";

// // 📢 Funciones para compartir
// function compartirWhatsApp(titulo) {
//   const texto = encodeURIComponent(`📖 "${titulo}"${firma}`);
//   const url = encodeURIComponent(window.location.href);
//   window.open(`https://wa.me/?text=${texto}%20${url}`, '_blank');
// }

// function compartirX(titulo) {
//   const texto = encodeURIComponent(`📖 "${titulo}"${firma}`);
//   const url = encodeURIComponent(window.location.href);
//   window.open(`https://x.com/intent/tweet?text=${texto}&url=${url}`, '_blank');
// }

// function copiarURL() {
//   navigator.clipboard.writeText(window.location.href).then(() => {
//     alert("📎 ¡Enlace copiado al portapapeles!");
//   });
// }

// // 📥 Cargar relatos desde relatos.json
// fetch('relatos.json')
//   .then(response => response.json())
//   .then(relatos => {
//     relatos.forEach(relato => {
//       const contenedor = document.createElement("div");
//       contenedor.classList.add("relato");

//       contenedor.innerHTML = `
//         <h2>${relato.titulo}</h2>
//         <img src="${relato.imagen}" alt="${relato.titulo}" class="imagen-relato">
//         <div class="contenido" style="display: none;">
//           <p>${relato.texto}</p>
//         </div>
//         <button class="boton-leer">Leer más</button>

//         <div class="compartir">
//           <button onclick="compartirWhatsApp('${relato.titulo}')">🟢 WhatsApp</button>
//           <button onclick="compartirX('${relato.titulo}')">🔵 X</button>
//           <button onclick="copiarURL()">📋 Copiar URL</button>
//         </div>
//       `;

//       document.getElementById("contenedor-relatos").appendChild(contenedor);

//       const botonLeer = contenedor.querySelector('.boton-leer');
//       botonLeer.addEventListener('click', () => {
//         toggleRelato(botonLeer);
//       });
//     });
//   })
//   .catch(error => {
//     console.error("❌ Error al cargar relatos:", error);
//   });

// // 🧠 Mostrar/ocultar contenido
// function toggleRelato(boton) {
//   const relato = boton.closest('.relato');
//   const contenido = relato.querySelector('.contenido');
//   const imagen = relato.querySelector('.imagen-relato');
//   const estaVisible = contenido.style.display === 'block';

//   if (!estaVisible) {
//     contenido.style.display = 'block';
//     imagen.classList.add('expandida');
//     boton.textContent = 'Leer menos';
//   } else {
//     contenido.style.display = 'none';
//     imagen.classList.remove('expandida');
//     boton.textContent = 'Leer más';
//   }
// }

// // 🔎 Filtrar relatos según búsqueda
// const buscador = document.getElementById('buscador');

// buscador.addEventListener('input', () => {
//   const termino = buscador.value.toLowerCase();
//   const relatos = document.querySelectorAll('.relato');

//   relatos.forEach(relato => {
//     const titulo = relato.querySelector('h2').textContent.toLowerCase();
//     relato.style.display = titulo.includes(termino) ? 'block' : 'none';
//   });
// });
