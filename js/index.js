const enlacesTarjetas = document.querySelectorAll(".tarjeta-enlace");

const textosHover = [
  "Un recorrido por su vida, desde sus orígenes en Londres y sus hitos personales hasta su legado final con Blackstar.",
  "Personajes y Universo Visual: El análisis de sus identidades paralelas más icónicas, desde Ziggy Stardust y The Thin White Duke hasta la etapa de Berlín.",
  " Discografía y Sencillos: Una guía completa por sus álbumes de estudio, sus revoluciones sonoras y las canciones que marcaron cada era.",
    "Duetos y Proyectos: Sus trabajos en conjunto, featurings e hitos compartidos con artistas como Queen, John Lennon, Iggy Pop y Mick Jagger.",
    "Artes Plásticas y Exposiciones: Su faceta como pintor, sus lienzos de expresión neoxpresionista y sus exhibiciones de arte.",
    "Actuación y Dramaturgia: Sus papeles en el cine (Labyrinth, The Prestige, The Man Who Fell to Earth) y su paso por Broadway en El Hombre Elefante.",
];

enlacesTarjetas.forEach((enlace, index) => {
  const elementoTexto = enlace.querySelector(".texto-pantalla");
  const textoOriginal = elementoTexto.innerText;
  let clics = 0;

  enlace.addEventListener("click", (e) => {
    e.preventDefault();
    clics++;

    if (clics === 1) {
      if (textosHover[index]) {
        elementoTexto.innerText = textosHover[index];
        elementoTexto.style.color = "#ffa500";
      }
    } else if (clics === 2) {
      window.location.href = enlace.getAttribute("href");
    }
  });
});