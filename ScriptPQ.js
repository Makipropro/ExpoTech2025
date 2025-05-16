// Función para cambiar el idioma
function toggleLanguage() {
  const spanishElements = document.querySelectorAll(".spanish-text");
  const englishElements = document.querySelectorAll(".english-text");

  const isSpanishVisible = Array.from(spanishElements).some(el => {
    return window.getComputedStyle(el).display !== "none";
  });

  if (isSpanishVisible) {
    spanishElements.forEach(el => el.style.display = "none");
    englishElements.forEach(el => el.style.display = "block");
  } else {
    spanishElements.forEach(el => el.style.display = "block");
    englishElements.forEach(el => el.style.display = "none");
  }
}


// Modo oscuro/claro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Acordeón
function toggleAccordion(element) {
    const parentItem = element.parentElement;
    const bodies = parentItem.querySelectorAll('.accordion-body');

    // Oculta todos los cuerpos dentro del acordeón actual
    bodies.forEach(body => {
        body.style.display = (body.style.display === 'block') ? 'none' : 'block';
    });
}

// Menú responsive
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}



