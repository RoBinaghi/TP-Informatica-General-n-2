document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined") return;

  if (typeof Draggable !== "undefined") {
    if (typeof InertiaPlugin !== "undefined") {
      gsap.registerPlugin(Draggable, InertiaPlugin);
    } else {
      gsap.registerPlugin(Draggable);
    }
  }

  // =========================================================================
  // 1. DATOS DE LAS 12 COLABORACIONES (ORDENADOS CRONOLÓGICAMENTE 1975 - 2013)
  // =========================================================================
  const colaboracionesData = [
    {
      numero: "001",
      artista: "John Lennon",
      cancion: "«Fame»",
      badge: "1975 · Guitarra y coros",
      categoria: "Participaciones vocales y coros",
      img: "img/colaboraciones/lennon.jpg",
      texto: "Ambos artistas compusieron la canción junto a Carlos Alomar. Lennon participó en la grabación con guitarra y voces de acompañamiento, mientras Bowie interpretó la voz principal. También trabajaron juntos en la versión de «Across the Universe» incluida en Young Americans, aunque allí Lennon aportó la guitarra.",
      video: "https://www.youtube.com/embed/-TBjlAbkTlw",
      youtubeUrl: "https://www.youtube.com/watch?v=-TBjlAbkTlw"
    },
    {
      numero: "002",
      artista: "Bing Crosby",
      cancion: "«Peace on Earth / Little Drummer Boy»",
      badge: "1977 · Dueto",
      categoria: "Duetos y voces compartidas",
      img: "img/colaboraciones/Crosby.jpg",
      texto: "Un encuentro inesperado entre dos generaciones de la música. Bowie y Crosby grabaron este dúo para el especial televisivo Bing Crosby’s Merrie Olde Christmas. La combinación de una canción navideña tradicional con una composición nueva de Bowie convirtió la interpretación en un momento memorable.",
      video: "https://www.youtube.com/embed/H0N7SDNtgwg",
      youtubeUrl: "https://www.youtube.com/watch?v=H0N7SDNtgwg"
    },
    {
      numero: "003",
      artista: "Queen",
      cancion: "«Under Pressure»",
      badge: "1981 · Dueto",
      categoria: "Duetos y voces compartidas",
      img: "img/colaboraciones/Bowie-Mercuryp.jpg",
      texto: "Nació de una jam session improvisada en Suiza con mucho vino de por medio. El icónico riff de bajo y el duelo vocal con Freddie Mercury hicieron historia.",
      video: "https://www.youtube.com/embed/a01QQZyl-_I",
      youtubeUrl: "https://www.youtube.com/watch?v=a01QQZyl-_I"
    },
    {
      numero: "004",
      artista: "Tina Turner",
      cancion: "«Tonight»",
      badge: "1984 · Dueto",
      categoria: "Duetos y voces compartidas",
      img: "img/colaboraciones/turner.jpg",
      texto: "Bowie invitó a Turner a compartir la interpretación de esta canción, originalmente escrita junto a Iggy Pop. Sus voces se complementan en una versión que transforma el sentido de la composición original.",
      video: "https://www.youtube.com/embed/p4WG_y7owmM",
      youtubeUrl: "https://www.youtube.com/watch?v=p4WG_y7owmM"
    },
    {
      numero: "005",
      artista: "Mick Jagger",
      cancion: "«Dancing in the Street»",
      badge: "1985 · Dueto",
      categoria: "Duetos y voces compartidas",
      img: "img/colaboraciones/jagger.jpg",
      texto: "Una versión del clásico de Martha and the Vandellas grabada para recaudar fondos para Live Aid. Su videoclip, protagonizado por ambos artistas, se convirtió en una de las imágenes más representativas del pop de los años ochenta.",
      video: "https://www.youtube.com/embed/DOBFzb83Pl0",
      youtubeUrl: "https://www.youtube.com/watch?v=DOBFzb83Pl0"
    },
    {
      numero: "006",
      artista: "Adrian Belew",
      cancion: "«Pretty Pink Rose»",
      badge: "1990 · Dueto",
      categoria: "Duetos y voces compartidas",
      img: "img/colaboraciones/belew.jpg",
      texto: "Bowie participó como vocalista invitado en este tema del álbum Young Lions, de Belew. Además de interpretar la canción junto a él, Bowie fue su compositor. Es una colaboración que refleja su interés por experimentar con sonidos y propuestas musicales diferentes.",
      video: "https://www.youtube.com/embed/HezgRRG3UjY",
      youtubeUrl: "https://www.youtube.com/watch?v=HezgRRG3UjY"
    },
    {
      numero: "007",
      artista: "Goldie",
      cancion: "«Truth»",
      badge: "1998 · Vocalista invitado",
      categoria: "Participaciones vocales y coros",
      img: "img/colaboraciones/goldie.jpg",
      texto: "Bowie aportó la voz principal a esta extensa composición del álbum Saturnz Return. El encuentro entre su interpretación vocal y la electrónica de Goldie muestra su apertura hacia la escena electrónica británica de los noventa.",
      video: "https://www.youtube.com/embed/UPuMxgol7nk",
      youtubeUrl: "https://www.youtube.com/watch?v=UPuMxgol7nk"
    },
    {
      numero: "008",
      artista: "Placebo",
      cancion: "«Without You I'm Nothing»",
      badge: "1999 · Dueto",
      categoria: "Duetos y voces compartidas",
      img: "img/colaboraciones/placebo.jpg",
      texto: "Bowie se sumó a una nueva versión del tema de Placebo, compartiendo la interpretación vocal con Brian Molko. Su participación ayudó a dar mayor visibilidad a la banda y consolidó el vínculo entre ambos artistas.",
      video: "https://www.youtube.com/embed/WK5CvJbTaoM",
      youtubeUrl: "https://www.youtube.com/watch?v=WK5CvJbTaoM"
    },
    {
      numero: "009",
      artista: "Kashmir",
      cancion: "«The Cynic»",
      badge: "2005 · Vocalista invitado",
      categoria: "Participaciones vocales y coros",
      img: "img/colaboraciones/kashmir.jpg",
      texto: "Bowie participó como vocalista invitado en este tema de la banda danesa Kashmir, incluido en el álbum No Balance Palace. Una colaboración menos conocida que demuestra su interés por descubrir y acompañar a músicos de nuevas generaciones.",
      video: "https://www.youtube.com/embed/sJ9KeiyMIQQ",
      youtubeUrl: "https://www.youtube.com/watch?v=sJ9KeiyMIQQ"
    },
    {
      numero: "010",
      artista: "TV on the Radio",
      cancion: "«Province»",
      badge: "2006 · Voces de acompañamiento",
      categoria: "Participaciones vocales y coros",
      img: "img/colaboraciones/tvotr.jpg",
      texto: "Bowie aportó voces de acompañamiento en esta canción del álbum Return to Cookie Mountain. Admiraba el trabajo de la banda neoyorquina y decidió participar sin ocupar el centro de la composición.",
      video: "https://www.youtube.com/embed/_whZTOiB5to",
      youtubeUrl: "https://www.youtube.com/watch?v=_whZTOiB5to"
    },
    {
      numero: "011",
      artista: "Scarlett Johansson",
      cancion: "«Falling Down» y «Fannin Street»",
      badge: "2008 · Voces de acompañamiento",
      categoria: "Participaciones vocales y coros",
      img: "img/colaboraciones/johansson.jpg",
      texto: "Bowie colaboró con la actriz y cantante en su álbum Anywhere I Lay My Head, integrado principalmente por versiones de canciones de Tom Waits. Su participación consistió en aportar voces de acompañamiento en estos dos temas.",
      video: "https://www.youtube.com/embed/2FgwOcVTqEg",
      youtubeUrl: "https://www.youtube.com/watch?v=2FgwOcVTqEg"
    },
    {
      numero: "012",
      artista: "Arcade Fire",
      cancion: "«Reflektor»",
      badge: "2013 · Voces de acompañamiento",
      categoria: "Participaciones vocales y coros",
      img: "img/colaboraciones/arcade.jpg",
      texto: "Bowie era muy fan de la banda. Aceptó hacer coros en este tema tras escuchar la demo y amenazarlos en broma con que \"se la iba a robar\" si no la terminaban rápido.",
      video: "https://www.youtube.com/embed/HzEMFdasvXI",
      youtubeUrl: "https://www.youtube.com/watch?v=HzEMFdasvXI"
    }
  ];

  // =========================================================================
  // 2. CAPTURA DE ELEMENTOS DEL MODAL Y APERTURA POR TARJETA
  // =========================================================================
  const modalElemento = document.getElementById("modalColaboracion");
  const modalBadge = document.getElementById("colabModalBadge");
  const modalTitulo = document.getElementById("colabModalTitulo");
  const modalImg = document.getElementById("colabModalImg");
  const modalCategoria = document.getElementById("colabModalCategoria");
  const modalTexto = document.getElementById("colabModalTexto");
  const modalVideo = document.getElementById("colabModalVideo");
  const modalLink = document.getElementById("colabModalLink");

  const modalBootstrap = (modalElemento && typeof bootstrap !== "undefined")
    ? new bootstrap.Modal(modalElemento)
    : null;

  function abrirArticuloColaboracion(index) {
    const item = colaboracionesData[index];
    if (!item) return;

    if (modalBadge) modalBadge.textContent = item.badge;
    if (modalTitulo) modalTitulo.textContent = `${item.artista} — ${item.cancion}`;
    if (modalImg) {
      modalImg.src = item.img;
      modalImg.alt = `${item.artista} y David Bowie`;
    }
    if (modalCategoria) modalCategoria.textContent = item.categoria;
    if (modalTexto) modalTexto.textContent = item.texto;
    if (modalVideo) modalVideo.src = item.video;
    if (modalLink) modalLink.href = item.youtubeUrl;

    if (modalBootstrap) {
      modalBootstrap.show();
    }
  }

  // Detener el video de YouTube al cerrar la ventana modal
  if (modalElemento) {
    modalElemento.addEventListener("hidden.bs.modal", () => {
      if (modalVideo) modalVideo.src = "";
    });
  }

  // =========================================================================
  // 3. CONFIGURACIÓN Y ANIMACIÓN GSAP A PANTALLA COMPLETA
  // =========================================================================
  gsap.set(".switch", { opacity: 0, visibility: "hidden" });

  const CONFIG = {
    totalCards: colaboracionesData.length,
    wheelRadius: 35,
    animations: {
      initialDuration: 1,
      rotationDuration: 0.64,
      flipDuration: 0.64,
      transitionDuration: 1.2,
      circleTransitionDuration: 0.8
    }
  };

  const carouselItemsEl = document.querySelector(".carousel-items");
  const carouselContainerEl = document.querySelector(".carousel-container");
  const resetBtn = document.getElementById("resetBtn");
  const circleBtn = document.getElementById("circleBtn");
  const waveBtn = document.getElementById("waveBtn");
  const staggerBtn = document.getElementById("staggerBtn");
  const gridBtn = document.getElementById("gridBtn");
  const fanBtn = document.getElementById("fanBtn");
  const depthBtn = document.getElementById("depthBtn");
  const allButtons = document.querySelectorAll(".switch-button");

  if (!carouselItemsEl || !carouselContainerEl) return;

  let currentAnimation = "circle";
  let isTransitioning = false;
  let activeAnimations = [];
  let draggableInstance = null;
  let originalZIndices = [];
  let fueArrastrado = false;

  const getViewportSize = () => ({
    width: window.innerWidth,
    height: window.innerHeight
  });

  function updateMenuState(newAnimation) {
    allButtons.forEach((button) => {
      button.classList.remove("switch-button-current");
    });

    const mapBotones = {
      circle: circleBtn,
      wave: waveBtn,
      stagger: staggerBtn,
      grid: gridBtn,
      fan: fanBtn,
      depth: depthBtn
    };

    const activeButton = mapBotones[newAnimation] || circleBtn;
    if (activeButton) {
      activeButton.classList.add("switch-button-current");
    }
  }

  function generateCards() {
    carouselItemsEl.innerHTML = "";
    colaboracionesData.forEach((colab, index) => {
      const cardEl = document.createElement("div");
      cardEl.className = "carousel-item";
      cardEl.style.backgroundImage = `url('${colab.img}')`;
      cardEl.innerHTML = `
        <div class="card__number">${colab.numero}</div>
        <div class="card__label">${colab.artista} · ${colab.badge.split("·")[0].trim()}</div>
      `;

      // Diferenciar clic limpio de arrastre en modos rotatorios
      let startX = 0;
      let startY = 0;
      cardEl.addEventListener("pointerdown", (e) => {
        startX = e.clientX;
        startY = e.clientY;
        fueArrastrado = false;
      });

      cardEl.addEventListener("pointerup", (e) => {
        const dist = Math.hypot(e.clientX - startX, e.clientY - startY);
        if (dist < 6 && !fueArrastrado) {
          abrirArticuloColaboracion(index);
        }
      });

      carouselItemsEl.appendChild(cardEl);
      cardEl.style.zIndex = index + 1;
    });
    initializeZIndices();
  }

  function initializeZIndices() {
    const cards = gsap.utils.toArray(".carousel-item");
    originalZIndices = cards.map((card, index) => {
      const zIndex = 100 + (CONFIG.totalCards - index);
      gsap.set(card, { zIndex });
      return zIndex;
    });
  }

  function killActiveAnimations() {
    gsap.killTweensOf(".carousel-items");
    gsap.killTweensOf(".carousel-item");
    activeAnimations.forEach((animation) => {
      if (animation && animation.kill) {
        animation.kill();
      }
    });
    activeAnimations = [];
  }

  function setupCirclePositions(animated = true) {
    const cards = gsap.utils.toArray(".carousel-item");
    const viewportSize = Math.min(window.innerWidth, window.innerHeight);
    const radius = viewportSize * (CONFIG.wheelRadius / 100);
    const angleStep = (2 * Math.PI) / CONFIG.totalCards;

    const currentWheelRotation = gsap.getProperty(".carousel-items", "rotation") || 0;
    const currentWheelRotationRad = currentWheelRotation * (Math.PI / 180);

    const timeline = gsap.timeline();
    cards.forEach((card, i) => {
      const angle = i * angleStep + currentWheelRotationRad;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);

      if (animated) {
        timeline.to(
          card,
          {
            x,
            y,
            z: 0,
            rotation: -currentWheelRotation,
            rotationX: 0,
            rotationY: 0,
            scale: 0.72,
            duration: CONFIG.animations.transitionDuration,
            ease: "power2.inOut"
          },
          0
        );
      } else {
        gsap.set(card, {
          x,
          y,
          z: 0,
          rotation: -currentWheelRotation,
          rotationX: 0,
          rotationY: 0,
          scale: 0.72
        });
      }
    });
    return timeline;
  }

  function setupDraggable(target = ".carousel-items") {
    if (typeof Draggable === "undefined") return;

    if (draggableInstance) {
      draggableInstance.kill();
      draggableInstance = null;
    }

    carouselItemsEl.classList.add("draggable");
    draggableInstance = Draggable.create(target, {
      type: "rotation",
      inertia: typeof InertiaPlugin !== "undefined",
      throwResistance: 0.3,
      onDragStart() {
        fueArrastrado = true;
      },
      onDrag: updateCardRotations,
      onThrowUpdate: updateCardRotations
    })[0];

    gsap.set(target, { overwrite: "auto" });
  }

  function updateCardRotations() {
    if (isTransitioning) return;
    const wheelRotation = this.rotation || 0;
    const cards = gsap.utils.toArray(".carousel-item");

    if (currentAnimation === "circle") {
      cards.forEach((card) => {
        gsap.set(card, { rotation: -wheelRotation });
      });
    } else if (currentAnimation === "fan") {
      const viewport = getViewportSize();
      const maxFanAngle = Math.min(180, viewport.width / 5);
      const fanStartAngle = -maxFanAngle / 2;
      const fanEndAngle = maxFanAngle / 2;

      cards.forEach((card, index) => {
        const progress = index / (CONFIG.totalCards - 1);
        const fanAngle = fanStartAngle + progress * (fanEndAngle - fanStartAngle);
        gsap.set(card, { rotation: fanAngle - wheelRotation });
      });
    }
  }

  function setupWavePositions() {
    const cards = gsap.utils.toArray(".carousel-item");
    const viewport = getViewportSize();
    const cardWidth = parseFloat(getComputedStyle(document.body).getPropertyValue("--card-width")) || 340;
    const lineWidth = Math.min(viewport.width * 0.82, CONFIG.totalCards * cardWidth * 0.42);
    const cardSpacing = lineWidth / (CONFIG.totalCards - 1);
    const waveHeight = Math.min(viewport.height * 0.1, 80);

    const timeline = gsap.timeline();
    cards.forEach((card, index) => {
      const xPos = (index - (CONFIG.totalCards - 1) / 2) * cardSpacing;
      const yPos = Math.sin((index / (CONFIG.totalCards - 1)) * Math.PI * 2) * waveHeight;

      timeline.to(
        card,
        {
          x: xPos,
          y: yPos,
          z: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 0.68,
          duration: CONFIG.animations.transitionDuration,
          ease: "power2.inOut"
        },
        0
      );
    });
    return timeline;
  }

  function startWaveAnimation() {
    const cards = gsap.utils.toArray(".carousel-item");
    const viewport = getViewportSize();
    const waveHeight = Math.min(viewport.height * 0.1, 80);

    return gsap.to(cards, {
      y: (i) => {
        const normalizedIndex = i / (CONFIG.totalCards - 1);
        return Math.sin(normalizedIndex * Math.PI * 2 + Math.PI) * waveHeight;
      },
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }

  function setupStaggerPositions() {
    const cards = gsap.utils.toArray(".carousel-item");
    const cardWidth = parseFloat(getComputedStyle(document.body).getPropertyValue("--card-width")) || 340;
    const cardHeight = parseFloat(getComputedStyle(document.body).getPropertyValue("--card-height")) || 482;
    const rows = 3;
    const cols = 4;
    const xSpacing = cardWidth * 0.65;
    const ySpacing = cardHeight * 0.56;

    const timeline = gsap.timeline();
    cards.forEach((card, index) => {
      const row = Math.floor(index / cols);
      const col = index % cols;
      const xOffset = row % 2 === 1 ? xSpacing / 2 : 0;
      const xPos = (col - (cols - 1) / 2) * xSpacing + xOffset;
      const yPos = (row - (rows - 1) / 2) * ySpacing;

      timeline.to(
        card,
        {
          x: xPos,
          y: yPos,
          z: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 0.58,
          duration: CONFIG.animations.transitionDuration,
          ease: "power2.inOut"
        },
        0
      );
    });
    return timeline;
  }

  function setupStaggerMouseTracking() {
    const viewport = getViewportSize();
    const cardHeight = parseFloat(getComputedStyle(document.body).getPropertyValue("--card-height")) || 482;
    const rows = 3;
    const cols = 4;
    const ySpacing = cardHeight * 0.56;
    const maxOffset = 40;

    carouselContainerEl.onmousemove = (e) => {
      if (currentAnimation !== "stagger" || isTransitioning) return;
      const mouseY = e.clientY / viewport.height;
      const offset = (mouseY - 0.5) * -maxOffset;
      const cards = gsap.utils.toArray(".carousel-item");

      cards.forEach((card, index) => {
        const row = Math.floor(index / cols);
        const yPos = (row - (rows - 1) / 2) * ySpacing + offset;
        gsap.to(card, {
          y: yPos,
          duration: 0.8,
          ease: "power2.out"
        });
      });
    };
  }

  function setupGridPositions() {
    const cards = gsap.utils.toArray(".carousel-item");
    const viewport = getViewportSize();
    const cardWidth = parseFloat(getComputedStyle(document.body).getPropertyValue("--card-width")) || 340;
    const cardHeight = parseFloat(getComputedStyle(document.body).getPropertyValue("--card-height")) || 482;

    const rows = viewport.width > viewport.height ? 3 : 4;
    const cols = viewport.width > viewport.height ? 4 : 3;

    const scale = Math.min(
      0.62,
      (viewport.width * 0.85) / (cols * cardWidth * 1.15),
      (viewport.height * 0.75) / (rows * cardHeight * 1.15)
    );
    const xSpacing = cardWidth * scale * 1.18;
    const ySpacing = cardHeight * scale * 1.14;

    const timeline = gsap.timeline();
    cards.forEach((card, index) => {
      const col = index % cols;
      const row = Math.floor(index / cols);
      const xPos = (col - (cols - 1) / 2) * xSpacing;
      const yPos = (row - (rows - 1) / 2) * ySpacing;

      timeline.to(
        card,
        {
          x: xPos,
          y: yPos,
          z: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale,
          duration: CONFIG.animations.transitionDuration,
          ease: "power2.inOut"
        },
        0
      );
    });
    return timeline;
  }

  function setupFanPositions() {
    const cards = gsap.utils.toArray(".carousel-item");
    const viewport = getViewportSize();
    const maxFanAngle = Math.min(180, viewport.width / 5);
    const fanStartAngle = -maxFanAngle / 2;
    const fanEndAngle = maxFanAngle / 2;

    const timeline = gsap.timeline();
    cards.forEach((card, index) => {
      const progress = index / (CONFIG.totalCards - 1);
      const angle = fanStartAngle + progress * (fanEndAngle - fanStartAngle);
      const yOffset = Math.sin((progress - 0.5) * Math.PI) * 50;

      timeline.to(
        card,
        {
          x: 0,
          y: yOffset,
          z: 0,
          rotation: angle,
          rotationX: 0,
          rotationY: 0,
          scale: 0.78,
          duration: CONFIG.animations.transitionDuration,
          ease: "power2.inOut"
        },
        0
      );
    });
    return timeline;
  }

  function setup3DDepthPositions() {
    const cards = gsap.utils.toArray(".carousel-item");
    const viewport = getViewportSize();

    const positions = [
      { x: -viewport.width * 0.25, y: -viewport.height * 0.2, z: -200, scale: 0.9, rotX: -5, rotY: 5 },
      { x: viewport.width * 0.25, y: -viewport.height * 0.25, z: -300, scale: 0.85, rotX: -3, rotY: -4 },
      { x: -viewport.width * 0.3, y: viewport.height * 0.2, z: -400, scale: 0.8, rotX: 4, rotY: 6 },
      { x: viewport.width * 0.3, y: viewport.height * 0.25, z: -500, scale: 0.75, rotX: 5, rotY: -5 },
      { x: 0, y: -viewport.height * 0.3, z: -700, scale: 0.7, rotX: -6, rotY: 0 },
      { x: -viewport.width * 0.35, y: 0, z: -800, scale: 0.65, rotX: 0, rotY: 7 },
      { x: viewport.width * 0.35, y: 0, z: -900, scale: 0.6, rotX: 0, rotY: -7 },
      { x: 0, y: viewport.height * 0.3, z: -1000, scale: 0.55, rotX: 6, rotY: 0 },
      { x: -viewport.width * 0.2, y: -viewport.height * 0.15, z: -1200, scale: 0.5, rotX: -3, rotY: 3 },
      { x: viewport.width * 0.2, y: -viewport.height * 0.15, z: -1300, scale: 0.45, rotX: -3, rotY: -3 },
      { x: -viewport.width * 0.2, y: viewport.height * 0.15, z: -1400, scale: 0.4, rotX: 3, rotY: 3 },
      { x: viewport.width * 0.2, y: viewport.height * 0.15, z: -1500, scale: 0.35, rotX: 3, rotY: -3 }
    ];

    const timeline = gsap.timeline();
    cards.forEach((card, index) => {
      if (index >= positions.length) return;
      const pos = positions[index];
      const zIndex = 1000 - Math.round(Math.abs(pos.z));
      gsap.set(card, { zIndex });

      timeline.to(
        card,
        {
          x: pos.x,
          y: pos.y,
          z: pos.z,
          rotation: 0,
          rotationX: pos.rotX,
          rotationY: pos.rotY,
          scale: pos.scale,
          duration: CONFIG.animations.transitionDuration,
          ease: "power2.inOut"
        },
        0
      );
    });
    return timeline;
  }

  function setup3DDepthMouseTracking() {
    const viewport = getViewportSize();
    carouselContainerEl.onmousemove = (e) => {
      if (currentAnimation !== "depth" || isTransitioning) return;
      const mouseX = e.clientX / viewport.width - 0.5;
      const mouseY = e.clientY / viewport.height - 0.5;

      gsap.to(".carousel-items", {
        rotationY: mouseX * 4,
        rotationX: -mouseY * 4,
        duration: 1.2,
        ease: "power1.out"
      });
    };
  }

  function transitionToPattern(newPattern) {
    if (isTransitioning) return;
    isTransitioning = true;
    updateMenuState(newPattern);
    killActiveAnimations();

    if (draggableInstance) {
      draggableInstance.kill();
      draggableInstance = null;
    }

    carouselItemsEl.classList.remove("draggable");
    carouselContainerEl.onmousemove = null;

    const prevAnimation = currentAnimation;
    currentAnimation = newPattern;

    if (prevAnimation === "depth" && newPattern !== "depth") {
      const cards = gsap.utils.toArray(".carousel-item");
      cards.forEach((card, idx) => {
        if (idx < originalZIndices.length) {
          gsap.set(card, { zIndex: originalZIndices[idx] });
        }
      });
    }

    const timeline = gsap.timeline({
      onComplete: () => {
        isTransitioning = false;
        if (newPattern === "circle" || newPattern === "fan") {
          setupDraggable();
        } else if (newPattern === "wave") {
          const waveAnim = startWaveAnimation();
          if (waveAnim) activeAnimations.push(waveAnim);
        } else if (newPattern === "stagger") {
          setupStaggerMouseTracking();
        } else if (newPattern === "depth") {
          setup3DDepthMouseTracking();
        }
      }
    });
    activeAnimations.push(timeline);

    if (prevAnimation === "fan") {
      const cards = gsap.utils.toArray(".carousel-item");
      const normalizeTimeline = gsap.timeline();
      cards.forEach((card) => {
        normalizeTimeline.to(
          card,
          {
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            duration: CONFIG.animations.transitionDuration / 2,
            ease: "power2.inOut"
          },
          0
        );
      });
      timeline.add(normalizeTimeline);
      timeline.to({}, { duration: 0.1 });
    }

    if (newPattern !== "circle" && newPattern !== "fan") {
      if (prevAnimation === "circle" || prevAnimation === "fan") {
        timeline.set(".carousel-items", { rotationX: 0, rotationY: 0 });
      } else {
        timeline.set(".carousel-items", { rotation: 0, rotationX: 0, rotationY: 0 });
      }
    }

    let patternTimeline;
    switch (newPattern) {
      case "circle":
        patternTimeline = setupCirclePositions(true);
        if (patternTimeline) timeline.add(patternTimeline, 0);
        break;
      case "wave":
        patternTimeline = setupWavePositions();
        if (patternTimeline) timeline.add(patternTimeline, 0);
        if (prevAnimation === "circle" || prevAnimation === "fan") {
          timeline.to(".carousel-items", { rotation: 0, duration: CONFIG.animations.transitionDuration, ease: "power2.inOut" }, 0);
        }
        break;
      case "stagger":
        patternTimeline = setupStaggerPositions();
        if (patternTimeline) timeline.add(patternTimeline, 0);
        if (prevAnimation === "circle" || prevAnimation === "fan") {
          timeline.to(".carousel-items", { rotation: 0, duration: CONFIG.animations.transitionDuration, ease: "power2.inOut" }, 0);
        }
        break;
      case "grid":
        patternTimeline = setupGridPositions();
        if (patternTimeline) timeline.add(patternTimeline, 0);
        if (prevAnimation === "circle" || prevAnimation === "fan") {
          timeline.to(".carousel-items", { rotation: 0, duration: CONFIG.animations.transitionDuration, ease: "power2.inOut" }, 0);
        }
        break;
      case "fan":
        patternTimeline = setupFanPositions();
        if (patternTimeline) timeline.add(patternTimeline, 0);
        if (prevAnimation === "circle") {
          timeline.to(".carousel-items", { rotation: 0, duration: CONFIG.animations.transitionDuration, ease: "power2.inOut" }, 0);
        }
        break;
      case "depth":
        patternTimeline = setup3DDepthPositions();
        if (patternTimeline) timeline.add(patternTimeline, 0);
        if (prevAnimation === "circle" || prevAnimation === "fan") {
          timeline.to(".carousel-items", { rotation: 0, duration: CONFIG.animations.transitionDuration, ease: "power2.inOut" }, 0);
        }
        break;
    }
  }

  function initializeCarousel() {
    const cards = gsap.utils.toArray(".carousel-item");
    const totalCards = cards.length;

    gsap.set(cards, { x: 0, y: 0, z: 0, rotation: 0, scale: 0, opacity: 0 });
    gsap.set(".switch", { opacity: 0, visibility: "hidden" });

    const timeline = gsap.timeline({
      onComplete: () => {
        isTransitioning = false;
        setupDraggable();
        gsap.to(".switch", {
          opacity: 1,
          visibility: "visible",
          duration: 0.8,
          ease: "power2.inOut"
        });
      }
    });

    for (let i = 0; i < totalCards; i++) {
      const card = cards[i];
      const delay = (totalCards - 1 - i) * 0.08;
      gsap.set(card, { zIndex: 100 + (totalCards - 1 - i) });
      timeline.to(
        card,
        {
          opacity: 1,
          scale: 0.72,
          duration: 0.45,
          ease: "power2.out"
        },
        delay
      );
    }

    timeline.to({}, { duration: 0.25 });
    const circleTimeline = setupCirclePositions(true);
    timeline.add(circleTimeline);

    currentAnimation = "circle";
    activeAnimations.push(timeline);
    updateMenuState("circle");
    return timeline;
  }

  function resetCarousel() {
    killActiveAnimations();
    if (draggableInstance) {
      draggableInstance.kill();
      draggableInstance = null;
    }
    carouselContainerEl.onmousemove = null;
    gsap.set(".carousel-items", { rotation: 0, rotationX: 0, rotationY: 0 });

    gsap.to(".switch", {
      opacity: 0,
      visibility: "hidden",
      duration: 0.3,
      ease: "power2.inOut",
      onComplete: () => {
        generateCards();
        initializeCarousel();
      }
    });

    currentAnimation = "circle";
    isTransitioning = false;
    updateMenuState("circle");
  }

  function handleResize() {
    if (!isTransitioning) {
      transitionToPattern(currentAnimation);
    }
  }

  if (resetBtn) resetBtn.addEventListener("click", resetCarousel);
  if (circleBtn) circleBtn.addEventListener("click", () => transitionToPattern("circle"));
  if (waveBtn) waveBtn.addEventListener("click", () => transitionToPattern("wave"));
  if (staggerBtn) staggerBtn.addEventListener("click", () => transitionToPattern("stagger"));
  if (gridBtn) gridBtn.addEventListener("click", () => transitionToPattern("grid"));
  if (fanBtn) fanBtn.addEventListener("click", () => transitionToPattern("fan"));
  if (depthBtn) depthBtn.addEventListener("click", () => transitionToPattern("depth"));
  window.addEventListener("resize", handleResize);

  generateCards();
  initializeCarousel();
});