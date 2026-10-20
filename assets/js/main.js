/**
 * ==========================================================================
 * VOCES EN PAPEL - REVISTA ESCOLAR (ESCUELA DE ARTES Y CULTURA DE OSORNO)
 * main.js: Lógica interactiva, renderizado de datos, galerías y componentes
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

async function initApp() {
  console.log('📰 Iniciando Voces en Papel - Revista Escolar EACO');

  // 1. Cargar componentes reutilizables
  await loadComponent('navbar-container', 'assets/components/navbar/navbar.html', initNavbarEvents);
  await loadComponent('footer-container', 'assets/components/footer/footer.html', initFooterEvents);

  // 2. Renderizar secciones de contenido a partir de REVISTA_DATA
  if (typeof REVISTA_DATA !== 'undefined') {
    renderInvestigacion(REVISTA_DATA.reportesInvestigacion);
    renderOpiniones(REVISTA_DATA.opiniones);
    renderQuienSoy(REVISTA_DATA.quienSoy);
    renderStaff(REVISTA_DATA.staff);
    renderGalerias(REVISTA_DATA.galerias, 'all');
  }

  // 3. Inicializar módulos de interacción
  initGalleryFilters();
  initLightbox();
  initGameTabs();
  initStaffSearch();
  initAboutCarousel();
  initAnimatedCounters();
  initScrollEffects();
}

/**
 * Carga dinámica de componentes con fallback resiliente
 */
async function loadComponent(containerId, componentPath, callback) {
  const container = document.getElementById(containerId);
  if (!container) return;

  try {
    const response = await fetch(`${componentPath}?v=${Date.now()}`);
    if (response.ok) {
      const html = await response.text();
      container.innerHTML = html;
      if (typeof callback === 'function') callback();
      return;
    }
  } catch (err) {
    console.warn(`Fetch local restringido para ${componentPath}, usando contenido base si existe.`);
  }

  // Si ya contiene HTML interno (SSR / fallback estático), se ejecutan los callbacks
  if (typeof callback === 'function') callback();
}

/**
 * Eventos del Navbar
 */
function initNavbarEvents() {
  const toggle = document.getElementById('navbar-toggle');
  const menu = document.getElementById('navbar-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !isExpanded);
      menu.classList.toggle('active');

      const spans = toggle.querySelectorAll('span');
      if (menu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(6px, -5px)';
      } else {
        spans.forEach(s => s.style.transform = 'none');
        spans[1].style.opacity = '1';
      }
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (menu.classList.contains('active')) {
          menu.classList.remove('active');
          toggle.setAttribute('aria-expanded', 'false');
          const spans = toggle.querySelectorAll('span');
          spans.forEach(s => s.style.transform = 'none');
          spans[1].style.opacity = '1';
        }
      });
    });
  }
}

/**
 * Eventos del Footer
 */
function initFooterEvents() {
  const galleryFilterLinks = document.querySelectorAll('[data-gallery-filter]');
  galleryFilterLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const cat = link.getAttribute('data-gallery-filter');
      const targetBtn = document.querySelector(`.filter-btn[data-category="${cat}"]`);
      if (targetBtn) {
        targetBtn.click();
      }
    });
  });
}

/**
 * Renderizado de Artículos de Investigación
 */
function renderInvestigacion(articulos) {
  const container = document.getElementById('grid-investigacion');
  if (!container || !articulos) return;

  container.innerHTML = articulos.map(item => `
    <article class="article-card" id="${item.id}">
      <div class="article-card-header">
        <span class="article-badge ${item.badgeClass}">${item.categoria}</span>
        <span class="article-course-tag">${item.curso}</span>
      </div>
      <div class="article-card-body">
        <h3 class="article-card-title">${item.titulo}</h3>
        <p class="article-card-excerpt">${item.extracto}</p>
        <div class="article-card-footer">
          <div class="article-author-info">
            <div class="author-avatar" title="${item.autor}">
              <img src="${encodeURI(item.avatarImg)}" alt="Foto de ${item.autor}" loading="lazy" onerror="this.onerror=null;this.parentElement.textContent='${item.autor.charAt(0)}'">
            </div>
            <div class="author-details">
              <span class="author-name">${item.autor}</span>
              <span class="author-role">${item.curso}</span>
            </div>
          </div>
          <a href="${item.urlPdf}" target="_blank" rel="noopener noreferrer" class="btn-pdf" title="Abrir informe en Google Drive">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
            <span>Ver PDF</span>
          </a>
        </div>
      </div>
    </article>
  `).join('');
}

