// 1. Captura de elementos del DOM
const carrusel = document.getElementById('carruselPosters'); // <-- Faltaba esta línea
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const posters = document.querySelectorAll('.poster-item');
const panel = document.getElementById('panelDetalle');

// 2. Array de objetos con los 5 pósters (reemplaza con tus rutas reales y enlaces embed de YouTube)
const postersData = [
  {
    titulo: "The Man Who Fell to Earth (El hombre que cayó a la Tierra, 1976)",
    img: "img/actuacion/the-man-who-fell-to-earth.jpg",
    texto: "Su primer gran papel protagónico en el cine. Interpretó a Thomas Jerome Newton, un alienígena desolado que llega a la Tierra en busca de agua para su planeta. Prácticamente no tuvo que actuar: su estética de la época encajaba perfecto con el personaje.",
    video: "https://www.youtube.com/embed/KarWCgIw3Wk?si=NbtFhcbs5nDFEp4H"
  },
  {
    titulo: "Just a Gigolo (1978)",
    img: "img/actuacion/just-a-gigolo.jpg",
    texto: "Tras regresar sin rumbo de la Primera Guerra Mundial al Berlín de los años 20, un exoficial aristócrata es reclutado por una baronesa para trabajar como gigoló de lujo para mujeres adineradas, mientras el nazismo comienza a ascender a su alrededor.",
    video: "https://www.youtube.com/embed/IdsZvad-4nA?si=7OYKxbLDj2HWkfXI"
  },
  {
    titulo: "Merry Christmas, Mr. Lawrence (Feliz Navidad, Mr. Lawrence, 1983)",
    img: "img/actuacion/merry-christmas-mr-lawrence.jpg",
    texto: "Drama ambientado en un campo de prisioneros japonés durante la Segunda Guerra Mundial. Bowie interpreta al Mayor Jack Celliers. Es una de sus mejores actuaciones dramáticas.",
    video: "https://www.youtube.com/embed/NQqmDAste_E?si=d4hOqr69fCgL_rcT"
  },
  {
    titulo: "The Hunger (El ansia, 1983)",
    img: "img/actuacion/the-hunger.jpg",
    texto: "Dirigida por Tony Scott, es un clásico de culto gótico. Bowie interpreta a John, un vampiro en decadencia, junto a Catherine Deneuve y Susan Sarandon.",
    video: "https://www.youtube.com/embed/7a6YFwC2zKA?si=nLOBNyaU9rTUyv09"
  },
  {
    titulo: "Labyrinth (Dentro del laberinto, 1986)",
    img: "img/actuacion/labyrinth.jpg",
    texto: "Probablemente su papel más icónico para la cultura pop. Interpretó a Jareth, el Rey de los Goblins, además de escribir y cantar las canciones de la película.",
    video: "https://www.youtube.com/embed/O2yd4em1I6M?si=iwE4Gu15bWD-2Tii"
  }
];

// 3. Mover carrusel con las flechas izquierda y derecha
btnNext.addEventListener('click', () => {
  const paso = carrusel.querySelector('.poster-item').offsetWidth + 16;
  carrusel.scrollBy({ left: paso, behavior: 'smooth' });
});

btnPrev.addEventListener('click', () => {
  const paso = carrusel.querySelector('.poster-item').offsetWidth + 16;
  carrusel.scrollBy({ left: -paso, behavior: 'smooth' });
});

// 4. Iteración y eventos al hacer clic en cada póster
posters.forEach((poster, index) => {
  poster.addEventListener('click', () => {
    // Cargar datos desde el Array de Objetos
    document.getElementById('detalleTitulo').textContent = postersData[index].titulo;
    document.getElementById('detalleImg').src = postersData[index].img;
    document.getElementById('detalleImg').alt = postersData[index].titulo;
    document.getElementById('detalleTexto').textContent = postersData[index].texto;
    document.getElementById('detalleVideo').src = postersData[index].video;

    // Mostrar el panel desplegable
    panel.classList.remove('d-none');
  });
});

  /*const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');

// 1. Mover carrusel con las flechas izquierda y derecha
btnNext.addEventListener('click', () => {
  // Desplaza el ancho de un póster aproximadamente
  const paso = carrusel.querySelector('.poster-item').offsetWidth + 16;
  carrusel.scrollBy({ left: paso, behavior: 'smooth' });
});

btnPrev.addEventListener('click', () => {
  const paso = carrusel.querySelector('.poster-item').offsetWidth + 16;
  carrusel.scrollBy({ left: -paso, behavior: 'smooth' });
});

// 2. Mostrar imagen, texto y video al hacer clic en un póster
document.querySelectorAll('.poster-item').forEach(poster => {
  poster.addEventListener('click', () => {
    document.querySelectorAll('.poster-item').forEach(p => p.classList.remove('seleccionado'));
    poster.classList.add('seleccionado');

    document.getElementById('detalleTitulo').textContent = poster.dataset.titulo;
    document.getElementById('detalleImg').src = poster.dataset.img;
    document.getElementById('detalleImg').alt = poster.dataset.titulo;
    document.getElementById('detalleTexto').textContent = poster.dataset.texto;
    document.getElementById('detalleVideo').src = poster.dataset.video;

    panel.classList.remove('d-none');
    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
});*/