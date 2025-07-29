// 📢 Firma para redes
const firma = " —La Voz del Atril 📣";

// 📢 Funciones para compartir
export function compartirWhatsApp(titulo) {
  const texto = encodeURIComponent(`📖 "${titulo}"${firma}`);
  const url = encodeURIComponent(window.location.href);
  window.open(`https://wa.me/?text=${texto}%20${url}`, '_blank');
}

export function compartirX(titulo) {
  const texto = encodeURIComponent(`📖 "${titulo}"${firma}`);
  const url = encodeURIComponent(window.location.href);
  window.open(`https://x.com/intent/tweet?text=${texto}&url=${url}`, '_blank');
}

export function copiarURL() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    alert("📎 ¡Enlace copiado al portapapeles!");
  });
}
