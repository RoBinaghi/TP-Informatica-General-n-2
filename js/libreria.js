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