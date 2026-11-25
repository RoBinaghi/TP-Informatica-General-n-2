document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. CAPTURA DE ELEMENTOS DEL DOM (CENTRALIZADA)
  // =========================================================================

  // --- A. Elementos de la página principal (carrusel y galería inferior) ---
  const carrusel = document.getElementById('carruselPosters');
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
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
  // 2. ARRAY DE DATOS DE LOS 28 ÁLBUMES (CON IDENTIFICADOR DE ARTÍCULO PARA API)
  // =========================================================================
  const postersData = [
    // --- 10 ÁLBUMES DESTACADOS (CARRUSEL SUPERIOR) ---
    {
      nombre: "Station to Station",
      anio: "1976",
      titulo: "Station to Station (1976)",
      wikiPage: "Station_to_Station",
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
      wikiPage: "Low_(David_Bowie_album)",
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
      wikiPage: "The_Rise_and_Fall_of_Ziggy_Stardust_and_the_Spiders_from_Mars",
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
      wikiPage: "Heroes_(David_Bowie_album)",
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
      wikiPage: "Hunky_Dory",
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
      wikiPage: "Blackstar_(album)",
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
      wikiPage: "Scary_Monsters_(and_Super_Creeps)",
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
      wikiPage: "Aladdin_Sane",
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
      wikiPage: "Outside_(David_Bowie_album)",
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
      wikiPage: "Diamond_Dogs",
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
      wikiPage: "David_Bowie_(1967_album)",
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
      wikiPage: "David_Bowie_(1969_album)",
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
      wikiPage: "The_Man_Who_Sold_the_World_(album)",
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
      wikiPage: "Pin_Ups",
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
      wikiPage: "Young_Americans",
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
      wikiPage: "Lodger_(album)",
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
      wikiPage: "Let's_Dance_(David_Bowie_album)",
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
      wikiPage: "Tonight_(David_Bowie_album)",
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
      wikiPage: "Never_Let_Me_Down",
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
      wikiPage: "Tin_Machine_(album)",
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
      wikiPage: "Tin_Machine_II",
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
      wikiPage: "Black_Tie_White_Noise",
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
      wikiPage: "The_Buddha_of_Suburbia_(album)",
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
      wikiPage: "Earthling_(David_Bowie_album)",
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
      wikiPage: "Hours_(David_Bowie_album)",
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
      wikiPage: "Heathen_(David_Bowie_album)",
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
      wikiPage: "Reality_(David_Bowie_album)",
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
      wikiPage: "The_Next_Day",
      img: "img/albumes/2013_thenextday.jpg",
      texto: "Lanzado por sorpresa tras diez años de silencio discográfico. Su portada interviene la fotografía original del álbum 'Heroes' (1977) con un recuadro blanco.",
      video: "https://www.youtube.com/embed/QWtsV50_-p4",
      videoTitulo: "Video oficial: Where Are We Now?",
      spotify: "https://open.spotify.com/search/The%20Next%20Day%20David%20Bowie",
      youtube: "https://music.youtube.com/search?q=The+Next+Day+David+Bowie",
      apple: "https://music.apple.com/search?term=The%20Next%20Day%20David%20Bowie"
    }
  ];

  // Caché en memoria para almacenar las respuestas JSON ya procesadas
  const cacheCanciones = {};

  // =========================================================================
  // 3. FUNCIONES PARA LA VENTANA EMERGENTE Y CONSULTA A LA API (MEDIAWIKI)
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

  // Consulta la API pública de Wikipedia (MediaWiki API con origin=* y redirects=1)
  async function obtenerCancionesAPI(album, contenedorDOM) {
    contenedorDOM.innerHTML = '<li class="text-secondary list-unstyled">Cargando lista de temas desde la API...</li>';

    // Si el álbum ya fue consultado previamente, reutilizamos el array guardado
    if (cacheCanciones[album.titulo]) {
      renderizarCanciones(cacheCanciones[album.titulo], contenedorDOM);
      return;
    }

    try {
      const API_WIKI = 'https://en.wikipedia.org/w/api.php';
      const paginaCodificada = encodeURIComponent(album.wikiPage);

      // Paso 1: Obtener las secciones del artículo del álbum (con seguimiento de redirecciones)
      const urlSecciones = `${API_WIKI}?action=parse&page=${paginaCodificada}&prop=sections&redirects=1&format=json&origin=*`;
      const respSecciones = await fetch(urlSecciones);

      if (!respSecciones.ok) {
        throw new Error(`Error HTTP: ${respSecciones.status}`);
      }

      const datosSecciones = await respSecciones.json();

      if (!datosSecciones.parse || !datosSecciones.parse.sections) {
        throw new Error('No se encontró la estructura del álbum en la API.');
      }

      // Buscar variantes de encabezado ("Track listing", "Tracklist", "Songs")
      const seccionTracks = datosSecciones.parse.sections.find((sec) => {
        if (!sec.line) return false;
        const tituloSec = sec.line.toLowerCase();
        return (
          tituloSec.includes('track listing') ||
          tituloSec.includes('tracklist') ||
          tituloSec.includes('songs')
        );
      });

      if (!seccionTracks) {
        throw new Error('No se encontró la sección de canciones.');
      }

      // Paso 2: Obtener el contenido de la sección de canciones en formato JSON
      const urlContenido = `${API_WIKI}?action=parse&page=${paginaCodificada}&section=${seccionTracks.index}&prop=text&redirects=1&format=json&origin=*`;
      const respContenido = await fetch(urlContenido);

      if (!respContenido.ok) {
        throw new Error(`Error HTTP al leer pistas: ${respContenido.status}`);
      }

      const datosContenido = await respContenido.json();
      const htmlTexto = datosContenido.parse.text['*'];

      // Parsear la respuesta para extraer exclusivamente las pistas de la edición estándar
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlTexto, 'text/html');
      const tablas = doc.querySelectorAll('table.tracklist');

      const cancionesObtenidas = [];

      if (tablas.length > 0) {
        tablas.forEach((tabla) => {
          // Detenerse antes de tablas de bonus tracks o reediciones posteriores
          const caption = tabla.querySelector('caption');
          const tituloTabla = caption ? caption.textContent.toLowerCase() : '';
          if (
            tituloTabla.includes('bonus') ||
            tituloTabla.includes('reissue') ||
            tituloTabla.includes('cd ') ||
            tituloTabla.includes('rykodisc') ||
            tituloTabla.includes('virgin') ||
            tituloTabla.includes('parlophone')
          ) {
            return;
          }

          const filas = tabla.querySelectorAll('tr');
          filas.forEach((fila) => {
            const celdas = fila.querySelectorAll('td');
            const encabezadoFila = fila.querySelector('th[scope="row"]');
            if (encabezadoFila && celdas.length > 0) {
              // Limpiar comillas y notas al pie ([1], [a], etc.)
              const nombreLimpio = celdas[0].textContent
                .replace(/\[.*?\]/g, '')
                .replace(/^"|"$/g, '')
                .trim();
              if (nombreLimpio) {
                cancionesObtenidas.push(nombreLimpio);
              }
            }
          });
        });
      }

      // Respaldo: si el artículo estructura las pistas mediante listas ordenadas (<ol>) en lugar de tabla
      if (cancionesObtenidas.length === 0) {
        const listasOrdenadas = doc.querySelectorAll('ol');
        listasOrdenadas.forEach((ol) => {
          // Tomar únicamente las caras A y B de la edición original (primeras dos listas)
          if (cancionesObtenidas.length >= 16) return;
          const items = ol.querySelectorAll(':scope > li');
          items.forEach((item) => {
            const textoItem = item.textContent
              .replace(/\[.*?\]/g, '')
              .split('–')[0]
              .split('(')[0]
              .replace(/^"|"$/g, '')
              .trim();
            if (textoItem) {
              cancionesObtenidas.push(textoItem);
            }
          });
        });
      }

      if (cancionesObtenidas.length === 0) {
        throw new Error('No se pudieron extraer pistas válidas.');
      }

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
  // 4. INTERACCIÓN Y RENDERIZADO EN LA PÁGINA PRINCIPAL
  // =========================================================================

  // Generar las 28 tarjetas de la galería inferior ordenadas cronológicamente (1967 a 2016)
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

  // Interacción de clic para los 10 destacados del carrusel superior
  if (carrusel) {
    const postersCarrusel = carrusel.querySelectorAll('.poster-item');
    postersCarrusel.forEach((poster, index) => {
      poster.addEventListener('click', () => {
        abrirDetalleAlbum(index);
      });
    });

    // Botones de flechas del carrusel
    if (btnNext) {
      btnNext.addEventListener('click', () => {
        const primerItem = carrusel.querySelector('.poster-item');
        const paso = primerItem ? primerItem.offsetWidth + 16 : 236;
        carrusel.scrollBy({ left: paso, behavior: 'smooth' });
      });
    }

    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        const primerItem = carrusel.querySelector('.poster-item');
        const paso = primerItem ? primerItem.offsetWidth + 16 : 236;
        carrusel.scrollBy({ left: -paso, behavior: 'smooth' });
      });
    }
  }
});