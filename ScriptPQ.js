window.addEventListener('DOMContentLoaded', () => {

  // Función para cambiar el idioma y guardar el estado
  function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    const spanishElements = document.querySelectorAll('.spanish-text');
    const englishElements = document.querySelectorAll('.english-text');

    if (lang === 'es') {
      spanishElements.forEach(el => {
        el.style.display = '';
        el.style.pointerEvents = 'auto';
      });
      englishElements.forEach(el => {
        el.style.display = 'none';
        el.style.pointerEvents = 'none';
      });
    } else {
      spanishElements.forEach(el => {
        el.style.display = 'none';
        el.style.pointerEvents = 'none';
      });
      englishElements.forEach(el => {
        el.style.display = '';
        el.style.pointerEvents = 'auto';
      });
    }
  }

  // Botón para alternar idioma
  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const currentLang = localStorage.getItem('lang') || 'es';
      setLanguage(currentLang === 'es' ? 'en' : 'es');
    });
  }

  // Función para alternar y guardar modo oscuro
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('modo', isDark ? 'dark' : 'light');
  }

  // Botón modo oscuro
  const darkToggle = document.getElementById("darkmode-toggle");
  if (darkToggle) {
    darkToggle.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      toggleDarkMode();
    });
  }

  // Función para alternar acordeón según idioma
  function toggleAccordion(headerElement) {
    const lang = localStorage.getItem('lang') || 'es';
    const parentItem = headerElement.closest('.accordion-item');
    const bodies = parentItem.querySelectorAll(`.accordion-body.${lang === 'es' ? 'spanish-text' : 'english-text'}`);

    bodies.forEach(body => {
      const isVisible = body.style.display === 'block';
      body.style.display = isVisible ? 'none' : 'block';
    });
  }

  // Función para alternar menú responsive
  function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');

    if (menu.classList.contains('active')) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }

  // Agregar evento al botón de menú (asegúrate que exista)
  const menuButton = document.querySelector('.menu-icon');
  if (menuButton) {
    menuButton.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });
  }

  // Cerrar menú al hacer clic fuera del menú y botón
  document.body.addEventListener('click', (e) => {
    const menu = document.querySelector('.menu');
    const menuButton = document.querySelector('.menu-icon');
    if (document.body.classList.contains('menu-open')) {
      if (!menu.contains(e.target) && e.target !== menu && e.target !== menuButton) {
        menu.classList.remove('active');
        document.body.classList.remove('menu-open');
      }
    }
  });

  // Aplicar idioma y modo oscuro guardados al cargar la página
  const savedLang = localStorage.getItem('lang') || 'es';
  setLanguage(savedLang);

  const savedMode = localStorage.getItem('modo') || 'light';
  if (savedMode === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }

  // Opcional: Si tienes botones o headers para acordeón, asigna evento
  // Por ejemplo, si tus headers tienen clase 'accordion-header':
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleAccordion(header);
    });
  });

});
