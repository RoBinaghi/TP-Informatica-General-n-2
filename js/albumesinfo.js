document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. CAPTURA DE ELEMENTOS DEL DOM (CENTRALIZADA)
  // =========================================================================

  // --- A. Elementos del carrusel 3D y galería inferior ---
  const contenedorCarrusel3D = document.getElementById('carrusel3D');
  const btnPrev = document.querySelector('.carrusel-3d-section .prev');
  const btnNext = document.querySelector('.carrusel-3d-section .next');
  const galeriaCompleta = document.getElementById('galeriaCompleta');

  // --- B. Elementos de la ventana emergente de datos (modal de Bootstrap) ---
  const modalElemento = document.getElementById('modalAlbum');
  const tituloEl = document.getElementById('detalleTitulo');
  const imgEl = document.getElementById('detalleImg');
  const textoEl = document.getElementById('detalleTexto');
  const listaPlaylist = document.getElementById('detallePlaylist');
  const videoTituloEl = document.getElementById('detalleVideoTitulo');
  const videoEl = document.getElementById('detalleVideo');
  const spotifyEl = document.getElementById('linkSpotify');
  const youtubeEl = document.getElementById('linkYoutube');
  const appleEl = document.getElementById('linkApple');

  // Inicializar la ventana modal de Bootstrap de forma segura
  const modalBootstrap = (modalElemento && typeof bootstrap !== 'undefined')
    ? new bootstrap.Modal(modalElemento)
    : null;

  // =========================================================================
  // 2. ARRAY DE DATOS DE LOS 28 ÁLBUMES
  // =========================================================================
  const postersData = [
    // --- 10 ÁLBUMES DESTACADOS (CARRUSEL SUPERIOR 3D) ---
    {
      nombre: "Station to Station",
      anio: "1976",
      titulo: "Station to Station (1976)",
      img: "img/albumes/1976_stationtostation_bnw.jpg",
      texto: "Obra bisagra entre el soul de Young Americans y la electrónica experimental de Berlín. Introduce al personaje del Duque Blanco (The Thin White Duke).",
      video: "https://www.youtube.com/embed/YsqlXkkEKxI",
      videoTitulo: "Video oficial: Wild Is the Wind",
      spotify: "https://open.spotify.com/search/Station%20to%20Station%20David%20Bowie",
      youtube: "https://music.youtube.com/search?q=Station+to+Station+David+Bowie",
      apple: "https://music.apple.com/search?term=Station%20to%20Station%20David%20Bowie"
    },
    {
      nombre: "Low",
      anio: "1977",
      titulo: "Low (1977)",
      img: "img/albumes/1977_low.jpg",
      texto: "Primera entrega de la Trilogía de Berlín junto a Brian Eno y Tony Visconti. Combina canciones fragmentadas en la cara A y piezas ambientales e instrumentales en la cara B.",
      video: "https://www.youtube.com/embed/WoDamvrfUbQ",
      videoTitulo: "Video oficial: Sound and Vision",
      spotify: "https://open.spotify.com/search/Low%20David%20Bowie",
      youtube: "https://music.youtube.com/search?q=Low+David+Bowie",
      apple: "https://music.apple.com/search?term=Low%20David%20Bowie"
    },
    {
      nombre: "The Rise and Fall of Ziggy Stardust",
      anio: "1972",
      titulo: "The Rise and Fall of Ziggy Stardust and the Spiders from Mars (1972)",
      img: "img/albumes/1972_ziggystardust.jpg",
      texto: "Álbum conceptual que narra la historia de Ziggy Stardust, una estrella de rock andrógina y extraterrestre enviada a la Tierra antes de un desastre apocalíptico.",
      video: "https://www.youtube.com/embed/aBKEt3MhNMM",
      videoTitulo: "Video oficial: Starman (Top of the Pops, 1972)",
      spotify: "https://open.spotify.com/search/Ziggy%20Stardust%20David%20Bowie",
      youtube: "https://music.youtube.com/search?q=Ziggy+Stardust+David+Bowie",
      apple: "https://music.apple.com/search?term=Ziggy%20Stardust%20David%20Bowie"
    },
    {
      nombre: "\"Heroes\"",
      anio: "1977",
      titulo: "\"Heroes\" (1977)",
      img: "img/albumes/1977_heroes.jpg",
      texto: "Único álbum de la trilogía grabado íntegramente en los estudios Hansa junto al Muro de Berlín, con la participación destacada del guitarrista Robert Fripp.",
      video: "https://www.youtube.com/embed/lXgkuM2NhYI",
      videoTitulo: "Video oficial: \"Heroes\"",
      spotify: "https://open.spotify.com/search/Heroes%20David%20Bowie",
      youtube: "https://music.youtube.com/search?q=Heroes+David+Bowie",
      apple: "https://music.apple.com/search?term=Heroes%20David%20Bowie"
    },
    {
      nombre: "Hunky Dory",
      anio: "1971",
      titulo: "Hunky Dory (1971)",
      img: "img/albumes/1971_hunkydory.jpg",
      texto: "Obra centrada en el piano de Rick Wakeman y la composición melódica, con homenajes explícitos a figuras como Andy Warhol, Bob Dylan y The Velvet Underground.",
      video: "https://www.youtube.com/embed/AZKcl4-tcuo",
      videoTitulo: "Video oficial: Life on Mars?",
      spotify: "https://open.spotify.com/search/Hunky%20Dory%20David%20Bowie",
      youtube: "https://music.youtube.com/search?q=Hunky+Dory+David+Bowie",
      apple: "https://music.apple.com/search?term=Hunky%20Dory%20David%20Bowie"
    },
    {
      nombre: "Blackstar",
      anio: "2016",
      titulo: "Blackstar (2016)",
      img: "img/albumes/2016_blackstar.jpg",
      texto: "Vigesimoctavo y último álbum de estudio, publicado dos días antes de su fallecimiento. Grabado junto a un cuarteto de jazz neoyorquino liderado por Donny McCaslin.",
      video: "https://www.youtube.com/embed/kszLwBaC4Sw",
      videoTitulo: "Video oficial: ★ (Blackstar)",
      spotify: "https://open.spotify.com/search/Blackstar%20David%20Bowie",
      youtube: "https://music.youtube.com/search?q=Blackstar+David+Bowie",
      apple: "https://music.apple.com/search?term=Blackstar%20David%20Bowie"
    },
    {
      nombre: "Scary Monsters (and Super Creeps)",
      anio: "1980",
      titulo: "Scary Monsters (and Super Creeps) (1980)",
      img: "img/albumes/1980_scarymonsters.jpg",
      texto: "Equilibra la experimentación sonora de finales de los setenta con estructuras pop accesibles. Retoma la historia de Major Tom en el clásico 'Ashes to Ashes'.",
      video: "https://www.youtube.com/embed/HyMm4rJemtI",
      videoTitulo: "Video oficial: Ashes to Ashes",
      spotify: "https://open.spotify.com/search/Scary%20Monsters%20David%20Bowie",
      youtube: "https://music.youtube.com/search?q=Scary+Monsters+David+Bowie",
      apple: "https://music.apple.com/search?term=Scary%20Monsters%20David%20Bowie"
    },
    {
      nombre: "Aladdin Sane",
      anio: "1973",
      titulo: "Aladdin Sane (1973)",
      img: "img/albumes/1973_aladdinsane.jpg",
      texto: "Descrito por Bowie como 'Ziggy va a América'. Compuesto durante su gira por Estados Unidos, incorpora piano vanguardista de Mike Garson y un sonido glam más crudo.",
      video: "https://www.youtube.com/embed/kMYg_Ra4cr8",
      videoTitulo: "Video oficial: The Jean Genie",
      spotify: "https://open.spotify.com/search/Aladdin%20Sane%20David%20Bowie",
      youtube: "https://music.youtube.com/search?q=Aladdin+Sane+David+Bowie",
      apple: "https://music.apple.com/search?term=Aladdin%20Sane%20David%20Bowie"
    },
    {
      nombre: "1.Outside",
      anio: "1995",
      titulo: "1.Outside (1995)",
      img: "img/albumes/1995_1outside.jpg",
      texto: "Reencuentro con Brian Eno. Álbum conceptual de rock industrial y art rock ambientado en un futuro distópico donde el asesinato es considerado una forma de arte.",
      video: "https://www.youtube.com/embed/6H0XPzASySs",
      videoTitulo: "Audio oficial: The Hearts Filthy Lesson",
      spotify: "https://open.spotify.com/search/1.Outside%20David%20Bowie",
      youtube: "https://music.youtube.com/search?q=1+Outside+David+Bowie",
      apple: "https://music.apple.com/search?term=1.Outside%20David%20Bowie"
    },
    {
      nombre: "Diamond Dogs",
      anio: "1974",
      titulo: "Diamond Dogs (1974)",
      img: "img/albumes/1974_diamonddogs.jpg",
      texto: "Originalmente concebido como una adaptación teatral de la novela 1984 de George Orwell, presenta un escenario distópico y el personaje de Halloween Jack.",
      video: "https://www.youtube.com/embed/Sa6bI_95G9I",
      videoTitulo: "Video oficial: Rebel Rebel",
      spotify: "https://open.spotify.com/search/Diamond%20Dogs%20David%20Bowie",
      youtube: "https://music.youtube.com/search?q=Diamond+Dogs+David+Bowie",
      apple: "https://music.apple.com/search?term=Diamond%20Dogs%20David%20Bowie"
    },

    // --- RESTO DE LA DISCOGRAFÍA COMPLETA (ÍNDICES 10 AL 27) ---
    {
      nombre: "David Bowie",
      anio: "1967",
      titulo: "David Bowie (1967)",
      img: "img/albumes/1967_davidbowie_uk.jpg",
      texto: "Álbum debut homónimo grabado bajo el sello Deram. Presenta un estilo pop barroco y teatral influenciado por el music hall británico.",
      video: "https://www.youtube.com/embed/a8q9dhsE8mM",
      videoTitulo: "Audio oficial: Love You till Tuesday",
      spotify: "https://open.spotify.com/search/David%20Bowie%201967",
      youtube: "https://music.youtube.com/search?q=David+Bowie+1967",
      apple: "https://music.apple.com/search?term=David%20Bowie%201967"
    },
    {
      nombre: "Space Oddity",
      anio: "1969",
      titulo: "Space Oddity (1969)",
      img: "img/albumes/1969_davidbowie_01.jpg",
      texto: "Segundo álbum de estudio, publicado originalmente como David Bowie. Combina folk psicodélico y rock progresivo, destacando el sencillo homónimo inspirado en la llegada a la Luna.",
      video: "https://www.youtube.com/embed/iYYRH4apXDo",
      videoTitulo: "Video oficial: Space Oddity",
      spotify: "https://open.spotify.com/search/David%20Bowie%20Space%20Oddity",
      youtube: "https://music.youtube.com/search?q=David+Bowie+Space+Oddity",
      apple: "https://music.apple.com/search?term=David%20Bowie%20Space%20Oddity"
    },
    {
      nombre: "The Man Who Sold the World",
      anio: "1970",
      titulo: "The Man Who Sold the World (1970)",
      img: "img/albumes/1970_themanwhosoldtheworld_01.jpg",
      texto: "Marca un giro hacia el hard rock y el heavy metal temprano junto al guitarrista Mick Ronson, abordando temáticas oscuras y psicológicas.",
      video: "https://www.youtube.com/embed/u3MX-rUtS6M",
      videoTitulo: "Audio oficial: The Man Who Sold the World",
      spotify: "https://open.spotify.com/search/The%20Man%20Who%20Sold%20the%20World",
      youtube: "https://music.youtube.com/search?q=The+Man+Who+Sold+the+World+Bowie",
      apple: "https://music.apple.com/search?term=The%20Man%20Who%20Sold%20the%20World"
    },
    {
      nombre: "Pin Ups",
      anio: "1973",
      titulo: "Pin Ups (1973)",
      img: "img/albumes/1973_pinups.jpg",
      texto: "Álbum de versiones dedicado a las bandas londinenses favoritas de Bowie de mediados de los años sesenta, como The Who, Pink Floyd, The Kinks y The Yardbirds.",
      video: "https://www.youtube.com/embed/RmQ2OJgzkMg",
      videoTitulo: "Audio oficial: Sorrow",
      spotify: "https://open.spotify.com/search/Pin%20Ups%20David%20Bowie",
      youtube: "https://music.youtube.com/search?q=Pin+Ups+David+Bowie",
      apple: "https://music.apple.com/search?term=Pin%20Ups%20David%20Bowie"
    },
    {
      nombre: "Young Americans",
      anio: "1975",
      titulo: "Young Americans (1975)",
      img: "img/albumes/1975_youngamericans.jpg",
      texto: "Grabado en Filadelfia, abandona el glam rock para sumergirse en el soul y el funk estadounidense, estilo que Bowie denominó 'plastic soul'. Incluye la colaboración de John Lennon.",
      video: "https://www.youtube.com/embed/Ypgq0qdgVZA",
      videoTitulo: "Audio oficial: Fame",
      spotify: "https://open.spotify.com/search/Young%20Americans%20David%20Bowie",
      youtube: "https://music.youtube.com/search?q=Young+Americans+David+Bowie",
      apple: "https://music.apple.com/search?term=Young%20Americans%20David%20Bowie"
    },
    {
      nombre: "Lodger",
      anio: "1979",
      titulo: "Lodger (1979)",
      img: "img/albumes/1979_lodger.jpg",
      texto: "Cierre de la Trilogía de Berlín, grabado en Suiza y Nueva York. Explora ritmos de músicas del mundo y técnicas compositivas experimentales mediante las tarjetas 'Estrategias Oblicuas'.",
      video: "https://www.youtube.com/embed/2KcOs70dZAw",
      videoTitulo: "Video oficial: Boys Keep Swinging",
      spotify: "https://open.spotify.com/search/Lodger%20David%20Bowie",
      youtube: "https://music.youtube.com/search?q=Lodger+David+Bowie",
      apple: "https://music.apple.com/search?term=Lodger%20David%20Bowie"
    },
    {
      nombre: "Let's Dance",
      anio: "1983",
      titulo: "Let's Dance (1983)",
      img: "img/albumes/1983_letsdance.jpg",
      texto: "Coproducido por Nile Rodgers, es el disco más vendido de su carrera. Fusiona dance-rock, funk y pop con la guitarra blues de Stevie Ray Vaughan.",
      video: "https://www.youtube.com/embed/VbD_kBJc_gI",
      videoTitulo: "Video oficial: Let's Dance",
      spotify: "https://open.spotify.com/search/Let's%20Dance%20David%20Bowie",
      youtube: "https://music.youtube.com/search?q=Lets+Dance+David+Bowie",
      apple: "https://music.apple.com/search?term=Let's%20Dance%20David%20Bowie"
    },
    {
      nombre: "Tonight",
      anio: "1984",
      titulo: "Tonight (1984)",
      img: "img/albumes/1984_tonight.jpg",
      texto: "Continuación de la etapa pop comercial de los ochenta, con influencias de reggae y R&B y colaboraciones vocales con Tina Turner e Iggy Pop.",
      video: "https://www.youtube.com/embed/NZnryZ5rDbs",
      videoTitulo: "Video oficial: Blue Jean",
      spotify: "https://open.spotify.com/search/Tonight%20David%20Bowie",
      youtube: "https://music.youtube.com/search?q=Tonight+David+Bowie",
      apple: "https://music.apple.com/search?term=Tonight%20David%20Bowie"
    },
    {
      nombre: "Never Let Me Down",
      anio: "1987",
      titulo: "Never Let Me Down (1987)",
      img: "img/albumes/1987_neverletmedown.jpg",
      texto: "Álbum de rock electrónico que precedió a la teatral gira mundial Glass Spider Tour.",
      video: "https://www.youtube.com/embed/YHU28e8hZkA",
      videoTitulo: "Video oficial: Time Will Crawl",
      spotify: "https://open.spotify.com/search/Never%20Let%20Me%20Down%20David%20Bowie",
      youtube: "https://music.youtube.com/search?q=Never+Let+Me+Down+David+Bowie",
      apple: "https://music.apple.com/search?term=Never%20Let%20Me%20Down%20David%20Bowie"
    },
    {
      nombre: "Tin Machine",
      anio: "1989",
      titulo: "Tin Machine (1989)",
      img: "img/albumes/1989_tinmachine.jpg",
      texto: "Proyecto de banda de hard rock y proto-grunge formado junto a Reeves Gabrels, Tony Sales y Hunt Sales, renunciando temporalmente al estatus de solista.",
      video: "https://www.youtube.com/embed/3f0O_W2z6d0",
      videoTitulo: "Video oficial: Under the God",
      spotify: "https://open.spotify.com/search/Tin%20Machine%201989",
      youtube: "https://music.youtube.com/search?q=Tin+Machine+1989",
      apple: "https://music.apple.com/search?term=Tin%20Machine"
    },
    {
      nombre: "Tin Machine II",
      anio: "1991",
      titulo: "Tin Machine II (1991)",
      img: "img/albumes/1991_tinmachine_2_uk.jpg",
      texto: "Segundo y último álbum de estudio del cuarteto Tin Machine, con un sonido de rock alternativo crudo y directo.",
      video: "https://www.youtube.com/embed/w4xeHYI4A2k",
      videoTitulo: "Video oficial: You Belong in Rock n' Roll",
      spotify: "https://open.spotify.com/search/Tin%20Machine%20II",
      youtube: "https://music.youtube.com/search?q=Tin+Machine+II",
      apple: "https://music.apple.com/search?term=Tin%20Machine%20II"
    },
    {
      nombre: "Black Tie White Noise",
      anio: "1993",
      titulo: "Black Tie White Noise (1993)",
      img: "img/albumes/1993_blacktiewhitenoise.jpg",
      texto: "Regreso como solista bajo la producción de Nile Rodgers, incorporando elementos de jazz, hip-hop, música electrónica y saxofón tocado por el propio Bowie.",
      video: "https://www.youtube.com/embed/xPZWgCLMsW8",
      videoTitulo: "Video oficial: Jump They Say",
      spotify: "https://open.spotify.com/search/Black%20Tie%20White%20Noise",
      youtube: "https://music.youtube.com/search?q=Black+Tie+White+Noise+Bowie",
      apple: "https://music.apple.com/search?term=Black%20Tie%20White%20Noise"
    },
    {
      nombre: "The Buddha of Suburbia",
      anio: "1993",
      titulo: "The Buddha of Suburbia (1993)",
      img: "img/albumes/1993_thebuddhaofsuburbia.jpg",
      texto: "Álbum inspirado en la música compuesta para la miniserie homónima de la BBC basada en la novela de Hanif Kureishi.",
      video: "https://www.youtube.com/embed/xHPIAFaKd1I",
      videoTitulo: "Video oficial: Buddha of Suburbia",
      spotify: "https://open.spotify.com/search/The%20Buddha%20of%20Suburbia%20Bowie",
      youtube: "https://music.youtube.com/search?q=The+Buddha+of+Suburbia+Bowie",
      apple: "https://music.apple.com/search?term=The%20Buddha%20of%20Suburbia"
    },
    {
      nombre: "Earthling",
      anio: "1997",
      titulo: "Earthling (1997)",
      img: "img/albumes/1997_earthling.jpg",
      texto: "Incursión en la música electrónica británica de los noventa, fusionando drum and bass, jungle y rock industrial.",
      video: "https://www.youtube.com/embed/LT3cERVRoQo",
      videoTitulo: "Video oficial: I'm Afraid of Americans",
      spotify: "https://open.spotify.com/search/Earthling%20David%20Bowie",
      youtube: "https://music.youtube.com/search?q=Earthling+David+Bowie",
      apple: "https://music.apple.com/search?term=Earthling%20David%20Bowie"
    },
    {
      nombre: "'hours...'",
      anio: "1999",
      titulo: "'hours...' (1999)",
      img: "img/albumes/1999_hours.jpg",
      texto: "Primer álbum de un artista de gran trayectoria disponible íntegramente para descarga digital en internet antes de su lanzamiento físico.",
      video: "https://www.youtube.com/embed/gfOKDB0ChQk",
      videoTitulo: "Video oficial: Thursday's Child",
      spotify: "https://open.spotify.com/search/Hours%20David%20Bowie",
      youtube: "https://music.youtube.com/search?q=Hours+David+Bowie",
      apple: "https://music.apple.com/search?term=Hours%20David%20Bowie"
    },
    {
      nombre: "Heathen",
      anio: "2002",
      titulo: "Heathen (2002)",
      img: "img/albumes/2002_heathen.jpg",
      texto: "Marca su regreso a trabajar con el productor Tony Visconti tras más de dos décadas, con un tono reflexivo e introspectivo sobre el cambio de siglo.",
      video: "https://www.youtube.com/embed/NSbZ8CmXyQ8",
      videoTitulo: "Video oficial: Slow Burn",
      spotify: "https://open.spotify.com/search/Heathen%20David%20Bowie",
      youtube: "https://music.youtube.com/search?q=Heathen+David+Bowie",
      apple: "https://music.apple.com/search?term=Heathen%20David%20Bowie"
    },
    {
      nombre: "Reality",
      anio: "2003",
      titulo: "Reality (2003)",
      img: "img/albumes/2003_reality.jpg",
      texto: "Álbum de rock directo grabado en Nueva York, acompañado por la extensa gira mundial A Reality Tour.",
      video: "https://www.youtube.com/embed/fwH1g2fW6Pc",
      videoTitulo: "Video oficial: New Killer Star",
      spotify: "https://open.spotify.com/search/Reality%20David%20Bowie",
      youtube: "https://music.youtube.com/search?q=Reality+David+Bowie",
      apple: "https://music.apple.com/search?term=Reality%20David%20Bowie"
    },
    {
      nombre: "The Next Day",
      anio: "2013",
      titulo: "The Next Day (2013)",
      img: "img/albumes/2013_thenextday.jpg",
      texto: "Lanzado por sorpresa tras diez años de silencio discográfico. Su portada interviene la fotografía original del álbum 'Heroes' (1977) con un recuadro blanco.",
      video: "https://www.youtube.com/embed/QWtsV50_-p4",
      videoTitulo: "Video oficial: Where Are We Now?",
      spotify: "https://open.spotify.com/search/The%20Next%20Day%20David%20Bowie",
      youtube: "https://music.youtube.com/search?q=The+Next+Day+David+Bowie",
      apple: "https://music.apple.com/search?term=The%20Next%20Day%20David%20Bowie"
    }
  ];

  // Caché en memoria para almacenar las listas de temas ya obtenidas
  const cacheCanciones = {};

  // =========================================================================
  // 3. FUNCIONES PARA LA VENTANA EMERGENTE Y CONSULTA A DEEZER API (JSONP)
  // =========================================================================

  // Dibuja los ítems <li> de canciones dentro del modal
  function renderizarCanciones(listaCanciones, contenedorDOM) {
    contenedorDOM.innerHTML = '';
    listaCanciones.forEach((nombreTema) => {
      const li = document.createElement('li');
      li.textContent = nombreTema;
      contenedorDOM.appendChild(li);
    });
  }

  // Función genérica para ejecutar consultas JSONP a Deezer sin bloqueo CORS
  function consultarDeezerJSONP(urlBase) {
    return new Promise((resolve, reject) => {
      const nombreCallback = `deezerCb_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
      const script = document.createElement('script');

      const temporizador = setTimeout(() => {
        limpiar();
        reject(new Error('Tiempo de espera agotado al consultar la API.'));
      }, 8000);

      function limpiar() {
        clearTimeout(temporizador);
        delete window[nombreCallback];
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      }

      window[nombreCallback] = (respuesta) => {
        limpiar();
        resolve(respuesta);
      };

      script.onerror = () => {
        limpiar();
        reject(new Error('Error de red al conectar con Deezer API.'));
      };

      const separador = urlBase.includes('?') ? '&' : '?';
      script.src = `${urlBase}${separador}output=jsonp&callback=${nombreCallback}`;
      document.body.appendChild(script);
    });
  }

  async function obtenerCancionesAPI(album, contenedorDOM) {
    contenedorDOM.innerHTML = '<li class="text-secondary list-unstyled">Cargando lista de temas desde la API...</li>';

    // Si el álbum ya fue consultado previamente, reutilizamos el array guardado en caché
    if (cacheCanciones[album.titulo]) {
      renderizarCanciones(cacheCanciones[album.titulo], contenedorDOM);
      return;
    }

    try {
      const artista = album.nombre.includes('Tin Machine') ? 'Tin Machine' : 'David Bowie';
      const nombreLimpio = album.nombre.replace(/"/g, '').replace(/'/g, '');

      // Paso 1: Buscar el álbum activo en el catálogo regional de Deezer
      const query = encodeURIComponent(`artist:"${artista}" album:"${nombreLimpio}"`);
      const datosBusqueda = await consultarDeezerJSONP(`https://api.deezer.com/search/album?q=${query}`);

      if (!datosBusqueda.data || datosBusqueda.data.length === 0) {
        throw new Error('Álbum no disponible en el catálogo.');
      }

      const idAlbumActivo = datosBusqueda.data[0].id;

      // Paso 2: Obtener la lista completa de pistas (limit=50 evita el truncamiento)
      const datosPistas = await consultarDeezerJSONP(`https://api.deezer.com/album/${idAlbumActivo}/tracks?limit=50`);

      if (datosPistas.error) {
        throw new Error(datosPistas.error.message || 'Error al obtener las pistas.');
      }

      if (!datosPistas.data || datosPistas.data.length === 0) {
        throw new Error('Sin pistas registradas para este álbum.');
      }

      const cancionesObtenidas = datosPistas.data.map((pista) => pista.title);

      // Guardar en caché y renderizar en pantalla
      cacheCanciones[album.titulo] = cancionesObtenidas;
      renderizarCanciones(cancionesObtenidas, contenedorDOM);

    } catch (error) {
      console.error('Detalle técnico del error de API:', error);
      contenedorDOM.innerHTML = `<li class="text-warning list-unstyled">No se pudo cargar la lista de temas (${error.message}).</li>`;
    }
  }

  // Carga los datos en los elementos capturados del modal y lo muestra
  function abrirDetalleAlbum(index) {
    const album = postersData[index];
    if (!album) return;

    if (tituloEl) tituloEl.textContent = album.titulo;
    if (imgEl) {
      imgEl.src = album.img;
      imgEl.alt = album.titulo;
    }
    if (textoEl) textoEl.textContent = album.texto;

    if (listaPlaylist) {
      obtenerCancionesAPI(album, listaPlaylist);
    }

    if (videoTituloEl) videoTituloEl.textContent = album.videoTitulo;
    if (videoEl) videoEl.src = album.video;

    if (spotifyEl) spotifyEl.href = album.spotify;
    if (youtubeEl) youtubeEl.href = album.youtube;
    if (appleEl) appleEl.href = album.apple;

    if (modalBootstrap) {
      modalBootstrap.show();
    }
  }

  // Detener la reproducción del video al cerrar la ventana modal
  if (modalElemento) {
    modalElemento.addEventListener('hidden.bs.modal', () => {
      if (videoEl) videoEl.src = '';
    });
  }

  // =========================================================================
  // 4. CARRUSEL 3D COVERFLOW (GSAP) Y GALERÍA CRONOLÓGICA INFERIOR
  // =========================================================================

  // --- A. Generar las 28 tarjetas de la galería inferior (1967 a 2016) ---
  if (galeriaCompleta) {
    const discografiaOrdenada = postersData
      .map((album, indexOriginal) => ({ ...album, indexOriginal }))
      .sort((a, b) => Number(a.anio) - Number(b.anio));

    discografiaOrdenada.forEach((album) => {
      const col = document.createElement('div');
      col.className = 'col';

      col.innerHTML = `
        <div class="tarjeta-album shadow-sm">
          <img src="${album.img}" alt="${album.titulo}">
          <div class="overlay-album text-white">
            <h3 class="h5 fw-bold mb-1">${album.nombre}</h3>
            <span class="badge-anio">${album.anio}</span>
          </div>
        </div>
      `;

      col.addEventListener('click', () => {
        abrirDetalleAlbum(album.indexOriginal);
      });

      galeriaCompleta.appendChild(col);
    });
  }

  // --- B. Inicializar el carrusel 3D con los primeros 10 álbumes destacados ---
  if (contenedorCarrusel3D && typeof gsap !== 'undefined') {
    if (typeof Draggable !== 'undefined') {
      gsap.registerPlugin(Draggable);
    }

    const destacados = postersData.slice(0, 10);
    const controlesEl = contenedorCarrusel3D.querySelector('.controls');

    // Crear dinámicamente las 10 cajas .box con las portadas locales
    destacados.forEach((album, idx) => {
      const box = document.createElement('div');
      box.className = 'box';
      box.style.setProperty('--src', `url('../${album.img}')`);
      box.dataset.index = idx;

      const img = document.createElement('img');
      img.src = album.img;
      img.alt = album.titulo;
      img.draggable = false;

      box.appendChild(img);
      contenedorCarrusel3D.insertBefore(box, controlesEl);
    });

    const BOXES = gsap.utils.toArray('.carrusel-3d-section .box');
    gsap.set(BOXES, { xPercent: -50, yPercent: -50, display: 'block' });

    const STAGGER = 0.1;
    const DURATION = 1;
    const OFFSET = 0;

    const LOOP = gsap.timeline({
      paused: true,
      repeat: -1,
      ease: 'none',
    });

    const SHIFTS = [...BOXES, ...BOXES, ...BOXES];

    SHIFTS.forEach((BOX, index) => {
      const BOX_TL = gsap
        .timeline()
        .set(BOX, {
          xPercent: 200,
          rotateY: -50,
          opacity: 0,
          scale: 0.5,
        })
        .to(BOX, { opacity: 1, scale: 1, duration: 0.15 }, 0)
        .to(BOX, { opacity: 0, scale: 0.5, duration: 0.15 }, 0.85)
        .fromTo(
          BOX,
          { xPercent: 200 },
          { xPercent: -300, duration: 1, immediateRender: false, ease: 'power1.inOut' },
          0
        )
        .fromTo(
          BOX,
          { rotateY: -50 },
          { rotateY: 50, immediateRender: false, duration: 1, ease: 'power4.inOut' },
          0
        )
        .to(BOX, { z: 100, scale: 1.2, duration: 0.15, repeat: 1, yoyo: true }, 0.35)
        .fromTo(
          BOX,
          { zIndex: 1 },
          { zIndex: BOXES.length, repeat: 1, yoyo: true, ease: 'none', duration: 0.5, immediateRender: false },
          0
        );

      LOOP.add(BOX_TL, index * STAGGER);
    });

    const CYCLE_DURATION = STAGGER * BOXES.length;
    const START_TIME = CYCLE_DURATION + DURATION * 0.5 + OFFSET;

    const LOOP_HEAD = gsap.fromTo(
      LOOP,
      { totalTime: START_TIME },
      { totalTime: `+=${CYCLE_DURATION}`, duration: 1, ease: 'none', repeat: -1, paused: true }
    );

    const PLAYHEAD = { position: 0 };
    const POSITION_WRAP = gsap.utils.wrap(0, LOOP_HEAD.duration());

    // Renderizar de inmediato el cuadro inicial (position = 0) para que se vean las portadas al cargar
    LOOP_HEAD.totalTime(POSITION_WRAP(0));

    const SCRUB = gsap.to(PLAYHEAD, {
      position: 0,
      onUpdate: () => {
        LOOP_HEAD.totalTime(POSITION_WRAP(PLAYHEAD.position));
      },
      paused: true,
      duration: 0.35,
      ease: 'power3.out',
    });

    const SNAP = gsap.utils.snap(1 / BOXES.length);
    let fueArrastrado = false;

    const moverAPosicion = (nuevaPos) => {
      const posAjustada = SNAP(nuevaPos);
      SCRUB.vars.position = posAjustada;
      SCRUB.invalidate().restart();
    };

    const NEXT = () => moverAPosicion(SCRUB.vars.position - 1 / BOXES.length);
    const PREV = () => moverAPosicion(SCRUB.vars.position + 1 / BOXES.length);

    if (btnNext) btnNext.addEventListener('click', NEXT);
    if (btnPrev) btnPrev.addEventListener('click', PREV);

    document.addEventListener('keydown', (event) => {
      if (modalElemento && modalElemento.classList.contains('show')) return;
      if (event.code === 'ArrowLeft' || event.code === 'KeyA') NEXT();
      if (event.code === 'ArrowRight' || event.code === 'KeyD') PREV();
    });

    // Clic en tarjetas del carrusel: centra si está al costado; abre modal si ya está al frente
    contenedorCarrusel3D.addEventListener('click', (e) => {
      if (fueArrastrado) {
        fueArrastrado = false;
        return;
      }
      const BOX = e.target.closest('.box');
      if (!BOX) return;

      const TARGET = BOXES.indexOf(BOX);
      const CURRENT = gsap.utils.wrap(
        0,
        BOXES.length,
        Math.round(BOXES.length * SCRUB.vars.position)
      );

      if (TARGET === CURRENT) {
        abrirDetalleAlbum(TARGET);
      } else {
        let BUMP = TARGET - CURRENT;
        if (TARGET > CURRENT && TARGET - CURRENT > BOXES.length * 0.5) {
          BUMP = (BOXES.length - BUMP) * -1;
        }
        if (CURRENT > TARGET && CURRENT - TARGET > BOXES.length * 0.5) {
          BUMP = BOXES.length + BUMP;
        }
        moverAPosicion(SCRUB.vars.position + BUMP * (1 / BOXES.length));
      }
    });

    // Arrastre horizontal con mouse o pantalla táctil
    if (typeof Draggable !== 'undefined') {
      Draggable.create('.drag-proxy', {
        type: 'x',
        trigger: '.carrusel-3d-section .boxes',
        onPress() {
          this.startOffset = SCRUB.vars.position;
          fueArrastrado = false;
        },
        onDrag() {
          if (Math.abs(this.x - this.startX) > 6) {
            fueArrastrado = true;
          }
          SCRUB.vars.position = this.startOffset + (this.startX - this.x) * 0.0015;
          SCRUB.invalidate().restart();
        },
        onDragEnd() {
          moverAPosicion(SCRUB.vars.position);
        },
      });
    }
  }
});