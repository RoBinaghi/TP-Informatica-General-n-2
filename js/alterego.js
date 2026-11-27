// =========================================================
// ALTER EGO — alterego.html
// 1) FILTRO: el submenú muestra solo las fichas de un nivel.
// 0) PORTADA: con cada clic pasa de color a blanco y negro en negativo, y vuelve.
// 2) FICHAS: al pasar el mouse aparece la descripción;
//    con un clic (o al sacar el mouse) vuelve la foto.
// Código de las clases:
//   const, querySelector, querySelectorAll ..... Clase 07
//   addEventListener('click'), innerText ........ Clase 07
//   eventos mouseover / mouseout ................ Clase 07
//   let, if ..................................... Clase 08
//   function y parámetros ....................... Clase 08
//   array [ ] ................................... Clase 09
//   forEach ..................................... Clase 11
//   classList.add / remove / toggle ............. Clase 14
// =========================================================


// ---------- 0) PORTADA: COLOR ↔ NEGATIVO ----------
// Hay dos imágenes en la portada; una tiene la clase "oculto".
// Con cada clic, toggle le saca "oculto" a una y se lo pone a la otra (Clase 14).
const portada = document.querySelector('#portada');
const portadaColor = document.querySelector('.portada-color');
const portadaNegativo = document.querySelector('.portada-negativo');

portada.addEventListener('click', function () {
  portadaColor.classList.toggle('oculto');
  portadaNegativo.classList.toggle('oculto');
});


// ---------- 1) FILTRO ----------

// Las 4 opciones del submenú y el botón que lo abre (Clase 07)
const verTodos = document.querySelector('#ver-todos');
const verPrincipales = document.querySelector('#ver-principales');
const verSecundarios = document.querySelector('#ver-secundarios');
const verComplementarios = document.querySelector('#ver-complementarios');
const botonFiltro = document.querySelector('#boton-filtro');

// Las fichas: todas juntas y por nivel, buscadas por su clase (Clase 07)
const todasLasFichas = document.querySelectorAll('.ficha-col');
const principales = document.querySelectorAll('.ficha-col.principal');
const secundarios = document.querySelectorAll('.ficha-col.secundario');
const complementarios = document.querySelectorAll('.ficha-col.complementario');

// Las 4 opciones en un array, para poder desmarcarlas juntas (Clase 09)
const opciones = [verTodos, verPrincipales, verSecundarios, verComplementarios];

// Función que muestra solo las fichas que recibe (Clase 08)
function mostrarSolo(fichasElegidas, opcionElegida, texto) {
  // a) escondemos TODAS las fichas (Clase 11: forEach / Clase 14: classList)
  todasLasFichas.forEach(function (ficha) {
    ficha.classList.add('oculto');
  });

  // b) mostramos solo las elegidas
  fichasElegidas.forEach(function (ficha) {
    ficha.classList.remove('oculto');
  });

  // c) marcamos la opción elegida en el submenú
  opciones.forEach(function (opcion) {
    opcion.classList.remove('active');
  });
  opcionElegida.classList.add('active');

  // d) cambiamos el texto del botón (Clase 07: innerText)
  botonFiltro.innerText = 'Ver: ' + texto;
}

// Cada opción llama a la función con sus fichas (Clase 07: eventos)
verTodos.addEventListener('click', function () {
  mostrarSolo(todasLasFichas, verTodos, 'Todos');
});

verPrincipales.addEventListener('click', function () {
  mostrarSolo(principales, verPrincipales, 'Principales');
});

verSecundarios.addEventListener('click', function () {
  mostrarSolo(secundarios, verSecundarios, 'Secundarios');
});

verComplementarios.addEventListener('click', function () {
  mostrarSolo(complementarios, verComplementarios, 'Complementarios');
});


// ---------- 2) FICHAS: foto ↔ descripción ----------
// - mouseover (el mouse se posiciona sobre la ficha): aparece la info.
// - click: vuelve la foto.
// - mouseout (el mouse sale de la ficha): vuelve la foto.
// Código de las clases: mouseover, mouseout y click (Clase 07),
// let, if y funciones (Clase 08), forEach (Clase 11), classList (Clase 14).

// Todas las fichas (Clase 07)
const fichas = document.querySelectorAll('.ficha');

// Guarda la última ficha en la que se hizo clic.
// Mientras el mouse siga en ESA ficha, la info no vuelve a aparecer.
let fichaClicada = null;

fichas.forEach(function (ficha) {
  // Dentro de ESTA ficha buscamos su foto y su descripción (Clase 07)
  const foto = ficha.querySelector('.ficha-foto');
  const descripcion = ficha.querySelector('.ficha-descripcion');

  // Muestra la foto y esconde la info (Clase 14: classList)
  function mostrarFoto() {
    foto.classList.remove('oculto');
    descripcion.classList.add('oculto');
  }

  // Muestra la info y esconde la foto
  function mostrarInfo() {
    foto.classList.add('oculto');
    descripcion.classList.remove('oculto');
  }

  // Mouse encima: si no es la ficha que se acaba de clicar, aparece la info (Clase 08: if)
  ficha.addEventListener('mouseover', function () {
    if (ficha != fichaClicada) {
      fichaClicada = null;
      mostrarInfo();
    }
  });

  // Clic: vuelve la foto y recordamos esta ficha
  ficha.addEventListener('click', function () {
    mostrarFoto();
    fichaClicada = ficha;
  });

  // Mouse afuera: vuelve la foto
  ficha.addEventListener('mouseout', mostrarFoto);
});
