gsap.registerPlugin(ScrollTrigger);

// 1. APARICIÓN SUAVE CADA VEZ QUE BAJÁS EL SCROLL
gsap.utils.toArray(
  ".titulo-pagina, .cartelera-titulo, main > section > h2, .ficha-col, .tarjeta-interactiva, .cuadro-influencia, .col:not(.collapse) > .card, .evento, .img-bowie-scroll"
).forEach((el) => {
  gsap.fromTo(
    el,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
      clearProps: "transform",
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        toggleActions: "play none none reset"
      }
    }
  );
});

