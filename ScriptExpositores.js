// Al cargar la página, aplica modo oscuro e idioma guardados
document.addEventListener("DOMContentLoaded", () => {
  // Aplicar modo oscuro según localStorage
  const modoGuardado = localStorage.getItem('modo');
  if (modoGuardado === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }

  // Aplicar idioma guardado, por defecto español
  const idiomaGuardado = localStorage.getItem('idioma') || 'es';
  aplicarIdioma(idiomaGuardado);
});

// Función para aplicar idioma y guardar preferencia
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

// Cambiar idioma y guardar preferencia
document.getElementById("lang-toggle").onclick = function() {
  const idiomaActual = localStorage.getItem('idioma') || 'es';
  const nuevoIdioma = idiomaActual === 'es' ? 'en' : 'es';
  aplicarIdioma(nuevoIdioma);
};

// Alternar modo oscuro y guardar preferencia
document.getElementById("darkmode-toggle").onclick = function() {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('modo', 'dark');
  } else {
    localStorage.setItem('modo', 'light');
  }
};

// Mostrar/ocultar menú en móvil
function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');

  if (menu.classList.contains('active')) {
    document.body.classList.add('menu-open');
  } else {
    document.body.classList.remove('menu-open');
  }
}

// Función de búsqueda en tarjetas
function searchFunction() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const tarjetas = document.querySelectorAll(".tarjeta");

  tarjetas.forEach(tarjeta => {
    const nombre = tarjeta.querySelector("h2")?.textContent.toLowerCase() || "";
    const descripcion = tarjeta.querySelector("p:nth-of-type(2)")?.textContent.toLowerCase() || "";

    if (nombre.includes(input) || descripcion.includes(input)) {
      tarjeta.style.display = "block";
    } else {
      tarjeta.style.display = "none";
    }
  });
}

// Cerrar menú al hacer clic fuera
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
