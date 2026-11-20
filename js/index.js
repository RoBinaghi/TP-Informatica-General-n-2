// 1. Capturamos todas las tarjetas usando querySelectorAll 
const tarjetas = document.querySelectorAll('.tarjeta-interactiva');

// 2. Recorremos los elementos con el método forEach 
tarjetas.forEach((tarjeta) => {
  // 3. Escuchamos el evento 'click' en cada tarjeta 
  tarjeta.addEventListener('click', (e) => {
    // 4. Verificamos la propiedad tagName del elemento cliqueado 
    // Si el usuario hizo clic sobre un enlace <a> o botón, no alteramos la tarjeta
    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
      return;
    }

    // 5. Alternamos la clase 'activa' usando classList.toggle 
    tarjeta.classList.toggle('activa');
  });
});

