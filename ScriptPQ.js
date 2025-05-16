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


