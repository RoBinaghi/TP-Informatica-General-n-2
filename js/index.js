// 1. Capturamos todas las tarjetas usando querySelectorAll (Clase 07)
const tarjetas = document.querySelectorAll('.tarjeta-interactiva');

// 2. Recorremos los elementos con el método forEach (Clase 11)
tarjetas.forEach((tarjeta) =&gt; {
  // 3. Escuchamos el evento 'click' en cada tarjeta (Clase 07 y Clase 13)
  tarjeta.addEventListener('click', (e) =&gt; {
    // 4. Verificamos la propiedad tagName del elemento cliqueado (Clase 07)
    // Si el usuario hizo clic sobre un enlace <a> o botón, no alteramos la tarjeta
    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
      return;
    }

    // 5. Alternamos la clase 'activa' usando classList.toggle (Clase 14)
    tarjeta.classList.toggle('activa');
  });
});

