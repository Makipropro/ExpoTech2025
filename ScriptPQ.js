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
document.getElementById("lang-toggle").addEventListener("click", function(event) {
    event.stopPropagation(); // 🔒 Evita que el clic afecte otros elementos como el acordeón
    const currentLang = localStorage.getItem('lang') || 'es';
    setLanguage(currentLang === 'es' ? 'en' : 'es');
});

// Al cargar la página, aplica el idioma guardado
window.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('lang') || 'es';
    setLanguage(savedLang);
});

// Modo oscuro/claro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Acordeón
function toggleAccordion(headerElement) {
    const lang = localStorage.getItem('lang') || 'es';
    const parentItem = headerElement.closest('.accordion-item');
    const bodies = parentItem.querySelectorAll(`.accordion-body.${lang === 'es' ? 'spanish-text' : 'english-text'}`);

    bodies.forEach(body => {
        const isVisible = body.style.display === 'block';
        body.style.display = isVisible ? 'none' : 'block';
    });
}

// Menú responsive
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');

    if (menu.classList.contains('active')) {
        document.body.classList.add('menu-open');
    } else {
        document.body.classList.remove('menu-open');
    }
}
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