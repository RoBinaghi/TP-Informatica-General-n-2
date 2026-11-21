document.addEventListener("DOMContentLoaded", () => {
  const carrusel = document.querySelector("#carruselPinturas");
  const btnPrev = document.querySelector("#btnPrev");
  const btnNext = document.querySelector("#btnNext");

  // 1. Controles de desplazamiento horizontal del carrusel
  if (carrusel && btnPrev && btnNext) {
    const calcularDesplazamiento = () => {
      const primerSlide = carrusel.querySelector(".pintura-slide");
      const gap = parseFloat(getComputedStyle(carrusel).gap) || 16;
      return primerSlide ? primerSlide.offsetWidth + gap : 300;
    };

    btnNext.addEventListener("click", () => {
      carrusel.scrollBy({
        left: calcularDesplazamiento(),
        behavior: "smooth",
      });
    });

    btnPrev.addEventListener("click", () => {
      carrusel.scrollBy({
        left: -calcularDesplazamiento(),
        behavior: "smooth",
      });
    });
  }

  // 2. Carga dinámica de la obra en el Modal de Bootstrap
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
});

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