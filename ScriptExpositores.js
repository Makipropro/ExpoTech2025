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

    if (menu.classList.contains('active')) {
        document.body.classList.add('menu-open');
    } else {
        document.body.classList.remove('menu-open');
    }
}
        function searchFunction() {
            var input = document.getElementById("searchInput").value.toLowerCase();
            var tarjetas = document.querySelectorAll(".tarjeta");

            tarjetas.forEach(function(tarjeta) {
                var nombre = tarjeta.querySelector("h2").textContent.toLowerCase();
                var descripcion = tarjeta.querySelector("p:nth-of-type(2)").textContent.toLowerCase();

                if (nombre.includes(input) || descripcion.includes(input)) {
                    tarjeta.style.display = "block";
                } else {
                    tarjeta.style.display = "none";
                }
            });
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