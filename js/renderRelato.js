import { compartirWhatsApp, compartirX, copiarURL } from './compartir.js';
import { toggleRelato } from './toggleRelato.js';

export function renderRelato(relato) {
  const contenedor = document.createElement("div");
  contenedor.classList.add("relato");

  // Título
  const titulo = document.createElement("h2");
  titulo.textContent = relato.titulo;
  contenedor.appendChild(titulo);

  // Imagen
  const imagen = document.createElement("img");
  imagen.src = relato.imagen;
  imagen.alt = relato.titulo;
  imagen.classList.add("imagen-relato");
  contenedor.appendChild(imagen);

  // Texto oculto
  const contenido = document.createElement("div");
  contenido.classList.add("contenido");
  contenido.style.display = "none";
  contenido.innerHTML = `<p>${relato.texto}</p>`;
  contenedor.appendChild(contenido);

  // Botón leer más
  const botonLeer = document.createElement("button");
  botonLeer.textContent = "Leer más";
  botonLeer.classList.add("boton-leer");
  botonLeer.addEventListener("click", () => {
  toggleRelato(contenedor); // le pasamos todo el bloque del relato
});

  contenedor.appendChild(botonLeer);

  // Botones de compartir
  const compartir = document.createElement("div");
  compartir.classList.add("compartir");

  const btnWapp = document.createElement("button");
  btnWapp.textContent = "🟢 WhatsApp";
  btnWapp.addEventListener("click", () => compartirWhatsApp(relato.titulo));
  compartir.appendChild(btnWapp);

  const btnX = document.createElement("button");
  btnX.textContent = "🔵 X";
  btnX.addEventListener("click", () => compartirX(relato.titulo));
  compartir.appendChild(btnX);

  const btnURL = document.createElement("button");
  btnURL.textContent = "📋 Copiar URL";
  btnURL.addEventListener("click", copiarURL);
  compartir.appendChild(btnURL);

  contenedor.appendChild(compartir);

  // Insertar en el DOM
  document.getElementById("contenedor-relatos").appendChild(contenedor);
}
