// Al cargar la página, aplica modo oscuro e idioma guardados
document.addEventListener("DOMContentLoaded", () => {
  // Recuperar modo oscuro
  const modoGuardado = localStorage.getItem('modo');
  if (modoGuardado === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }

  // Recuperar idioma, por defecto español
  const idiomaGuardado = localStorage.getItem('idioma') || 'es';
  aplicarIdioma(idiomaGuardado);

  // Configurar evento para el formulario con mensaje de éxito
  const form = document.querySelector(".contact-form");
  const mensajeExito = document.getElementById("mensaje-exito");

  if (form && mensajeExito) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Evita el envío real

      // Mostrar mensaje de éxito con animación
      mensajeExito.style.display = "block";
      mensajeExito.classList.remove("fade"); // Reinicia animación
      void mensajeExito.offsetWidth; // Truco para reiniciar animación
      mensajeExito.classList.add("fade");

      // Ocultar mensaje después de 5 segundos
      setTimeout(() => {
        mensajeExito.style.display = "none";
      }, 5000);

      // Limpiar formulario
      form.reset();
    });
  }
});

// Función para aplicar idioma y guardar preferencia
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

  localStorage.setItem('idioma', idioma);
}

// Evento para toggle idioma, guarda la preferencia
document.getElementById("lang-toggle").onclick = function() {
  const idiomaActual = localStorage.getItem('idioma') || 'es';
  const nuevoIdioma = idiomaActual === 'es' ? 'en' : 'es';
  aplicarIdioma(nuevoIdioma);
};

// Evento para toggle modo oscuro, guarda la preferencia
document.getElementById("darkmode-toggle").onclick = function() {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('modo', 'dark');
  } else {
    localStorage.setItem('modo', 'light');
  }
};

// Función para mostrar/ocultar el menú móvil
function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');

  if (menu.classList.contains('active')) {
    document.body.classList.add('menu-open');
  } else {
    document.body.classList.remove('menu-open');
  }
}

// Cerrar menú si se hace clic fuera de él y fuera del botón
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