/**
 * Renderizado de Secciones de Opinión
 */
function renderOpiniones(opiniones) {
  const container = document.getElementById('grid-opiniones');
  if (!container || !opiniones) return;

  container.innerHTML = opiniones.map(item => `
    <div class="opinion-card" id="${item.id}">
      <span class="opinion-theme">Debate Escolar • Celulares en el Aula</span>
      <h3 class="opinion-title">${item.titulo}</h3>
      <p class="opinion-quote">${item.cita}</p>
      <div class="opinion-author">
        <div class="article-author-info">
          <div class="author-avatar">
            <img src="${encodeURI(item.avatarImg)}" alt="${item.autor}" loading="lazy" onerror="this.onerror=null;this.parentElement.textContent='${item.autor.charAt(0)}'">
          </div>
          <div class="author-details">
            <span class="author-name">${item.autor}</span>
            <span class="author-role">${item.curso}</span>
          </div>
        </div>
        <a href="${item.urlPdf}" target="_blank" rel="noopener noreferrer" class="btn-pdf">
          <span>Leer Columna</span>
        </a>
      </div>
    </div>
  `).join('');
}

/**
 * Renderizado de ¿Quién Soy?
 */
function renderQuienSoy(items) {
  const container = document.getElementById('grid-quien-soy');
  if (!container || !items) return;

  container.innerHTML = items.map(item => `
    <div class="quien-card">
      <div class="quien-avatar">
        <img src="${encodeURI(item.avatar)}" alt="${item.nombre}" loading="lazy" onerror="this.onerror=null;this.parentElement.textContent='${item.nombre.charAt(0)}'">
      </div>
      <h3 class="quien-name">${item.nombre}</h3>
      <span class="quien-tag">${item.curso}</span>
      <a href="${item.urlPdf}" target="_blank" rel="noopener noreferrer" class="btn-pdf" style="font-size:0.8rem; padding: 0.4rem 0.9rem;">
        <span>Ver Escrito</span>
      </a>
    </div>
  `).join('');
}

/**
 * Renderizado de Staff
 */
function renderStaff(miembros) {
  const container = document.getElementById('grid-staff');
  if (!container || !miembros) return;

  container.innerHTML = miembros.map(persona => `
    <div class="staff-card" data-name="${persona.nombre.toLowerCase()}">
      <div class="staff-avatar">
        <img src="${encodeURI(persona.foto)}" alt="Foto de ${persona.nombre}" loading="lazy" onerror="this.onerror=null;this.parentElement.textContent='${persona.nombre.charAt(0)}'">
      </div>
      <h4 class="staff-name">${persona.nombre}</h4>
      <span class="staff-role">${persona.rol}</span>
    </div>
  `).join('');
}

/**
 * Renderizado de Galerías
 */
let currentGalleryList = [];

function renderGalerias(fotos, categoria = 'all') {
  const container = document.getElementById('grid-galerias');
  if (!container || !fotos) return;

  const filtradas = categoria === 'all' 
    ? fotos 
    : fotos.filter(f => f.cat === categoria);

  currentGalleryList = filtradas;

  container.innerHTML = filtradas.map((foto, index) => `
    <div class="gallery-item" data-index="${index}" tabindex="0" role="button" aria-label="Ver imagen ampliada: ${foto.titulo}">
      <img src="${encodeURI(foto.src)}" alt="${foto.titulo}" loading="lazy">
      <div class="gallery-overlay">
        <span class="gallery-item-cat">${foto.catLabel}</span>
        <h4 class="gallery-item-title">${foto.titulo}</h4>
      </div>
      <div class="gallery-zoom-icon" aria-hidden="true">🔍</div>
    </div>
  `).join('');

  // Asociar evento click a cada elemento para el Lightbox
  container.querySelectorAll('.gallery-item').forEach(el => {
    el.addEventListener('click', () => {
      const idx = parseInt(el.getAttribute('data-index'), 10);
      openLightbox(idx);
    });
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const idx = parseInt(el.getAttribute('data-index'), 10);
        openLightbox(idx);
      }
    });
  });
}

