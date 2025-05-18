window.addEventListener('DOMContentLoaded', () => {
  const modoGuardado = localStorage.getItem('modo');
  if (modoGuardado === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }

  const idiomaGuardado = localStorage.getItem('idioma') || 'es'; // por defecto español
  aplicarIdioma(idiomaGuardado);
});

// Función para aplicar el idioma en la página
function aplicarIdioma(idioma) {
  const spanishElements = document.querySelectorAll('.spanish-text');
  const englishElements = document.querySelectorAll('.english-text');

  if (idioma === 'es') {
    spanishElements.forEach(el => el.style.display = 'block');
    englishElements.forEach(el => el.style.display = 'none');
  } else if (idioma === 'en') {
    spanishElements.forEach(el => el.style.display = 'none');
    englishElements.forEach(el => el.style.display = 'block');
  }

  // Guardar idioma en localStorage
  localStorage.setItem('idioma', idioma);
}

// Función para el modo oscuro
document.getElementById("darkmode-toggle").onclick = function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("modo", "dark");
  } else {
    localStorage.setItem("modo", "light");
  }
};

// Función para cambiar el idioma
document.getElementById("lang-toggle").onclick = function() {
  const idiomaActual = localStorage.getItem('idioma') || 'es';
  const nuevoIdioma = idiomaActual === 'es' ? 'en' : 'es';
  aplicarIdioma(nuevoIdioma);
};

// Función para mostrar/ocultar el menú
function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');

  if (menu.classList.contains('active')) {
    document.body.classList.add('menu-open');
  } else {
    document.body.classList.remove('menu-open');
  }
}

// Fecha del evento: 30 mayo 2025 a las 9:00 am
const eventDate = new Date(2025, 4, 30, 9, 0, 0);

function updateCountdown() {
  const now = new Date();
  const diff = eventDate - now;

  const spanishEl = document.querySelector("#countdown .spanish-text");
  const englishEl = document.querySelector("#countdown .english-text");

  if (diff <= 0) {
    if (spanishEl) spanishEl.textContent = "¡El evento ha comenzado!";
    if (englishEl) englishEl.textContent = "The event has started!";
    clearInterval(intervalId);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  if (spanishEl)
    spanishEl.textContent = `Faltan ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos para ExpoTech 2025`;

  if (englishEl)
    englishEl.textContent = `Only ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds left for ExpoTech 2025`;
}

const intervalId = setInterval(updateCountdown, 1000);
updateCountdown();

//Cerrar Menu al tocar body
document.body.addEventListener('click', (e) => {
  const menu = document.querySelector('.menu');
  const menuButton = document.querySelector('.menu-icon'); // botón que abre el menú

  if (document.body.classList.contains('menu-open')) {
    // Si clickeas fuera del menú y fuera del botón
    if (!menu.contains(e.target) && e.target !== menu && e.target !== menuButton) {
      menu.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  }
});
