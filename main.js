document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const menuHamburguesa = document.getElementById('menu-hamburguesa');
    const navLinks = document.getElementById('nav-links');

    // Lógica para el menú móvil
    menuHamburguesa.addEventListener('click', () => {
        navLinks.classList.toggle('mostrando');
    });

    // Función para aplicar el tema y guardar preferencia
    const applyTheme = (theme) => {
        body.classList.remove('light-mode', 'dark-mode');
        body.classList.add(theme);
        
        // Cambiar ícono del botón
        const icon = themeToggleButton.querySelector('i');
        if (theme === 'dark-mode') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
        
        localStorage.setItem('theme', theme);
    };

    // Evento para el botón de cambio de tema
    themeToggleButton.addEventListener('click', () => {
        const isDarkMode = body.classList.contains('dark-mode');
        applyTheme(isDarkMode ? 'light-mode' : 'dark-mode');
    });

    // Cargar tema guardado al iniciar
    const savedTheme = localStorage.getItem('theme') || 'dark-mode'; // <-- ¡Cambio aquí!
    applyTheme(savedTheme);
});