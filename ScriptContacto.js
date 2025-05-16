// Función para cambiar el idioma
document.getElementById("lang-toggle").onclick = function() {
    var spanishElements = document.querySelectorAll('.spanish-text');
    var englishElements = document.querySelectorAll('.english-text');
    
    spanishElements.forEach(function(element) {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    });
  
    englishElements.forEach(function(element) {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    });
  };
  
  // Función para el modo oscuro
  document.getElementById("darkmode-toggle").onclick = function() {
    document.body.classList.toggle('dark-mode');
  };
  
  // Función para mostrar/ocultar el menú en dispositivos móviles
  function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
  }
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  const mensajeExito = document.getElementById("mensaje-exito");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita envío real

    // Mostrar el mensaje
    mensajeExito.style.display = "block";
    mensajeExito.classList.remove("fade"); // Reinicia animación si se repite
    void mensajeExito.offsetWidth; // Truco para reiniciar animación
    mensajeExito.classList.add("fade");

    // Ocultarlo después de 5 segundos (opcional si ya usas la animación)
    setTimeout(() => {
      mensajeExito.style.display = "none";
    }, 5000);

    // Limpiar el formulario
    form.reset();
  });
});

