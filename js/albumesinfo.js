document.addEventListener('DOMContentLoaded', () => {
  // 1. Captura de elementos del DOM
  const carrusel = document.getElementById('carruselPosters');
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  const galeriaCompleta = document.getElementById('galeriaCompleta');
  const modalElemento = document.getElementById('modalAlbum');

  // Inicializar la ventana modal de Bootstrap de forma segura
  const modalBootstrap = (modalElemento && typeof bootstrap !== 'undefined')
    ? new bootstrap.Modal(modalElemento)
    : null;

  // 2. Array completo con los 28 álbumes, tracklists oficiales y videos oficiales de YouTube
  const postersData = [
    // --- 10 ÁLBUMES DESTACADOS (CARRUSEL SUPERIOR) ---
    {
      nombre: "Station to Station",
      anio: "1976",
      titulo: "Station to Station (1976)",
      img: "img/albumes/1976_stationtostation_bnw.jpg",
      texto: "Obra bisagra entre el soul de Young Americans y la electrónica experimental de Berlín. Introduce al personaje del Duque Blanco (The Thin White Duke).",
      canciones: [
        "Station to Station",
        "Golden Years",
        "Word on a Wing",
        "TVC 15",
        "Stay",
        "Wild Is the Wind"
      ],
      video: "https://www.youtube.com/embed/VbpMpRq6DV4",
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
      canciones: [
        "Speed of Life",
        "Breaking Glass",
        "What in the World",
        "Sound and Vision",
        "Always Crashing in the Same Car",
        "Be My Wife",
        "A New Career in a New Town",
        "Warszawa",
        "Art Decade",
        "Weeping Wall",
        "Subterraneans"
      ],
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
      canciones: [
        "Five Years",
        "Soul Love",
        "Moonage Daydream",
        "Starman",
        "It Ain't Easy",
        "Lady Stardust",
        "Star",
        "Hang On to Yourself",
        "Ziggy Stardust",
        "Suffragette City",
        "Rock 'n' Roll Suicide"
      ],
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
      canciones: [
        "Beauty and the Beast",
        "Joe the Lion",
        "\"Heroes\"",
        "Sons of the Silent Age",
        "Blackout",
        "V-2 Schneider",
        "Sense of Doubt",
        "Moss Garden",
        "Neuköln",
        "The Secret Life of Arabia"
      ],
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
      canciones: [
        "Changes",
        "Oh! You Pretty Things",
        "Eight Line Poem",
        "Life on Mars?",
        "Kooks",
        "Quicksand",
        "Fill Your Heart",
        "Andy Warhol",
        "Song for Bob Dylan",
        "Queen Bitch",
        "The Bewlay Brothers"
      ],
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
      canciones: [
        "★ (Blackstar)",
        "'Tis a Pity She Was a Whore",
        "Lazarus",
        "Sue (Or in a Season of Crime)",
        "Girl Loves Me",
        "Dollar Days",
        "I Can't Give Everything Away"
      ],
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
      canciones: [
        "It's No Game (No. 1)",
        "Up the Hill Backwards",
        "Scary Monsters (and Super Creeps)",
        "Ashes to Ashes",
        "Fashion",
        "Teenage Wildlife",
        "Scream Like a Baby",
        "Kingdom Come",
        "Because You're Young",
        "It's No Game (No. 2)"
      ],
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
      canciones: [
        "Watch That Man",
        "Aladdin Sane (1913-1938-197?)",
        "Drive-In Saturday",
        "Panic in Detroit",
        "Cracked Actor",
        "Time",
        "The Prettiest Star",
        "Let's Spend the Night Together",
        "The Jean Genie",
        "Lady Grinning Soul"
      ],
      video: "https://www.youtube.com/embed/kMYg_rw2s0s",
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
      canciones: [
        "Leon Takes Us Outside",
        "Outside",
        "The Hearts Filthy Lesson",
        "A Small Plot of Land",
        "Segue - Baby Grace (A Horrid Cassette)",
        "Hallo Spaceboy",
        "The Motel",
        "I Have Not Been to Oxford Town",
        "No Control",
        "Segue - Algeria Touchshriek",
        "The Voyeur of Utter Destruction (as Beauty)",
        "Segue - Ramona A. Stone / I Am with Name",
        "Wishful Beginnings",
        "We Prick You",
        "Segue - Nathan Adler",
        "I'm Deranged",
        "Thru' These Architects Eyes",
        "Segue - Nathan Adler",
        "Strangers When We Meet"
      ],
      video: "https://www.youtube.com/embed/76yQ0FVupaU",
      videoTitulo: "Video oficial: The Hearts Filthy Lesson",
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
      canciones: [
        "Future Legend",
        "Diamond Dogs",
        "Sweet Thing",
        "Candidate",
        "Sweet Thing (Reprise)",
        "Rebel Rebel",
        "Rock 'n' Roll with Me",
        "We Are the Dead",
        "1984",
        "Big Brother",
        "Chant of the Ever Circling Skeletal Family"
      ],
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
      canciones: [
        "Uncle Arthur",
        "Sell Me a Coat",
        "Rubber Band",
        "Love You till Tuesday",
        "There Is a Happy Land",
        "We Are Hungry Men",
        "When I Live My Dream",
        "Little Bombardier",
        "Silly Boy Blue",
        "Come and Buy My Toys",
        "Join the Gang",
        "She's Got Medals",
        "Maid of Bond Street",
        "Please Mr. Gravedigger"
      ],
      video: "https://www.youtube.com/embed/v2J2234_63A",
      videoTitulo: "Video oficial: Love You till Tuesday",
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
      canciones: [
        "Space Oddity",
        "Unwashed and Somewhat Slightly Dazed",
        "Don't Sit Down",
        "Letter to Hermione",
        "Cygnet Committee",
        "Janine",
        "An Occasional Dream",
        "Wild Eyed Boy from Freecloud",
        "God Knows I'm Good",
        "Memory of a Free Festival"
      ],
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
      canciones: [
        "The Width of a Circle",
        "All the Madmen",
        "Black Country Rock",
        "After All",
        "Running Gun Blues",
        "Saviour Machine",
        "She Shook Me Cold",
        "The Man Who Sold the World",
        "The Supermen"
      ],
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
      canciones: [
        "Rosalyn",
        "Here Comes the Night",
        "I Wish You Would",
        "See Emily Play",
        "Everything's Alright",
        "I Can't Explain",
        "Friday on My Mind",
        "Sorrow",
        "Don't Bring Me Down",
        "Shapes of Things",
        "Anyway, Anyhow, Anywhere",
        "Where Have All the Good Times Gone"
      ],
      video: "https://www.youtube.com/embed/6a_4V4B1l4k",
      videoTitulo: "Video oficial: Sorrow",
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
      canciones: [
        "Young Americans",
        "Win",
        "Fascination",
        "Right",
        "Somebody Up There Likes Me",
        "Across the Universe",
        "Can You Hear Me?",
        "Fame"
      ],
      video: "https://www.youtube.com/embed/Ypgdr1-B014",
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
      canciones: [
        "Fantastic Voyage",
        "African Night Flight",
        "Move On",
        "Yassassin",
        "Red Sails",
        "D.J.",
        "Look Back in Anger",
        "Boys Keep Swinging",
        "Repetition",
        "Red Money"
      ],
      video: "https://www.youtube.com/embed/W7-uC0LDllM",
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
      canciones: [
        "Modern Love",
        "China Girl",
        "Let's Dance",
        "Without You",
        "Ricochet",
        "Criminal World",
        "Cat People (Putting Out Fire)",
        "Shake It"
      ],
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
      canciones: [
        "Loving the Alien",
        "Don't Look Down",
        "God Only Knows",
        "Tonight",
        "Neighborhood Threat",
        "Blue Jean",
        "Tumble and Twirl",
        "I Keep Forgettin'",
        "Dancing with the Big Boys"
      ],
      video: "https://www.youtube.com/embed/n2d_H47A9nE",
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
      canciones: [
        "Day-In Day-Out",
        "Time Will Crawl",
        "Beat of Your Drum",
        "Never Let Me Down",
        "Zeroes",
        "Glass Spider",
        "Shining Star (Makin' My Love)",
        "New York's in Love",
        "'87 and Cry",
        "Too Dizzy",
        "Bang Bang"
      ],
      video: "https://www.youtube.com/embed/gPVrFAt0MhU",
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
      canciones: [
        "Heaven's in Here",
        "Tin Machine",
        "Prisoner of Love",
        "Crack City",
        "I Can't Read",
        "Under the God",
        "Amazing",
        "Working Class Hero",
        "Bus Stop",
        "Pretty Thing",
        "Video Crime",
        "Run",
        "Sacrifice Yourself",
        "Baby Can Dance"
      ],
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
      canciones: [
        "Baby Universal",
        "One Shot",
        "You Belong in Rock n' Roll",
        "If There Is Something",
        "Amlapura",
        "Betty Wrong",
        "You Can't Talk",
        "Stateside",
        "Shopping for Girls",
        "A Big Hurt",
        "Sorry",
        "Goodbye Mr. Ed"
      ],
      video: "https://www.youtube.com/embed/W5N_A_2wD5o",
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
      canciones: [
        "The Wedding",
        "You've Been Around",
        "I Feel Free",
        "Black Tie White Noise",
        "Jump They Say",
        "Nite Flights",
        "Pallas Athena",
        "Miracle Goodnight",
        "Don't Let Me Down & Down",
        "Looking for Lester",
        "I Know It's Gonna Happen Someday",
        "The Wedding Song"
      ],
      video: "https://www.youtube.com/embed/xPzv1-161mY",
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
      canciones: [
        "Buddha of Suburbia",
        "Sex and the Church",
        "South Horizon",
        "The Mysteries",
        "Bleed Like a Craze, Dad",
        "Strangers When We Meet",
        "Dead Against It",
        "Untitled No. 1",
        "Ian Fish, U.K. Heir",
        "Buddha of Suburbia (con Lenny Kravitz)"
      ],
      video: "https://www.youtube.com/embed/48d4j-qG01k",
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
      canciones: [
        "Little Wonder",
        "Looking for Satellites",
        "Battle for Britain (The Letter)",
        "Seven Years in Tibet",
        "Dead Man Walking",
        "Telling Lies",
        "The Last Thing You Should Do",
        "I'm Afraid of Americans",
        "Law (Earthlings on Fire)"
      ],
      video: "https://www.youtube.com/embed/u7APmRkatEU",
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
      canciones: [
        "Thursday's Child",
        "Something in the Air",
        "Survive",
        "If I'm Dreaming My Life",
        "Seven",
        "What's Really Happening?",
        "The Pretty Things Are Going to Hell",
        "New Angels of Promise",
        "Brilliant Adventure",
        "The Dreamers"
      ],
      video: "https://www.youtube.com/embed/6g2g2j-l3P0",
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
      canciones: [
        "Sunday",
        "Cactus",
        "Slip Away",
        "Slow Burn",
        "Afraid",
        "I've Been Waiting for You",
        "I Would Be Your Slave",
        "I Took a Trip on a Gemini Spaceship",
        "5:15 The Angels Have Gone",
        "Everyone Says 'Hi'",
        "A Better Future",
        "Heathen (The Rays)"
      ],
      video: "https://www.youtube.com/embed/4_9Z7G6g2a4",
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
      canciones: [
        "New Killer Star",
        "Pablo Picasso",
        "Never Get Old",
        "The Loneliest Guy",
        "Looking for Water",
        "She'll Drive the Big Car",
        "Days",
        "Fall Dog Bombs the Moon",
        "Try Some, Buy Some",
        "Reality",
        "Bring Me the Disco King"
      ],
      video: "https://www.youtube.com/embed/m-0zN-4_5gA",
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
      canciones: [
        "The Next Day",
        "Dirty Boys",
        "The Stars (Are Out Tonight)",
        "Love Is Lost",
        "Where Are We Now?",
        "Valentine's Day",
        "If You Can See Me",
        "I'd Rather Be High",
        "Boss of Me",
        "Dancing Out in Space",
        "How Does the Grass Grow?",
        "(You Will) Set the World on Fire",
        "You Feel So Lonely You Could Die",
        "Heat"
      ],
      video: "https://www.youtube.com/embed/QWtsV50_-p4",
      videoTitulo: "Video oficial: Where Are We Now?",
      spotify: "https://open.spotify.com/search/The%20Next%20Day%20David%20Bowie",
      youtube: "https://music.youtube.com/search?q=The+Next+Day+David+Bowie",
      apple: "https://music.apple.com/search?term=The%20Next%20Day%20David%20Bowie"
    }
  ];

  // 3. Función central que carga los datos y abre la ventana emergente
  function abrirDetalleAlbum(index) {
    const album = postersData[index];
    if (!album) return;

    const tituloEl = document.getElementById('detalleTitulo');
    const imgEl = document.getElementById('detalleImg');
    const textoEl = document.getElementById('detalleTexto');
    const listaPlaylist = document.getElementById('detallePlaylist');
    const videoTituloEl = document.getElementById('detalleVideoTitulo');
    const videoEl = document.getElementById('detalleVideo');
    const spotifyEl = document.getElementById('linkSpotify');
    const youtubeEl = document.getElementById('linkYoutube');
    const appleEl = document.getElementById('linkApple');

    if (tituloEl) tituloEl.textContent = album.titulo;
    if (imgEl) {
      imgEl.src = album.img;
      imgEl.alt = album.titulo;
    }
    if (textoEl) textoEl.textContent = album.texto;

    if (listaPlaylist) {
      listaPlaylist.innerHTML = '';
      album.canciones.forEach((tema) => {
        const li = document.createElement('li');
        li.textContent = tema;
        listaPlaylist.appendChild(li);
      });
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
      const videoEl = document.getElementById('detalleVideo');
      if (videoEl) videoEl.src = '';
    });
  }

  // 4. Generar las 28 tarjetas de la galería inferior ordenadas cronológicamente (1967 a 2016)
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

  // 5. Interacción de clic para los 10 destacados del carrusel superior
  if (carrusel) {
    const postersCarrusel = carrusel.querySelectorAll('.poster-item');
    postersCarrusel.forEach((poster, index) => {
      poster.addEventListener('click', () => {
        abrirDetalleAlbum(index);
      });
    });

    // 6. Botones de flechas del carrusel
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