// =====================================================
// BIOGRAFÍA
// (Clase NN) = está en el PDF de esa clase.
// [NO VISTO EN CLASE] = no está en los PDF.
// =====================================================


// ----- 1. BOWIE Y SUS LOOKS -----
// Cada vez que se toca la foto, se esconde la que se ve y aparece la siguiente.
// Clase 07: querySelectorAll y addEventListener (evento click)
// Clase 08: let, funciones, if
// Clase 09: for y length
// Clase 14: classList.add y classList.remove

// Capturo las 9 fotos de los looks y el párrafo donde va el nombre
let fotosLook = document.querySelectorAll('.foto-guitarra');
let nombreLook = document.querySelector('.nombre-look');

// Array con el nombre de cada look, en el MISMO orden que las fotos del HTML (Clase 09)
const nombres = [
  'El Bowie de Earthling',
  'Ziggy Stardust',
  'Halloween Jack',
  'El Bowie soul',
  "El Bowie de Let's Dance",
  'Glass Spider',
  'Bowie en Glastonbury',
  'El Bowie de Reality',
  'The Blind Prophet'
];

// Guarda el número del look que se está viendo (empieza en 0 = el primero)
let lookActual = 0;

// Esconde el look que se ve, muestra el siguiente y escribe su nombre.
// Si llega al último, vuelve al primero.
function siguienteLook() {
  fotosLook[lookActual].classList.add('oculto');

  lookActual = lookActual + 1;
  if (lookActual == fotosLook.length) {
    lookActual = 0;
  }

  fotosLook[lookActual].classList.remove('oculto');

  // Escribimos el nombre del personaje de la foto que ahora se ve (Clase 07: innerText)
  nombreLook.innerText = nombres[lookActual];
}

// Al tocar cualquiera de las fotos se pasa al look siguiente
for (let i = 0; i < fotosLook.length; i++) {
  fotosLook[i].addEventListener('click', siguienteLook);
}


// ----- 2. BOTÓN PARA VOLVER ARRIBA -----
// Clase 07: querySelector y addEventListener (evento scroll)
// Clase 08: if / else
// Clase 14: classList
// [NO VISTO EN CLASE] window.scrollY → cuántos píxeles se bajó en la página

let botonArriba = document.querySelector('.btn-arriba');

window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    botonArriba.classList.add('visible');
  } else {
    botonArriba.classList.remove('visible');
  }
});


// ----- 3. FOTOS QUE SE AGRANDAN AL HACER CLIC -----
// Al tocar una foto de la línea de tiempo se abre el "visor" con la foto grande.
// Se cierra tocando en cualquier parte del visor.
// Clase 07: querySelector, querySelectorAll, addEventListener y this
// Clase 09: for
// Clase 14: classList (usa la clase .oculto)

let fotosLinea = document.querySelectorAll('.foto-linea');
let visor = document.querySelector('.visor');
let visorFoto = document.querySelector('.visor-foto');
let visorTexto = document.querySelector('.visor-texto');

for (let i = 0; i < fotosLinea.length; i++) {
  fotosLinea[i].addEventListener('click', function () {
    // "this" es la foto que se tocó: copio su imagen y su texto alternativo
    visorFoto.src = this.src;
    visorFoto.alt = this.alt;
    visorTexto.innerText = this.alt;
    visor.classList.remove('oculto');
  });
}

visor.addEventListener('click', function () {
  visor.classList.add('oculto');
});
