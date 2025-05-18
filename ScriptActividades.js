// Aplicar modo oscuro y idioma guardados al cargar la página
window.addEventListener('DOMContentLoaded', () => {
  // Modo oscuro
  const modoGuardado = localStorage.getItem('modo');
  if (modoGuardado === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }

  // Idioma
  const idiomaGuardado = localStorage.getItem('idioma') || 'es';
  aplicarIdioma(idiomaGuardado);
});

// Función para aplicar el idioma en la página y guardar preferencia
function aplicarIdioma(idioma) {
  const spanishElements = document.querySelectorAll('.spanish-text');
  const englishElements = document.querySelectorAll('.english-text');

  if (idioma === 'es') {
    spanishElements.forEach(el => el.style.display = 'block');
    englishElements.forEach(el => el.style.display = 'none');
  } else {
    spanishElements.forEach(el => el.style.display = 'none');
    englishElements.forEach(el => el.style.display = 'block');
  }

  localStorage.setItem('idioma', idioma);
}

// Función para cambiar el idioma al hacer click y guardar preferencia
document.getElementById("lang-toggle").onclick = function() {
  const idiomaActual = localStorage.getItem('idioma') || 'es';
  const nuevoIdioma = idiomaActual === 'es' ? 'en' : 'es';
  aplicarIdioma(nuevoIdioma);
};

// Función para cambiar modo oscuro y guardar preferencia
document.getElementById("darkmode-toggle").onclick = function() {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('modo', 'dark');
  } else {
    localStorage.setItem('modo', 'light');
  }
};

// Función para mostrar/ocultar el menú en dispositivos móviles
function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');

  if (menu.classList.contains('active')) {
    document.body.classList.add('menu-open');
  } else {
    document.body.classList.remove('menu-open');
  }
}

// Función para la búsqueda de actividades
function searchFunction() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const tarjetas = document.querySelectorAll(".tarjeta");

  tarjetas.forEach(tarjeta => {
    const textoSpanish = (tarjeta.querySelector(".spanish-text h2")?.textContent.toLowerCase() || '') + " " +
                         (tarjeta.querySelector(".spanish-text p:nth-of-type(2)")?.textContent.toLowerCase() || '');

    const textoEnglish = (tarjeta.querySelector(".english-text h2")?.textContent.toLowerCase() || '') + " " +
                         (tarjeta.querySelector(".english-text p:nth-of-type(2)")?.textContent.toLowerCase() || '');

    if (textoSpanish.includes(input) || textoEnglish.includes(input)) {
      tarjeta.style.display = "block";
    } else {
      tarjeta.style.display = "none";
    }
  });
}

// Cerrar menú al tocar fuera del menú y del botón
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
