function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
  document.body.classList.toggle('menu-open');
}

document.body.addEventListener('click', (e) => {
  const menu = document.querySelector('.menu');
  const menuButton = document.querySelector('.menu-icon');

  if (document.body.classList.contains('menu-open')) {
    // Si el clic NO es dentro del menú y NO es en el botón
    if (!menu.contains(e.target) && e.target !== menuButton) {
      menu.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  }
});

function aplicarIdioma(idioma) {
  const spanishTexts = document.querySelectorAll('.spanish-text');
  const englishTexts = document.querySelectorAll('.english-text');

  if (idioma === 'es') {
    spanishTexts.forEach(el => el.style.display = 'block');
    englishTexts.forEach(el => el.style.display = 'none');
  } else {
    spanishTexts.forEach(el => el.style.display = 'none');
    englishTexts.forEach(el => el.style.display = 'block');
  }

  localStorage.setItem('idioma', idioma);
}

function toggleLanguage() {
  const idiomaActual = localStorage.getItem('idioma') || 'es';
  const nuevoIdioma = idiomaActual === 'es' ? 'en' : 'es';
  aplicarIdioma(nuevoIdioma);
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('modo', 'dark');
  } else {
    localStorage.setItem('modo', 'light');
  }
}

document.getElementById("lang-toggle").onclick = toggleLanguage;
document.getElementById("darkmode-toggle").onclick = toggleDarkMode;

document.addEventListener('DOMContentLoaded', () => {
  // Aplicar modo guardado
  const modoGuardado = localStorage.getItem('modo');
  if (modoGuardado === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }

  // Aplicar idioma guardado
  const idiomaGuardado = localStorage.getItem('idioma') || 'es';
  aplicarIdioma(idiomaGuardado);

  // Formulario y validaciones
  const form = document.getElementById('registroForm');
  const mensajeExito = document.getElementById('mensajeExito');
  const errorIntereses = document.getElementById('errorIntereses');
  const interesesCheckboxes = form.querySelectorAll('input[name="intereses"]');

  interesesCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const algunoSeleccionado = [...interesesCheckboxes].some(cb => cb.checked);
      if (algunoSeleccionado) {
        errorIntereses.style.display = 'none';
      }
    });
  });

  form.addEventListener('submit', (e) => {
    if (!form.checkValidity()) {
      form.reportValidity();
      e.preventDefault();
      return;
    }

    const intereses = form.querySelectorAll('input[name="intereses"]:checked');
    if (intereses.length === 0) {
      e.preventDefault();
      errorIntereses.style.display = 'block';
      return;
    } else {
      errorIntereses.style.display = 'none';
    }

    e.preventDefault();
    mensajeExito.style.display = 'block';
    form.reset();

    setTimeout(() => {
      mensajeExito.style.display = 'none';
    }, 5000);
  });
});
