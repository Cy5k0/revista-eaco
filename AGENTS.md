# AGENTS.md — Voces en Papel (Revista Escolar EACO)

Guía para agentes que trabajen en este repositorio. Léela antes de editar.

## 1. Qué es este proyecto

Sitio web estático de la revista escolar **"Voces en Papel"** de la Escuela de Artes y Cultura de Osorno (Chile), Edición #2 (2026). Publica investigaciones estudiantiles, opinión, el reportaje del Trafkintu, galerías fotográficas, pasatiempos Educaplay y el directorio del staff.

- **Stack:** HTML5 + CSS3 + JavaScript ES6+ (vanilla) con **PaperCSS 1.9.2** (CDN) como base visual. Sin framework ni bundler.
- **Build:** ninguno. Los archivos se sirven tal cual.
- **Publicación:** GitHub Pages con dominio propio (`CNAME` → `revista.escueladeartesycultura.com`).
- **Idioma:** todo el contenido, comentarios y textos de UI están en español. Mantener esa convención.

## 2. Comandos

```bash
# Servir localmente (recomendado para probar la carga de componentes vía fetch)
python3 -m http.server 8000
# o
npx http-server -p 8000

# Abrir en el navegador
# http://localhost:8000
```

No hay tests, linter ni formateador configurados. La verificación es manual en el navegador. Si agregas tooling, mantén el sitio funcionando sin build (GitHub Pages sirve la rama directamente).

## 3. Mapa de archivos

```text
index.html                     # Página única con todas las secciones + fallbacks pre-renderizados
assets/css/
  global.css                   # Tokens (:root), reset, tipografía, layout base
  components.css               # Navbar, hero, tarjetas, galerías, lightbox, staff, etc.
  utilities.css                # Animaciones, utilidades responsive, scroll-to-top
  paper-theme.css              # Capa de tema "periódico escolar" sobre PaperCSS
  styles.css                   # Importador opcional (no enlazado desde index.html)
assets/js/
  data.js                      # REVISTA_DATA: todo el contenido estructurado
  main.js                      # Renderizado, filtros, lightbox, juegos, búsqueda, animaciones
assets/components/navbar/      # Componente navbar cargado por fetch
assets/components/footer/      # Componente footer cargado por fetch
assets/img/                    # Imágenes optimizadas en .webp (staff, galerías, secciones)
components/                    # ESPEJO de assets/components (mantener sincronizado)
agregar/                       # Material fuente original (fotos/enlaces); no se sirve en el sitio
pages/ layouts/ utils/         # Vacíos (.gitkeep), reservados para futuras ediciones
```

## 4. Flujo de arranque y arquitectura

1. `main.js` escucha `DOMContentLoaded` y ejecuta `initApp()`.
2. `loadComponent()` hace `fetch` de `assets/components/navbar/navbar.html` y `footer.html` y los inyecta en `#navbar-container` / `#footer-container`, con cache-busting (`?v=timestamp`).
3. Si el `fetch` falla (p. ej. abriendo `index.html` con `file://`), se conserva el HTML pre-renderizado que ya existe dentro de esos contenedores en `index.html`. **Ambos fallbacks deben mantenerse sincronizados con los archivos de componente.**
4. Se renderizan las secciones desde `REVISTA_DATA` (en `data.js`) dentro de contenedores con id fijo:
   - `#grid-investigacion`, `#grid-opiniones`, `#grid-quien-soy`, `#grid-dia-libro`, `#grid-staff`, `#grid-galerias`.
5. Se inicializan interacciones: filtros de galería, lightbox, tabs de juegos, búsqueda de staff, carrusel, contadores y efectos de scroll.

**Regla clave:** el contenido editable vive en `data.js`; la presentación/lógica en `main.js`; el markup estático de página en `index.html`. Evita duplicar contenido entre capas.

### Orden de carga CSS

`index.html` carga, en este orden:

```text
PaperCSS 1.9.2 (CDN unpkg)
global.css
components.css
utilities.css
paper-theme.css   <- última: overrides de PaperCSS y acabado de papel
```

`styles.css` existe como importador opcional, pero **no está enlazado** para evitar cargas duplicadas. Si se usa, debe incluir PaperCSS antes por separado.

## 5. Cómo agregar o modificar contenido

### Artículos, opiniones, "Quién Soy", Día del Libro, staff
Editar el arreglo correspondiente en `assets/js/data.js` (`reportesInvestigacion`, `opiniones`, `quienSoy`, `diaLibro`, `proyectosTecnologia`, `staff`). Los renderizadores generan el HTML automáticamente.

### Galerías
1. Copiar la imagen a `assets/img/galerias/<categoria>/` (preferir `.webp`, nombres sin caracteres problemáticos si es posible).
2. Agregar el objeto `{ cat, catLabel, titulo, src }` a `REVISTA_DATA.galerias`.
3. `cat` debe coincidir con un botón `.filter-btn[data-category="..."]` en `index.html`. Para una categoría nueva, añadir también el botón y, si aplica, el enlace del footer con `data-gallery-filter`.
4. El `src` debe ser una ruta relativa exacta; `main.js` aplica `encodeURI()` para manejar espacios y tildes.

### Staff
- Cada entrada de `staff` referencia una foto en `assets/img/staff/`.
- Si el total cambia, actualizar los textos fijos "34" en `index.html` (hero y encabezado de la sección Staff) y `README.md`.
- No hay que tocar `main.js`: la búsqueda usa `data-name` generado desde `nombre`.

### Componentes
- Editar la fuente en `assets/components/{navbar,footer}/...html`.
- Replicar el cambio en `components/{navbar,footer}.html` (espejo de compatibilidad).
- Actualizar también el fallback equivalente dentro de `index.html`.
- Los enlaces del navbar deben apuntar a anclas de secciones existentes (`#inicio`, `#investigacion`, ...).

## 6. Convenciones de código

- **CSS:** usar las variables de `:root` (`--color-primary`, `--color-accent`, `--text-*`, `--radius-*`, `--shadow-*`, `--transition-*`, y los tokens de papel `--paper`, `--ink`, `--crayon-*`). No introducir colores/tamaños mágicos si existe un token. Mantener el patrón de bloques comentados (`/* ===== ... ===== */`) y las media queries al final del archivo correspondiente.
- **PaperCSS:** la estética de papel viene de PaperCSS (CDN) más `paper-theme.css`. Los overrides nuevos van preferentemente en `paper-theme.css` para no pelear con la base; no se debe cargar PaperCSS después del CSS propio. Respetar los radios irregulares (`--radius-paper`, `--radius-paper-sm`) y la paleta de crayón.
- **JS:** funciones nombradas y en camelCase; renderizadores con el patrón `renderX(items)` que escriben `innerHTML` sobre un contenedor; inicializadores `initX()`; comentarios de sección en español. Usar `const`/`let`, template literals y `addEventListener`.
- **HTML:** semántico y accesible (`aria-label`, `aria-expanded`, `role`, `tabindex` en elementos clicables, `loading="lazy"`, `alt` descriptivo). El lightbox ya soporta teclado (Escape/flechas).
- **Imágenes:** rutas relativas desde la raíz del sitio; usar `encodeURI()` al inyectarlas por JS. Formatos `.webp`.
- **Enlaces a PDFs:** Google Drive con `target="_blank" rel="noopener noreferrer"`.
- **No** agregar dependencias ni pasos de compilación. PaperCSS y Google Fonts se cargan por CDN.

## 7. Trampas conocidas

