/**
 * ========================================
 * VOCES EN PAPEL - Revista Escolar
 * JavaScript Principal
 * ========================================
 */

// Función para inicializar todo cuando los componentes estén listos
function initMain() {
  console.log('📰 Inicializando Voces en Papel...');

  // ========================================
  // NAVBAR MOBILE TOGGLE
  // ========================================
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');

  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener('click', function () {
      navbarMenu.classList.toggle('active');

      // Animación del icono hamburguesa
      const spans = navbarToggle.querySelectorAll('span');
      if (navbarMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  }

  // ========================================
  // SCROLL NAVBAR EFFECT
  // ========================================
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;

  if (navbar) {
    window.addEventListener('scroll', function () {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        navbar.style.padding = '0.5rem 2rem';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
      } else {
        navbar.style.padding = '1rem 2rem';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
      }

      lastScroll = currentScroll;
    });
  }

  // ========================================
  // SMOOTH SCROLL PARA LINKS INTERNOS
  // ========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Solo si es un link interno válido
      if (href !== '#' && href.length > 1) {
        const target = document.querySelector(href);

        if (target) {
          e.preventDefault();

          // Cerrar menú mobile si está abierto
          if (navbarMenu && navbarMenu.classList.contains('active')) {
            navbarMenu.classList.remove('active');
            if (navbarToggle) {
              const spans = navbarToggle.querySelectorAll('span');
              spans[0].style.transform = 'none';
              spans[1].style.opacity = '1';
              spans[2].style.transform = 'none';
            }
          }

          const offsetTop = target.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // ========================================
  // ANIMACIÓN AL HACER SCROLL (Intersection Observer)
  // ========================================
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observar elementos para animar
  document.querySelectorAll('.article-card, .category-card, .stat-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });

  // ========================================
  // NEWSLETTER FORM SUBMIT
  // ========================================
  const newsletterForm = document.querySelector('.newsletter-form');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value;
      const button = this.querySelector('button');
      const originalText = button.textContent;

      // Validación simple
      if (email && validateEmail(email)) {
        button.textContent = '¡Gracias por suscribirte!';
        button.style.backgroundColor = '#4CAF50';
        emailInput.value = '';

        setTimeout(() => {
          button.textContent = originalText;
          button.style.backgroundColor = '';
        }, 3000);
      } else {
        button.textContent = 'Por favor ingresa un email válido';
        button.style.backgroundColor = '#f44336';

        setTimeout(() => {
          button.textContent = originalText;
          button.style.backgroundColor = '';
        }, 3000);
      }
    });
  }

  // ========================================
  // VALIDADOR DE EMAIL
  // ========================================
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // ========================================
  // ACTIVE LINK EN NAVBAR SEGÚN SCROLL
  // ========================================
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', function () {
    const scrollY = window.pageYOffset + 100;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelectorAll('.navbar-menu a').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // ========================================
  // BOTÓN VOLVER ARRIBA
  // ========================================
  createScrollToTopButton();

  function createScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.setAttribute('aria-label', 'Volver arriba');

    // Estilos del botón
    Object.assign(scrollBtn.style, {
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      backgroundColor: '#07074C',
      color: '#E7E78A',
      border: 'none',
      fontSize: '1.5rem',
      cursor: 'pointer',
      boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
      opacity: '0',
      visibility: 'hidden',
      transition: 'all 0.3s ease',
      zIndex: '999'
    });

    document.body.appendChild(scrollBtn);

    // Mostrar/ocultar botón
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 300) {
        scrollBtn.style.opacity = '1';
        scrollBtn.style.visibility = 'visible';
      } else {
        scrollBtn.style.opacity = '0';
        scrollBtn.style.visibility = 'hidden';
      }
    });

    // Click para volver arriba
    scrollBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Hover effect
    scrollBtn.addEventListener('mouseenter', function () {
      scrollBtn.style.backgroundColor = '#E7E78A';
      scrollBtn.style.color = '#07074C';
      scrollBtn.style.transform = 'translateY(-5px)';
    });

    scrollBtn.addEventListener('mouseleave', function () {
      scrollBtn.style.backgroundColor = '#07074C';
      scrollBtn.style.color = '#E7E78A';
      scrollBtn.style.transform = 'translateY(0)';
    });
  }

  // ========================================
  // EFECTO PARALLAX SUAVE EN HERO
  // ========================================
  const hero = document.querySelector('.hero');

  if (hero) {
    window.addEventListener('scroll', function () {
      const scrolled = window.pageYOffset;
      const heroHeight = hero.offsetHeight;

      if (scrolled < heroHeight) {
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
      }
    });
  }

  // ========================================
  // CAROUSEL FADE AUTOMÁTICO (ABOUT SECTION)
  // ========================================
  const carouselSlides = document.querySelectorAll('.carousel-slide');

  if (carouselSlides.length > 0) {
    let currentSlide = 0;
    const slideInterval = 4000; // Cambia cada 4 segundos

    function nextSlide() {
      carouselSlides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % carouselSlides.length;
      carouselSlides[currentSlide].classList.add('active');
    }

    setInterval(nextSlide, slideInterval);
  }

  // ========================================
  // CONTADOR ANIMADO PARA ESTADÍSTICAS
  // ========================================
  const statNumbers = document.querySelectorAll('.stat-number');

  const statObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const finalValue = parseInt(target.getAttribute('data-count'));
        animateCounter(target, finalValue);
        statObserver.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(stat => {
    if (stat.hasAttribute('data-count')) {
      statObserver.observe(stat);
    }
  });

  function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target + '+';
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current) + '+';
      }
    }, 30);
  }

  console.log('📰 Voces en Papel - Revista Escolar cargada correctamente');
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMain);
} else {
  initMain();
}