/**
 * Filtros de Galería
 */
function initGalleryFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.getAttribute('data-category');
      renderGalerias(REVISTA_DATA.galerias, cat);
    });
  });
}

/**
 * Visor Lightbox Modal
 */
let currentLightboxIndex = 0;

function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  if (!lightbox) return;

  const close = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', close);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) close();
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateLightbox(-1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateLightbox(1);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });
}

function openLightbox(index) {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');

  if (!lightbox || !img || !currentGalleryList[index]) return;

  currentLightboxIndex = index;
  const item = currentGalleryList[index];

  img.src = encodeURI(item.src);
  img.alt = item.titulo;
  if (caption) {
    caption.textContent = `${item.titulo} — ${item.catLabel}`;
  }

  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function navigateLightbox(direction) {
  if (currentGalleryList.length === 0) return;
  currentLightboxIndex = (currentLightboxIndex + direction + currentGalleryList.length) % currentGalleryList.length;
  openLightbox(currentLightboxIndex);
}

/**
 * Selector de Juegos Educaplay
 */
function initGameTabs() {
  const tabs = document.querySelectorAll('.game-tab-btn');
  const iframe = document.getElementById('game-iframe');
  const title = document.getElementById('game-title');
  const desc = document.getElementById('game-desc');

  const gamesData = {
    futbol: {
      url: "https://es.educaplay.com/juego/29440650-futbol_chileno.html",
      title: "⚽ Sopa de Letras: Fútbol Chileno",
      desc: "Encuentra los clubes y figuras del fútbol chileno en este entretenido pasatiempo escolar."
    },
    tecnologia: {
      url: "https://es.educaplay.com/juego/29440451-tecnologia_conceptos_clave.html",
      title: "🦕 Crucigrama: Dinosaurios y Conceptos de Tecnología",
      desc: "Demuestra tus conocimientos científicos y tecnológicos completando las palabras cruzadas."
    }
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const gameKey = tab.getAttribute('data-game');
      const gameInfo = gamesData[gameKey];

      if (gameInfo && iframe) {
        iframe.src = gameInfo.url;
        if (title) title.textContent = gameInfo.title;
        if (desc) desc.textContent = gameInfo.desc;
      }
    });
  });
}

/**
 * Búsqueda de Redactores del Staff
 */
function initStaffSearch() {
  const searchInput = document.getElementById('staff-search');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    const cards = document.querySelectorAll('.staff-card');

    cards.forEach(card => {
      const name = card.getAttribute('data-name') || '';
      if (name.includes(query)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
}

/**
 * Carrusel de Fotos "Sobre Nosotros"
 */
function initAboutCarousel() {
  const slides = document.querySelectorAll('.about-carousel .carousel-slide');
  if (slides.length <= 1) return;

  let current = 0;
  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 4500);
}

/**
 * Contador Animado para Estadísticas
 */
function initAnimatedCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const finalValue = parseInt(target.getAttribute('data-count'), 10);
        if (!isNaN(finalValue)) {
          animateCounter(target, finalValue);
        }
        observer.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(stat => observer.observe(stat));

  function animateCounter(element, target) {
    let current = 0;
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    const intervalTime = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = `${target}+`;
        clearInterval(timer);
      } else {
        element.textContent = `${Math.floor(current)}+`;
      }
    }, intervalTime);
  }
}

/**
 * Efectos de Scroll y Botón Volver Arriba
 */
function initScrollEffects() {
  // Crear botón Volver Arriba si no existe
  let scrollBtn = document.querySelector('.scroll-to-top');
  if (!scrollBtn) {
    scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.setAttribute('aria-label', 'Volver al inicio de la página');
    scrollBtn.innerHTML = '↑';
    document.body.appendChild(scrollBtn);
  }

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 400) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Animación Fade-in-up al entrar en pantalla
  const animatedElements = document.querySelectorAll('.article-card, .opinion-card, .quien-card, .pillar-card');
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => scrollObserver.observe(el));
}
