# Voces en Papel - Revista Escolar

Sitio web para la revista escolar "Voces en Papel", desarrollado con HTML, CSS y JavaScript.

## 📁 Estructura del Proyecto

```
revista02/
├── index.html              # Página principal
├── assets/
│   ├── img/                # Imágenes (Logo.png)
│   ├── css/
│   │   └── styles.css      # Estilos personalizados
│   └── js/
│       └── main.js         # Funcionalidades JavaScript
└── components/
    ├── navbar.html         # Componente de navegación
    └── footer.html         # Componente de pie de página
```

## 🚀 Cómo Ejecutar el Proyecto

### Opción 1: Abrir directamente (Recomendado)
Simplemente abre el archivo `index.html` en tu navegador.

### Opción 2: Usar un servidor local (Para desarrollo)
Para una mejor experiencia de desarrollo, usa un servidor local:

**VS Code - Live Server:**
1. Instala la extensión "Live Server"
2. Haz clic derecho en `index.html`
3. Selecciona "Open with Live Server"

**Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Node.js:**
```bash
npx http-server -p 8000
```

## 🎨 Paleta de Colores

| Color | Código Hex |
|-------|------------|
| Amarillo | `#E7E78A` |
| Azul Oscuro | `#07074C` |
| Gris Azulado | `#5F5F83` |
| Lavanda | `#79789C` |
| Verde Gris | `#7C8470` |
| Morado Gris | `#847C94` |

## 🧩 Componentes

Los componentes `navbar` y `footer` están ubicados en la carpeta `components/` como referencia. 
Actualmente están **incluidos directamente en `index.html`** para que el sitio funcione sin servidor local.

### Para usar carga dinámica de componentes:

Si deseas cargar los componentes dinámicamente desde la carpeta `components/`:

1. **JavaScript:** Agrega la función `loadComponents()` en `main.js`
2. **HTML:** Reemplaza el navbar y footer con:
   ```html
   <nav class="navbar" data-component="components/navbar.html"></nav>
   <footer class="footer" data-component="components/footer.html"></footer>
   ```
3. **Importante:** Debes usar un servidor local (las políticas CORS bloquean fetch en archivos locales)

## ✨ Características

- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Navbar sticky con efecto scroll
- ✅ Menú móvil hamburguesa
- ✅ Smooth scroll para navegación interna
- ✅ Animaciones al hacer scroll
- ✅ Formulario de newsletter con validación
- ✅ Botón "volver arriba"
- ✅ Contador animado para estadísticas
- ✅ Efecto parallax suave en hero
- ✅ Imágenes placeholder (Picsum)

## 📝 Secciones del Sitio

1. **Inicio/Hero** - Portada con badge de edición y CTAs
2. **Artículos Destacados** - Grid de 6 artículos
3. **Categorías** - 6 categorías con iconos
4. **Sobre Nosotros** - Información + estadísticas
5. **Newsletter** - Formulario de suscripción
6. **Footer** - Enlaces, contacto y redes sociales

## 🛠️ Tecnologías

- HTML5
- CSS3 (con Tailwind CSS vía CDN)
- JavaScript (ES6+)
- Google Fonts (Playfair Display + Inter)
- Picsum (imágenes placeholder)

---

**Desarrollado con ❤️ para la revista escolar "Voces en Papel"**
