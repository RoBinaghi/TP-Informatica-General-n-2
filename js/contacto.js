// =====================================================================
// CONTACTO — validación del formulario (js/contacto.js)
// =====================================================================

// 1) Los elementos del HTML
let formulario = document.getElementById("formulario");
let campoNombre = document.getElementById("nombre");
let campoEmail = document.getElementById("email");
let campoMotivo = document.getElementById("motivo");
let campoMensaje = document.getElementById("mensaje");

let errorNombre = document.getElementById("error-nombre");
let errorEmail = document.getElementById("error-email");
let errorMotivo = document.getElementById("error-motivo");
let errorMensaje = document.getElementById("error-mensaje");

let exito = document.getElementById("exito");

// 2) Al tocar "Enviar"
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault(); // que la página no se recargue

  let todoBien = true;

  // NOMBRE: no puede estar vacío
  if (campoNombre.value == "") {
    errorNombre.textContent = "Escribí tu nombre.";
    todoBien = false;
  } else {
    errorNombre.textContent = "";
  }

  // EMAIL: no puede estar vacío y tiene que tener @ y un punto
  if (campoEmail.value == "") {
    errorEmail.textContent = "Escribí tu email.";
    todoBien = false;
  } else if (campoEmail.value.indexOf("@") == -1 || campoEmail.value.indexOf(".") == -1) {
    errorEmail.textContent = "El email no es válido. Ejemplo: nombre@correo.com";
    todoBien = false;
  } else {
    errorEmail.textContent = "";
  }

  // MOTIVO: la opción "Elegí una opción" tiene value=""
  if (campoMotivo.value == "") {
    errorMotivo.textContent = "Elegí un motivo.";
    todoBien = false;
  } else {
    errorMotivo.textContent = "";
  }

  // MENSAJE: entre 10 y 500 caracteres
  if (campoMensaje.value.length < 10) {
    errorMensaje.textContent = "El mensaje tiene que tener al menos 10 caracteres.";
    todoBien = false;
  } else if (campoMensaje.value.length > 500) {
    errorMensaje.textContent = "El mensaje no puede tener más de 500 caracteres.";
    todoBien = false;
  } else {
    errorMensaje.textContent = "";
  }

  // 3) Si no hubo errores: mostramos el "¡Gracias!" y vaciamos el formulario
  if (todoBien) {
    exito.classList.remove("oculto");
    formulario.reset();
  } else {
    exito.classList.add("oculto");
  }
});
