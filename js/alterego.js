// =========================================================
// ALTER EGO — alterego.html
// 1) FILTRO: el submenú muestra solo las fichas de un nivel.
// 2) FICHAS: al hacer clic se esconde la foto y aparece la
//    descripción; con otro clic vuelve la foto.
// Código de las clases:
//   const, querySelector, querySelectorAll ..... Clase 07
//   addEventListener('click'), innerText ........ Clase 07
//   function y parámetros ....................... Clase 08
//   array [ ] ................................... Clase 09
//   forEach ..................................... Clase 11
//   classList.add / remove / toggle ............. Clase 14
// =========================================================


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

// Todas las fichas (Clase 07)
const fichas = document.querySelectorAll('.ficha');

// A cada ficha le agregamos un "escuchador" de clic (Clase 11: forEach)
fichas.forEach(function (ficha) {
  // Dentro de ESTA ficha buscamos su foto y su descripción (Clase 07)
  const foto = ficha.querySelector('.ficha-foto');
  const descripcion = ficha.querySelector('.ficha-descripcion');

  ficha.addEventListener('click', function () {
    // toggle: si tiene la clase "oculto" se la saca, si no la tiene se la pone (Clase 14)
    foto.classList.toggle('oculto');
    descripcion.classList.toggle('oculto');
  });
});
