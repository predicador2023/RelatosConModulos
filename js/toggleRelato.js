export function toggleRelato(relatoDiv) {
  const contenido = relatoDiv.querySelector('.contenido');
  const imagen = relatoDiv.querySelector('.imagen-relato');
  const boton = relatoDiv.querySelector('.boton-leer');

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
