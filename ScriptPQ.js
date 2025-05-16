function toggleMenu() {
  document.querySelector('.menu').classList.toggle('active');
}

function toggleAccordion(header) {
  document.querySelectorAll('.accordion-item').forEach(item => {
      if (item.querySelector('.accordion-header') !== header) {
          item.classList.remove('active');
      }
  });
  header.parentElement.classList.toggle('active');
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

let language = 'es';
const translations = {
  es: {
      title: 'Preguntas Frecuentes',
      menu: ['Inicio', 'Actividades', 'Expositores', 'Preguntas', 'Registro', 'Contacto'],
      questions: [
          '¿Cuál es la fecha del evento?',
          '¿Dónde se realiza la feria?',
          '¿Se necesita inscripción previa?'
      ],
      answers: [
          'El evento se llevará a cabo el 30 de mayo de 2025.',
          'La feria se realiza en el CTP Santo Domingo.',
          'Sí, es necesario registrarse previamente para asistir al evento.'
      ]
  },
  en: {
      title: 'Frequently Asked Questions',
      menu: ['Home', 'Activities', 'Exhibitors', 'Questions', 'Register', 'Contact'],
      questions: [
          'When is the event?',
          'Where is the fair held?',
          'Is prior registration required?'
      ],
      answers: [
          'The event will take place on may 30, 2025.',
          'The fair is held at the CTP Santo Domingo.',
          'Yes, prior registration is required to attend the event.'
      ]
  }
};

function toggleLanguage() {
  language = language === 'es' ? 'en' : 'es';
  document.getElementById('title').innerText = translations[language].title;

  const headers = document.querySelectorAll('.accordion-header');
  const bodies = document.querySelectorAll('.accordion-body');
  const menuLinks = document.querySelectorAll('.menu li a');

  headers.forEach((el, i) => el.innerText = translations[language].questions[i]);
  bodies.forEach((el, i) => el.innerText = translations[language].answers[i]);
  menuLinks.forEach((el, i) => el.innerText = translations[language].menu[i]);
}

const eventDate = new Date('2025-06-10');
const countdown = document.getElementById('countdown');

function updateCountdown() {
  const now = new Date();
  const diff = eventDate - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  countdown.innerText = days > 0 ? `${days} ${language === 'es' ? 'días para el evento' : 'days until the event'}` : (language === 'es' ? '¡El evento ya comenzó!' : 'The event has already started!');
}

updateCountdown();
setInterval(updateCountdown, 86400000);


