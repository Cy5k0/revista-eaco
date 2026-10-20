/**
 * ==========================================================================
 * VOCES EN PAPEL - REVISTA ESCOLAR (ESCUELA DE ARTES Y CULTURA DE OSORNO)
 * data.js: Datos estructurados de la revista escolar (Edición #2)
 * ==========================================================================
 */

const REVISTA_DATA = {
  edicion: {
    numero: 2,
    fecha: "Marzo - Abril 2026",
    escuela: "Escuela de Artes y Cultura de Osorno",
    taller: "Taller de Periodismo Escolar",
    docente: "Lucila García"
  },

  reportesInvestigacion: [
    {
      id: "inv-1",
      titulo: "¿Cómo afecta el cambio climático a Chile y al mundo?",
      autor: "Exequiel Álvarez",
      curso: "7mo Básico B",
      categoria: "Medio Ambiente",
      badgeClass: "badge-medioambiente",
      avatarImg: "assets/img/staff/Excequiel .webp",
      extracto: "Un análisis exhaustivo sobre el avance de la sequía, los cambios de temperatura en el sur de Chile y los compromisos globales para salvar nuestro ecosistema.",
      urlPdf: "https://drive.google.com/file/d/1xMozciXSC4UZ462oalzATzI5CXXCuziV/view?usp=sharing"
    },
    {
      id: "inv-2",
      titulo: "¿Cómo funciona un cohete?",
      autor: "Diego Matheus",
      curso: "6to Básico",
      categoria: "Ciencia",
      badgeClass: "badge-ciencia",
      avatarImg: "assets/img/staff/Diego Matheus.webp",
      extracto: "Descubre los principios de la propulsión aeroespacial, las leyes de Newton y la fascinante tecnología que permite a la humanidad viajar fuera de la Tierra.",
      urlPdf: "https://drive.google.com/file/d/13eXmibtDH0bIxB6yBccQNRm8hYVhzQf_/view?usp=sharing"
    },
    {
      id: "inv-3",
      titulo: "¿Cómo influye la inteligencia artificial en el futuro del trabajo?",
      autor: "Emilio Villegas Catalán",
      curso: "7mo Básico A",
      categoria: "Tecnología",
      badgeClass: "badge-tecnologia",
      avatarImg: "assets/img/staff/Emilio Villegas.webp",
      extracto: "Una mirada profunda y reflexiva sobre cómo los sistemas de IA están cambiando los empleos, qué oficios nacerán y cómo nos preparamos los jóvenes.",
      urlPdf: "https://drive.google.com/file/d/1DUZJIvnfhXVr0VV_G9gzLsUpOdMBVgIj/view?usp=sharing"
    },
    {
      id: "inv-4",
      titulo: "¿Debería regularse la IA en la creación artística?",
      autor: "Apolo Vargas",
      curso: "7mo Básico A",
      categoria: "Arte & Debate",
      badgeClass: "badge-tecnologia",
      avatarImg: "assets/img/staff/Apolo Vargas.webp",
      extracto: "Desde la Escuela de Artes y Cultura, analizamos si las computadoras pueden crear arte auténtico y los derechos de los artistas humanos.",
      urlPdf: "https://drive.google.com/file/d/1FEfC9k8hzj-83BKR0-BePFmzLUgTQWlP/view?usp=sharing"
    },
    {
      id: "inv-5",
      titulo: "¿Es buena idea prohibir las redes sociales a menores de edad?",
      autor: "Cristóbal Manríquez",
      curso: "7mo Básico A",
      categoria: "Sociedad",
      badgeClass: "badge-sociedad",
      avatarImg: "assets/img/staff/Cristóbal Manríquez.webp",
      extracto: "Un debate urgente sobre la salud mental, el acoso digital, la concentración y los límites del acceso tecnológico en la infancia y adolescencia.",
      urlPdf: "https://drive.google.com/file/d/1FEfC9k8hzj-83BKR0-BePFmzLUgTQWlP/view?usp=sharing"
    },
    {
      id: "inv-6",
      titulo: "Desigualdad Social: Miradas desde la Educación",
      autor: "Nicolás Pérez",
      curso: "8vo Básico A",
      categoria: "Sociedad",
      badgeClass: "badge-sociedad",
      avatarImg: "assets/img/staff/Nicolás Catalán.webp",
      extracto: "Reflexión crítica sobre las brechas económicas y sociales en nuestro entorno, y cómo la educación pública es el motor para la justicia y la dignidad.",
      urlPdf: "https://drive.google.com/file/d/1F0ZvcLc8ie2xSVOrE_tRXfrveuY2ENdK/view?usp=sharing"
    },
    {
      id: "inv-7",
      titulo: "El Misterio de las Pirámides de Egipto",
      autor: "Yurianis Pérez",
      curso: "6to Básico",
      categoria: "Historia",
      badgeClass: "badge-historia",
      avatarImg: "assets/img/staff/Magdalena Vera.webp",
      extracto: "Arqueología, astronomía y teorías sorprendentes sobre cómo se construyeron los monumentos más imponentes de la antigüedad.",
      urlPdf: "https://drive.google.com/file/d/1X8VzB9XUppr-66OYwpBbV7yVHvf6xh0z/view?usp=sharing"
    },
    {
      id: "inv-8",
      titulo: "La importancia de las abejas para la vida",
      autor: "Maximiliano González",
      curso: "Taller Periodismo",
      categoria: "Medio Ambiente",
      badgeClass: "badge-medioambiente",
      avatarImg: "assets/img/staff/Maximiliano González.webp",
      extracto: "Sin polinizadores no hay futuro. Una investigación sobre el rol crucial de las abejas en el equilibrio biológico y la producción de alimentos.",
      urlPdf: "https://drive.google.com/file/d/1z1TM9KUV0RC2rlo6UFGv0mC4nAZxSsAl/view?usp=sharing"
    },
    {
      id: "inv-9",
      titulo: "Los inventos que cambiaron el mundo",
      autor: "Agustín Barría",
      curso: "6to Básico",
      categoria: "Innovación",
      badgeClass: "badge-ciencia",
      avatarImg: "assets/img/staff/Alex Klenner.webp",
      extracto: "Desde la rueda y la imprenta hasta la electricidad y el internet: un viaje por las grandes creaciones que marcaron un antes y un después.",
      urlPdf: "https://drive.google.com/file/d/1Yv1m-P_sA3bd-sdioQdUanSM2dubrGeJ/view?usp=sharing"
    }
  ],

  opiniones: [
    {
      id: "op-1",
      autor: "Esteban Aburto",
      curso: "5to Básico",
      avatarImg: "assets/img/staff/Esteban Aburto.webp",
      titulo: "Opinión sobre el uso del celular en la sala de clases",
      cita: "«El celular puede ser una herramienta para buscar información al instante, pero cuando suena en clases distrae a los compañeros y corta la explicación de los profesores. Debe haber reglas claras.»",
      urlPdf: "https://drive.google.com/file/d/1bXdMJuQVY7ib80-UnRV45pyJCaoM9qfn/view?usp=sharing"
    },
    {
      id: "op-2",
      autor: "Helena Alvarado",
      curso: "6to Básico",
      avatarImg: "assets/img/staff/Francisca Mancilla.webp",
      titulo: "El celular y la convivencia en nuestros recreos",
      cita: "«Si todos estamos pegados a la pantalla en el patio, dejamos de jugar, de conversar y de mirarnos a los ojos. El recreo debe ser un espacio para compartir en comunidad.»",
      urlPdf: "https://drive.google.com/file/d/1kX-QkjKcH0SXL6l_G1leKH04ap3MuYYM/view?usp=sharing"
    }
  ],

  quienSoy: [
    { nombre: "Alan Villegas", curso: "Taller Periodismo", avatar: "assets/img/staff/Alan Villegas.webp", urlPdf: "https://drive.google.com/file/d/1Rj-G5nEHnlsAZIxeOljQnrdbx6PrR3mb/view?usp=sharing" },
    { nombre: "Álvaro Quintana", curso: "Taller Periodismo", avatar: "assets/img/staff/Álvaro Quintana.webp", urlPdf: "https://drive.google.com/file/d/1C02221XtpL9pU5FEvhpC2eO7AnUWl5T5/view?usp=sharing" },
    { nombre: "Apolo Vargas", curso: "Taller Periodismo", avatar: "assets/img/staff/Apolo Vargas.webp", urlPdf: "https://drive.google.com/file/d/193DJnGneHa9OoCNS0i3RovsEaBPr-SFj/view?usp=sharing" },
    { nombre: "Ian Hidalgo Olavarría", curso: "Taller Periodismo", avatar: "assets/img/staff/Ian Hidalgo.webp", urlPdf: "https://drive.google.com/file/d/1vm8L8qCK4h0wo7KZEMT5UqZFINzMEN59/view?usp=sharing" },
    { nombre: "Joaquín Oyarzún", curso: "Taller Periodismo", avatar: "assets/img/staff/Joaquín Oyarzún.webp", urlPdf: "https://drive.google.com/file/d/1tiY40DjMjIzWwo7YqpAGQIo_6VJG1lOn/view?usp=sharing" },
    { nombre: "Leonela Matheus", curso: "Taller Periodismo", avatar: "assets/img/staff/Leonela Matheus.webp", urlPdf: "https://drive.google.com/file/d/1VwnqFl46anxGf8Xzj1d8eakoZnU7v_s4/view?usp=sharing" },
    { nombre: "Matías Altamirano", curso: "Taller Periodismo", avatar: "assets/img/staff/Matías Altamirano.webp", urlPdf: "https://drive.google.com/file/d/19iSqWgJZ_kVOmcHW42AfA4nIDerKce_W/view?usp=sharing" },
    { nombre: "Matías Pérez", curso: "Taller Periodismo", avatar: "assets/img/staff/Matías Pérez_.webp", urlPdf: "https://drive.google.com/file/d/1XNWZ_6G6uEKtOH3_jNJICg7H1FdMxRae/view?usp=sharing" },
    { nombre: "Nelson Mihelic", curso: "Taller Periodismo", avatar: "assets/img/staff/Lucas Maldonado.webp", urlPdf: "https://drive.google.com/file/d/1Od08LbgBDH4aBXwebb10MDisXQEx7_nU/view?usp=sharing" }
  ],

  proyectosTecnologia: [
    {
      titulo: "Proyecto de Innovación Tecnológica Escolar 01",
      descripcion: "Diseño y aplicación de soluciones prácticas creadas por estudiantes en la asignatura de Tecnología.",
      urlPdf: "https://drive.google.com/file/d/1mlJsNjkkSWbfrWJ31PvF8bwI86kYaTdY/view?usp=sharing"
    },
    {
      titulo: "Proyecto de Innovación Tecnológica Escolar 02",
      descripcion: "Prototipos, modelos sostenibles y pensamiento de diseño elaborado en nuestras aulas.",
      urlPdf: "https://drive.google.com/file/d/1W_Y6Kw7W_mxxL2zjJffvyX8cXdnYV-jz/view?usp=sharing"
    }
  ],

  staff: [
    { nombre: "Alan Villegas", rol: "Redactor Estudiantil", foto: "assets/img/staff/Alan Villegas.webp" },
    { nombre: "Alex Klenner", rol: "Redactor e Investigador", foto: "assets/img/staff/Alex Klenner.webp" },
    { nombre: "Alfonsina Boldt", rol: "Diseño y Redacción", foto: "assets/img/staff/alfonsina boldt_.webp" },
    { nombre: "Álvaro Quintana", rol: "Redactor Estudiantil", foto: "assets/img/staff/Álvaro Quintana.webp" },
    { nombre: "Ángel Sánchez", rol: "Redactor y Fotografía", foto: "assets/img/staff/Ángel Sánchez.webp" },
    { nombre: "Apolo Vargas", rol: "Debate y Opinión", foto: "assets/img/staff/Apolo Vargas.webp" },
    { nombre: "Constanza Durán", rol: "Reportera Escolar", foto: "assets/img/staff/Constanza Durán.webp" },
    { nombre: "Cristóbal Manríquez", rol: "Investigación Digital", foto: "assets/img/staff/Cristóbal Manríquez.webp" },
    { nombre: "Dante Aburto", rol: "Redactor Escolar", foto: "assets/img/staff/Dante Aburto.webp" },
    { nombre: "Diego Matheus", rol: "Ciencia y Espacio", foto: "assets/img/staff/Diego Matheus.webp" },
    { nombre: "Emilio Villegas", rol: "Tecnología e IA", foto: "assets/img/staff/Emilio Villegas.webp" },
    { nombre: "Emily Miralles", rol: "Reportera Cultural", foto: "assets/img/staff/Emily Miralles.webp" },
    { nombre: "Esperanza Ollivet-Besson", rol: "Redacción Creativa", foto: "assets/img/staff/esperanza ollivet-besson_.webp" },
    { nombre: "Esteban Aburto", rol: "Columna de Opinión", foto: "assets/img/staff/Esteban Aburto.webp" },
    { nombre: "Exequiel Álvarez", rol: "Medio Ambiente y Clima", foto: "assets/img/staff/Excequiel .webp" },
    { nombre: "Francisca Mancilla", rol: "Arte y Cultura", foto: "assets/img/staff/Francisca Mancilla.webp" },
    { nombre: "Ian Hidalgo", rol: "Identidad y Crónica", foto: "assets/img/staff/Ian Hidalgo.webp" },
    { nombre: "Isidora Meneses", rol: "Reportera Estudiantil", foto: "assets/img/staff/Isidora Meneses.webp" },
    { nombre: "Joaquín Oyarzún", rol: "Redacción y Deportes", foto: "assets/img/staff/Joaquín Oyarzún.webp" },
    { nombre: "Laura Daniel", rol: "Periodismo Escolar", foto: "assets/img/staff/Laura Daniel.webp" },
    { nombre: "Leonela Matheus", rol: "Literatura y Crónica", foto: "assets/img/staff/Leonela Matheus.webp" },
    { nombre: "Lucas Maldonado", rol: "Redactor Escolar", foto: "assets/img/staff/Lucas Maldonado.webp" },
    { nombre: "Magdalena Vera", rol: "Historia y Patrimonio", foto: "assets/img/staff/Magdalena Vera.webp" },
    { nombre: "Matías Altamirano", rol: "Redactor Estudiantil", foto: "assets/img/staff/Matías Altamirano.webp" },
    { nombre: "Matías Pérez", rol: "Crónica y Reportajes", foto: "assets/img/staff/Matías Pérez_.webp" },
    { nombre: "Maximiliano Améstica", rol: "Redactor Escolar", foto: "assets/img/staff/Maximilano Améstica.webp" },
    { nombre: "Maximiliano González", rol: "Biodiversidad y Ecología", foto: "assets/img/staff/Maximiliano González.webp" },
    { nombre: "Moisés González", rol: "Redactor Escolar", foto: "assets/img/staff/Moises González.webp" },
    { nombre: "Nahuel Lemuy", rol: "Cultura y Tradiciones", foto: "assets/img/staff/nahuel lemuy.webp" },
    { nombre: "Nicolás Catalán", rol: "Investigación Social", foto: "assets/img/staff/Nicolás Catalán.webp" },
    { nombre: "Rubén Peña", rol: "Periodismo y Comunidad", foto: "assets/img/staff/Rubén Peña.webp" },
    { nombre: "Smiljan Martinovic", rol: "Redactor Estudiantil", foto: "assets/img/staff/Smiljan Martinovic.webp" },
    { nombre: "Tomás Vilugrón", rol: "Redactor y Deportes", foto: "assets/img/staff/Tomás Vilugrón.webp" }
  ],

  galerias: [
    // Trafkintu
    { cat: "trafkintu", catLabel: "Trafkintu", titulo: "Ceremonia de Intercambio de Semillas", src: "assets/img/galerias/trafkintu/IMG_0747.webp" },
    { cat: "trafkintu", catLabel: "Trafkintu", titulo: "Rogativa Inicial (Llellipun)", src: "assets/img/galerias/trafkintu/IMG_0750.webp" },
    { cat: "trafkintu", catLabel: "Trafkintu", titulo: "Muestra Comunitaria de Saberes", src: "assets/img/galerias/trafkintu/IMG_0756.webp" },
    { cat: "trafkintu", catLabel: "Trafkintu", titulo: "Encuentro Mapuche en la Escuela", src: "assets/img/galerias/trafkintu/IMG_0767.webp" },
    { cat: "trafkintu", catLabel: "Trafkintu", titulo: "Transmisión Intergeneracional (Nütram)", src: "assets/img/galerias/trafkintu/IMG_0766.webp" },
    { cat: "trafkintu", catLabel: "Trafkintu", titulo: "Semillas Criollas y Plantas Nativas", src: "assets/img/galerias/trafkintu/IMG_0735.webp" },
    { cat: "trafkintu", catLabel: "Trafkintu", titulo: "Mano a mano: Intercambio Solidario", src: "assets/img/galerias/trafkintu/IMG_0763.webp" },
    { cat: "trafkintu", catLabel: "Trafkintu", titulo: "Participación de Familias y Docentes", src: "assets/img/galerias/trafkintu/IMG_0745.webp" },

    // Muestra de Cueca
    { cat: "cueca", catLabel: "Muestra de Cueca", titulo: "Tradición y Danza Nacional", src: "assets/img/galerias/muestra_cueca/IMG_1416.webp" },
    { cat: "cueca", catLabel: "Muestra de Cueca", titulo: "Estudiantes en Baile Típico", src: "assets/img/galerias/muestra_cueca/IMG_1362.webp" },
    { cat: "cueca", catLabel: "Muestra de Cueca", titulo: "Trajes y Folclore Escolar", src: "assets/img/galerias/muestra_cueca/IMG_1386.webp" },
    { cat: "cueca", catLabel: "Muestra de Cueca", titulo: "Celebración de Fiestas Patrias", src: "assets/img/galerias/muestra_cueca/IMG_1390.webp" },
    { cat: "cueca", catLabel: "Muestra de Cueca", titulo: "Orgullo y Danza en el Gimnasio", src: "assets/img/galerias/muestra_cueca/IMG_1421.webp" },
    { cat: "cueca", catLabel: "Muestra de Cueca", titulo: "Parejas de Baile EACO", src: "assets/img/galerias/muestra_cueca/IMG_1349.webp" },

    // Becas TIC
    { cat: "becas", catLabel: "Becas TIC", titulo: "Entrega de Equipos Computacionales", src: "assets/img/galerias/becas_tic/IMG_1031.webp" },
    { cat: "becas", catLabel: "Becas TIC", titulo: "Tecnología para el Aprendizaje", src: "assets/img/galerias/becas_tic/IMG_1036.webp" },
    { cat: "becas", catLabel: "Becas TIC", titulo: "Estudiantes Reciben sus Laptops", src: "assets/img/galerias/becas_tic/IMG_1018.webp" },
    { cat: "becas", catLabel: "Becas TIC", titulo: "Alegría y Nuevas Oportunidades", src: "assets/img/galerias/becas_tic/IMG_1041.webp" },
    { cat: "becas", catLabel: "Becas TIC", titulo: "Jornada Oficial de Entrega", src: "assets/img/galerias/becas_tic/IMG_1049.webp" },

    // Día del Libro
    { cat: "libro", catLabel: "Día del Libro", titulo: "Sobre el Día del Libro y la Lectura", src: "assets/img/galerias/dia_libro/Sobre el dia del libro.webp" },
    { cat: "libro", catLabel: "Día del Libro", titulo: "Edición Especial Número 1", src: "assets/img/galerias/dia_libro/Número 1.webp" },
    { cat: "libro", catLabel: "Día del Libro", titulo: "¡Celebrando el Día del Libro!", src: "assets/img/galerias/dia_libro/Dia del librooo.webp" },
    { cat: "libro", catLabel: "Día del Libro", titulo: "Felicidades en el Día del Libro", src: "assets/img/galerias/dia_libro/feliz dia del libro.webp" },

    // Día del Alumno
    { cat: "alumno", catLabel: "Día del Alumno", titulo: "Celebración y Alegría en la Escuela", src: "assets/img/galerias/dia_alumno/IMG_0342.webp" },
    { cat: "alumno", catLabel: "Día del Alumno", titulo: "Juegos y Convivencia Escolar", src: "assets/img/galerias/dia_alumno/IMG_0354.webp" },
    { cat: "alumno", catLabel: "Día del Alumno", titulo: "Homenaje a Nuestros Estudiantes", src: "assets/img/galerias/dia_alumno/IMG_0350.webp" },
    { cat: "alumno", catLabel: "Día del Alumno", titulo: "Música y Actividades Recreativas", src: "assets/img/galerias/dia_alumno/IMG_0345.webp" },

    // Entrega de Plantas
    { cat: "plantas", catLabel: "Entrega de Plantas", titulo: "Cuidado Ambiental en Nuestra Comunidad", src: "assets/img/galerias/entrega_plantas/IMG_1292.webp" },
    { cat: "plantas", catLabel: "Entrega de Plantas", titulo: "Jornada Ecológica Escolar", src: "assets/img/galerias/entrega_plantas/IMG_1294.webp" },
    { cat: "plantas", catLabel: "Entrega de Plantas", titulo: "Adopción de Plantas y Árboles", src: "assets/img/galerias/entrega_plantas/IMG_1316.webp" },
    { cat: "plantas", catLabel: "Entrega de Plantas", titulo: "Conciencia Verde en el Aula", src: "assets/img/galerias/entrega_plantas/IMG_1324.webp" },

    // Humor y Familia
    { cat: "humor", catLabel: "Humor & Creatividad", titulo: "Tira Cómica: Chistes de Animales", src: "assets/img/secciones/humor/Chistes de Animales.webp" },
    { cat: "familia", catLabel: "Mi Familia", titulo: "Anécdota de Mi Mami y Yo", src: "assets/img/secciones/mi_familia/ANECDOTA DE MI MAMI Y YO.webp" },
    { cat: "familia", catLabel: "Mi Familia", titulo: "Póster Motivador Orgánico", src: "assets/img/secciones/mi_familia/Póster Frase Motivadora Orgánico Rosa.webp" },
    { cat: "familia", catLabel: "Mi Familia", titulo: "Portafolio Creativo Aesthetic", src: "assets/img/secciones/mi_familia/Copia de Presentación Diapositivas Portfolio Fotografía Minimalista Aesthetic Blanco y Negro.webp" }
  ]
};