- **PaperCSS altera elementos base:** estiliza `nav`, `button`, `input`, `a` (subrayado ondulado), `.container`, `.section` (incluido `::after` con `~~~`) y las tipografías. Los overrides viven en `paper-theme.css` y deben cargarse al final.
- **PaperCSS también pinta enlaces dentro de `<nav>`:** añade `border-bottom: 5px` a `nav a`; el navbar del tema lo resetea en `.nav-link`/`.navbar-logo` y dibuja su propio subrayado. Si se agregan enlaces nuevos al navbar, revisar ese reset.
- **Breakpoint del navbar:** el menú horizontal solo se muestra sobre 1080 px; por debajo se usa el desplegable (mismo patrón en tablet y móvil). No bajar ese breakpoint sin comprobar que los 10 enlaces caben.
- **Efectos de PaperCSS en botones:** añade `margin-bottom` y `align-self` a los `<button>`; las clases propias (`filter-btn`, `game-tab-btn`, `lightbox-*`, `scroll-to-top`) resetean ese margen en el tema.
- **Componentes triplicados:** `assets/components/...`, `components/...` y el fallback inline en `index.html`. Cualquier cambio de navbar/footer debe reflejarse en los tres.
- **`fetch` con `file://` falla:** es esperado; el fallback inline mantiene el sitio usable. Para probar componentes dinámicos usar servidor local.
- **CDN:** sin conexión a internet, PaperCSS y Google Fonts no cargan y el sitio pierde el acabado de papel. Para uso offline, descargar `paper.min.css` y vendorizarlo.
- **Nombres de archivo con espacios/tildes** (p. ej. `assets/img/staff/Excequiel .webp`, `Número 1.webp`). Al renombrar, actualizar todas las referencias en `data.js`/HTML.
- **Datos inconsistentes heredados:** algunos campos de autor/avatar no coinciden entre sí en `data.js` (p. ej. `avatarImg` de un artículo apunta a la foto de otra persona). Verificar visualmente antes de "corregir" sin consultar.
- **Categorías de galería:** `humor` y `familia` existen en datos y en el footer, pero no tienen botón en la barra de filtros de `index.html`; se ven solo en "Todas".
- **Contadores del hero** están escritos a mano en `index.html`, no se derivan de `data.js`.
- **Trafkintu es la única sección oscura intencional** (verde profundo). No "aclararla" al ajustar el tema; el resto del sitio es papel claro.

## 8. Verificación antes de entregar

1. Servir con `python3 -m http.server 8000` y abrir `http://localhost:8000`.
2. Revisar consola sin errores 404 (imágenes/componentes) y sin excepciones JS.
3. Probar: navegación móvil, filtros de galería, apertura/cierre del lightbox con teclado, cambio de juego Educaplay, búsqueda de staff, contadores y botón "volver arriba".
4. Confirmar que todas las imágenes referenciadas existen:
   ```bash
   node -e "const fs=require('fs');const s=fs.readFileSync('assets/js/data.js','utf8');const p=[...s.matchAll(/(?:src|foto|avatarImg|avatar):\s*\"([^\"]+)\"/g)].map(m=>m[1]);[...new Set(p)].filter(x=>!fs.existsSync(x)).forEach(x=>console.log('MISSING',x))"
   ```
5. En cambios de navbar/footer, abrir también `index.html` directamente (`file://`) para validar el fallback.

## 9. CodeGraph

El repo está indexado (`.codegraph/`). En este entorno hay disponible `codegraph_explore` (MCP) o `codegraph explore "<consulta>"`. Úsalo antes de grep/lectura para localizar símbolos y ver el grafo de llamadas. No lo ejecutes si se elimina `.codegraph/`.

## 10. Git / publicación

- Repositorio: `github.com/Cy5k0/revista-eaco`.
- Rama actual de trabajo: `Reforge-designe-css`.
- Commits en español con prefijo tipo (`feat:`, `fix:`, `style:`) — seguir el historial existente.
- Al hacer push a la rama publicada, GitHub Pages despliega automáticamente. No hay CI.
