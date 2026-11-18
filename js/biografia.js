<<<<<<< Updated upstream
// =====================================================
// BIOGRAFÍA
// (Clase NN) = está en el PDF de esa clase.
// [NO VISTO EN CLASE] = no está en los PDF.
// =====================================================


// ----- 1. GUITARRA QUE CAMBIA DE COLOR -----
// Clase 07: querySelectorAll y addEventListener (evento click)
// Clase 08: let, funciones, if
// Clase 09: for y arrays (lo que devuelve querySelectorAll se recorre como un array)
// Clase 14: classList.add y classList.remove

// Capturo las 6 imágenes de la guitarra y los 6 botones de colores
let guitarras = document.querySelectorAll('.foto-guitarra');
let botonesColor = document.querySelectorAll('.btn-color');

// Guarda el número del color que se está viendo (empieza en 0 = rojo)
let colorActual = 0;

// Muestra la guitarra número "numero" y esconde las demás
function mostrarColor(numero) {
  for (let i = 0; i < guitarras.length; i++) {
    guitarras[i].classList.add('oculto');
    botonesColor[i].classList.remove('elegido');
  }

  guitarras[numero].classList.remove('oculto');
  botonesColor[numero].classList.add('elegido');
  colorActual = numero;
}

// Al tocar la guitarra pasa al color siguiente.
// Si llega al último, vuelve al primero.
for (let i = 0; i < guitarras.length; i++) {
  guitarras[i].addEventListener('click', function () {
    let siguiente = colorActual + 1;

    if (siguiente == guitarras.length) {
      siguiente = 0;
    }

    mostrarColor(siguiente);
  });
}

// Al tocar un botón de color se muestra esa guitarra
for (let i = 0; i < botonesColor.length; i++) {
  botonesColor[i].addEventListener('click', function () {
    mostrarColor(i);
  });
}

// Al cargar la página queda marcado el primer color
mostrarColor(0);


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
=======
// =========================================================
// BIOGRAFÍA — dos cosas con JavaScript
//  1) La foto de la guitarra cambia de color con cada clic.
//  2) En la línea de tiempo, al hacer clic en un hito se
//     muestra (o se vuelve a esconder) su texto.
// Código de las clases:
//   querySelector / querySelectorAll ........ Clase 07
//   addEventListener('click') ............... Clase 07
//   let / const ............................ Clase 07
//   if ..................................... Clase 08
//   posiciones de un array [ ] y length ..... Clase 09
//   forEach ................................ Clase 11
//   classList.add / remove / toggle ......... Clase 14
// =========================================================

// ---------- 1) GUITARRA QUE CAMBIA DE COLOR ----------

// Capturamos el bloque de la guitarra (donde se hace clic) y las 6 fotos
const guitarra = document.querySelector('#guitarra');
const fotos = document.querySelectorAll('.foto-color');

// Guardamos qué foto se está viendo. Empieza en la primera (posición 0)
let fotoActual = 0;

guitarra.addEventListener('click', function () {
  // a) escondemos la foto que se ve ahora
  fotos[fotoActual].classList.add('oculto');

  // b) pasamos a la siguiente
  fotoActual = fotoActual + 1;

  // c) si nos pasamos de la última, volvemos a la primera
  if (fotoActual === fotos.length) {
    fotoActual = 0;
  }

  // d) mostramos la nueva foto
  fotos[fotoActual].classList.remove('oculto');
});


// ---------- 2) LÍNEA DE TIEMPO: MOSTRAR EL TEXTO DE CADA HITO ----------
// Es el mismo código que las fichas de Alter ego.

// Capturamos todos los hitos de la lista
const hitos = document.querySelectorAll('.hito');

// Recorremos los hitos uno por uno (Clase 11: forEach)
hitos.forEach(function (hito) {

  // Dentro de cada hito buscamos su texto y su "+ Leer más"
  const texto = hito.querySelector('.hito-texto');
  const leerMas = hito.querySelector('.leer-mas');

  // Al hacer clic en el hito, toggle pone o saca la clase "oculto" (Clase 14)
  hito.addEventListener('click', function () {
    texto.classList.toggle('oculto');
    leerMas.classList.toggle('oculto');
  });
>>>>>>> Stashed changes
});
