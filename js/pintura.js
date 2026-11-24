document.addEventListener("DOMContentLoaded", () => {
  // 1. Captura de elementos del DOM 
  const carrusel = document.querySelector("#carruselPinturas");
  const btnPrev = document.querySelector("#btnPrev");
  const btnNext = document.querySelector("#btnNext");

  // 2. Verificación y asignación de eventos 
  if (carrusel && btnPrev && btnNext) {
    btnNext.addEventListener("click", () => {
      carrusel.scrollLeft += 300; // Avanza 300px a la derecha
    });

    btnPrev.addEventListener("click", () => {
      carrusel.scrollLeft -= 300; // Retrocede 300px a la izquierda
    });
  } // <-- Aquí solo cierra el "if" del carrusel

  // 3. Carga dinámica de la obra en el Modal de Bootstrap
  const modalGaleria = document.querySelector("#modalGaleria");

  if (modalGaleria) {
    modalGaleria.addEventListener("show.bs.modal", (event) => {
      const tarjeta = event.relatedTarget;
      if (!tarjeta) return;

      const imgSrc = tarjeta.getAttribute("data-img");
      const titulo = tarjeta.getAttribute("data-titulo") || "";
      const descripcion = tarjeta.getAttribute("data-descripcion") || "";

      const modalImg = modalGaleria.querySelector("#modalImagenAmpliada");
      const modalTitulo = modalGaleria.querySelector("#modalGaleriaTitulo");
      const modalDescripcion = modalGaleria.querySelector("#modalGaleriaDescripcion");

      if (modalImg && imgSrc) {
        modalImg.src = imgSrc;
        modalImg.alt = titulo;
      }
      if (modalTitulo) {
        modalTitulo.textContent = titulo;
      }
      if (modalDescripcion) {
        modalDescripcion.textContent = descripcion;
      }
    });
  }
}); // <-- AQUÍ SE CIERRA EL DOMContentLoaded AL FINAL DE TODO

// Activar / desactivar texto en las tarjetas de influencias al hacer clic (ideal para celular)
const tarjetasInfluencia = document.querySelectorAll('.tarjeta-influencia');

tarjetasInfluencia.forEach((tarjeta) => {
  tarjeta.addEventListener('click', () => {
    // Si ya estaba abierta, la cierra; si no, cierra las demás y abre esta
    const estabaActiva = tarjeta.classList.contains('activa');
    tarjetasInfluencia.forEach((t) => t.classList.remove('activa'));
    
    if (!estabaActiva) {
      tarjeta.classList.add('activa');
    }
  });
});