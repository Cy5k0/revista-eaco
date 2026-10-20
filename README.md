# 📰 Voces en Papel — Revista Escolar EACO
### Escuela de Artes y Cultura de Osorno • Edición #2 (2026)

Sitio web oficial de la revista escolar **"Voces en Papel"**, desarrollada con arquitectura web moderna, modular y accesible (HTML5 semántico, CSS3 modular y JavaScript ES6+).

---

## 📁 Estructura del Proyecto

El proyecto sigue una arquitectura organizada y escalable conforme a los estándares de desarrollo web:

```text
revista02/
├── assets/
│   ├── components/
│   │   ├── navbar/
│   │   │   └── navbar.html         # Componente Navbar reutilizable
│   │   └── footer/
│   │       └── footer.html         # Componente Footer reutilizable
│   ├── css/
│   │   ├── global.css              # Tokens, variables, reset y estructura base
│   │   ├── components.css          # Estilos de tarjetas, hero, galerías y modal
│   │   ├── utilities.css           # Animaciones, responsive utilities y botón scroll
│   │   └── styles.css              # Importador central de hojas de estilo
│   ├── js/
│   │   ├── data.js                 # Dataset estructurado (artículos, PDFs, galerías, staff)
│   │   └── main.js                 # Lógica interactiva, filtros, lightbox y componentes
│   ├── img/
│   │   ├── staff/                  # 33 fotografías oficiales de los redactores escolares
│   │   ├── galerias/               # Registro fotográfico de hitos escolares
│   │   │   ├── trafkintu/          # Ceremonia ancestral mapuche (19 fotos)
│   │   │   ├── muestra_cueca/      # Muestra folclórica de cueca (12 fotos)
│   │   │   ├── becas_tic/          # Entrega oficial de computadores (10 fotos)
│   │   │   ├── dia_libro/          # Trabajos y afiches Día del Libro (4 fotos)
│   │   │   ├── dia_alumno/         # Celebración Día del Alumno (4 fotos)
│   │   │   └── entrega_plantas/    # Jornada ecológica y comunitaria (15 fotos)
│   │   ├── secciones/
│   │   │   ├── humor/              # Tira cómica "Chistes de Animales"
│   │   │   └── mi_familia/         # Infografías y afiches "Mi Familia"
│   │   ├── Logo.png                # Emblema oficial de la revista
│   │   ├── team-revista.webp       # Fotografía del taller de periodismo
│   │   └── team02-revista.webp     # Fotografía de trabajo en equipo
│   ├── fonts/                      # Fuentes locales y recursos tipográficos
│   └── icons/                      # Iconos vectoriales y favicons
├── pages/                          # Páginas secundarias y futuras ediciones
├── layouts/                        # Plantillas de diseño
├── utils/                          # Scripts y utilidades complementarias
├── components/                     # Espejo de compatibilidad para componentes
├── agregar/                        # Carpeta fuente de insumos, enlaces y material original
├── CNAME                           # Dominio personalizado de publicación
└── index.html                      # Portada y revista digital completa
```

---

## 🎨 Contenido y Secciones de la Edición #2

1. **Portada & Hero:** Presentación editorial con contadores dinámicos y llamada a la lectura.
2. **Reportes de Investigación:** 9 investigaciones estudiantiles (Cambio climático, cohetes y física, inteligencia artificial, redes sociales en menores, desigualdad social, pirámides de Egipto, importancia de las abejas e inventos mundiales) con enlaces directos al PDF oficial en Google Drive.
3. **Tribuna Estudiantil (Opinión):** Debate escolar sobre el uso del teléfono celular en salas de clase y recreos por alumnos de 5º y 6º básico.
4. **Reportaje Central: Trafkintu Ancestral:** Crónica histórica del rito mapuche de intercambio de semillas, plantas y saberes (*kelluwün*, *nütram*, *llellipun*) vivido en la comunidad escolar.
5. **¿Quién Soy?:** Ensayos autobiográficos de los redactores con enlaces a sus textos en PDF.
6. **Galerías Fotográficas Escolares:** Visor interactivo con filtros por categoría (Trafkintu, Cueca, Becas TIC, Día del Libro, Día del Alumno, Entrega de Plantas, Humor y Familia) con **Modal Lightbox** a pantalla completa y navegación con teclado.
7. **Zona Interactiva de Pasatiempos (Educaplay):** Sopa de letras de fútbol chileno y Crucigrama interactivo de tecnología y dinosaurios integrados de forma responsiva.
8. **Proyectos de Tecnología & Humor:** Trabajos de innovación escolar y tiras cómicas.
9. **Equipo de Redacción (Staff):** Directorio interactivo de los 33 redactores y periodistas escolares con barra de búsqueda en tiempo real.
10. **Sobre Nosotros:** Información del taller guiado por la profesora Lucila García en la Escuela de Artes y Cultura de Osorno.

---

## 🚀 Cómo Ejecutar el Proyecto

### Opción 1: Servidor Local (Recomendado)
Para una experiencia completa con carga modular:
```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server -p 8000
```
Luego abre `http://localhost:8000` en tu navegador.

### Opción 2: Apertura Directa
El archivo `index.html` incluye resiliencia y fallback pre-renderizado para que funcione tanto abriéndolo directamente en el navegador como a través de GitHub Pages.

---

**Escuela de Artes y Cultura de Osorno** — *Voces en Papel: conectando historias, ideas y creatividad.*
