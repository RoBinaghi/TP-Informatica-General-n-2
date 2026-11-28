//Galeria de obras que pinto
// 1\. Datos de las obras en un Array de Objetos 
const obrasData = [ { titulo: "Obra 1", img: "img/pintura1.jpg", descripcion: "Descripción de la obra 1" }, 
  { titulo: "Obra 2", img: "img/pintura2.jpg", descripcion: "Descripción de la obra 2" } ]; 

  // 2\. Captura de elementos 
const carrusel = document.querySelector("#carruselPinturas");
 const btnPrev = document.querySelector("#btnPrev"); 
 const btnNext = document.querySelector("#btnNext"); 
 const tarjetas = document.querySelectorAll(".tarjeta-obra");

 // 3\. Controles del carrusel  
  if (carrusel && btnPrev && btnNext) 
    { btnNext.addEventListener("click", () => 
      { carrusel.scrollLeft += 300; }); 
      btnPrev.addEventListener("click", () =>
         { carrusel.scrollLeft -= 300; }); } 

 // 4\. Actualización del modal al hacer clic en cada tarjeta  
    
 tarjetas.forEach((tarjeta, index) =>  { 
  tarjeta.addEventListener("click", () =>{ 
        const modalImg = document.querySelector("#modalImagenAmpliada"); 
        const modalTitulo = document.querySelector("#modalGaleriaTitulo"); 
        const modalDescripcion = document.querySelector("#modalGaleriaDescripcion"); 
        if (modalImg) { 
          modalImg.src = obrasData[index].img; 
          modalImg.alt = obrasData[index].titulo; } 
        if (modalTitulo) { 
            modalTitulo.textContent = obrasData[index].titulo; } 
            if (modalDescripcion) { 
              modalDescripcion.textContent = obrasData[index].descripcion; } 
            }); 
          });

          // Activar / desactivar texto en las tarjetas de influencias al hacer clic 

// Capturamos el grupo de tarjetas
 const tarjetasInfluencia = document.querySelectorAll('.tarjeta-influencia');
// Recorremos cada tarjeta 
 tarjetasInfluencia.forEach((tarjeta)=>{ 
  tarjeta.addEventListener('click', () => { 
// 1\. Cerramos las demás tarjetas quitando la clase 
 tarjetasInfluencia.forEach((t) =>{ 
  if (t !== tarjeta) { 
    t.classList.remove('activa'); } 
  }); 
  // 2\. Alternamos la clase activa usando classList.toggle 
tarjeta.classList.toggle('activa'); }); 
});