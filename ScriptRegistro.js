function toggleMenu() {
  document.querySelector('.menu').classList.toggle('active');
}

function toggleLanguage() {
  const spanishTexts = document.querySelectorAll('.spanish-text');
  const englishTexts = document.querySelectorAll('.english-text');

  spanishTexts.forEach(el => el.style.display = el.style.display === 'none' ? '' : 'none');
  englishTexts.forEach(el => el.style.display = el.style.display === 'none' ? '' : 'none');
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

document.getElementById("lang-toggle").onclick = toggleLanguage;
document.getElementById("darkmode-toggle").onclick = toggleDarkMode;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registroForm');
  const mensajeExito = document.getElementById('mensajeExito');
  const errorIntereses = document.getElementById('errorIntereses');

  const interesesCheckboxes = form.querySelectorAll('input[name="intereses"]');

  // Ocultar mensaje de error cuando se seleccione al menos uno
  interesesCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const algunoSeleccionado = [...interesesCheckboxes].some(cb => cb.checked);
      if (algunoSeleccionado) {
        errorIntereses.style.display = 'none';
      }
    });
  });

  form.addEventListener('submit', (e) => {
    // Primero dejamos que el navegador valide los campos required y email nativos
    if (!form.checkValidity()) {
      // Dejar que el navegador muestre sus mensajes nativos
      form.reportValidity();
      e.preventDefault(); // evitar submit si no válido
      return;
    }

    // Validar checkboxes manualmente
    const intereses = form.querySelectorAll('input[name="intereses"]:checked');
    if (intereses.length === 0) {
      e.preventDefault();
      errorIntereses.style.display = 'block';
      return;
    } else {
      errorIntereses.style.display = 'none';
    }

    // Si pasa todas las validaciones mostramos mensaje de éxito y limpiamos
    e.preventDefault(); // evitar que recargue la página

    mensajeExito.style.display = 'block';
    form.reset();

    setTimeout(() => {
      mensajeExito.style.display = 'none';
    }, 5000);
  });
});

