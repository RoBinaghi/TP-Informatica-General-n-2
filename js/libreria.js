gsap.registerPlugin(ScrollTrigger);

// 1. BUCLE INFINITO (se mueve solo todo el tiempo, sin depender del scroll)
if (document.querySelector(".titulo-pagina")) {
  gsap.to(".titulo-pagina", {
    letterSpacing: "5px",
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
}

if (document.querySelector(".caja-guitarra")) {
  gsap.to(".caja-guitarra", {
    y: -15,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
}

// 2. ANIMACIÓN QUE SE REPITE CADA VEZ QUE SUBÍS Y BAJÁS EL SCROLL
gsap.utils.toArray("section h2, .evento, .img-bowie-scroll").forEach((el) => {
  gsap.fromTo(
    el,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        end: "bottom 15%",
        // play (al bajar) | reverse (al seguir bajando) | play (al volver a subir) | reverse (al subir del todo)
        toggleActions: "play reverse play reverse"
      }
    }
  );
});
/* =========================================================
   EFECTO PARALLAX: FONDO DE IMAGEN EN MOVIMIENTO + TEXTO QUIETO
   ========================================================= */
if (document.querySelector(".seccion-parallax") && typeof ScrollTrigger !== "undefined") {
  gsap.utils.toArray(".seccion-parallax").forEach((seccion) => {
    const cajaTexto = seccion.querySelector(".caja-texto-fondo");

    // 1. Mueve SOLO el fondo de imagen continuamente al scrollear
    gsap.fromTo(
      seccion,
      { backgroundPositionY: "20%" },
      {
        backgroundPositionY: "80%",
        ease: "none",
        scrollTrigger: {
          trigger: seccion,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      }
    );

    // 2. La caja de texto aparece una vez y queda fija para leerse cómodo
    if (cajaTexto) {
      gsap.from(cajaTexto, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: seccion,
          start: "top 75%",
          once: true // Se ejecuta una sola vez y no se vuelve a mover
        }
      });
    }
  });
}