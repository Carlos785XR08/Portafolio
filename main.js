document.addEventListener('DOMContentLoaded', () => {
    // Selector para el botón de cambio de tema
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    
    
    // Función para cambiar el tema
    function toggleTheme() {
        const isDark = body.classList.toggle('dark-theme');
        body.classList.toggle('light-theme', !isDark);
        
        // Guardar la preferencia en el localStorage
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        // Cambiar el icono del botón
        const icon = themeToggleBtn.querySelector('i');
        if (isDark) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }
    
    // Cargar el tema desde localStorage al inicio
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        const icon = themeToggleBtn.querySelector('i');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        // Por defecto, se aplica el tema oscuro
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
    }
    
    // Escuchar el clic del botón para cambiar el tema
    themeToggleBtn.addEventListener('click', toggleTheme);

    // Funcionalidad del menú desplegable de habilidades
    const dropdownBtns = document.querySelectorAll('.dropdown-btn');
    dropdownBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const dropdownContent = btn.nextElementSibling;
            dropdownContent.style.display = dropdownContent.style.display === 'flex' ? 'none' : 'flex';
            
            // Cambiar la flecha
            const icon = btn.querySelector('i');
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
        });
    });

    // Funcionalidad del carrusel
    const carouselTrack = document.querySelector('.carousel-track');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const projectCards = document.querySelectorAll('.project-card');
    let currentIndex = 0;

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % projectCards.length;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + projectCards.length) % projectCards.length;
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselTrack.style.transform = `translateX(${offset}%)`;
    }

    // Funcionalidad del menú de hamburguesa
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Cambiar el icono del menú de hamburguesa a 'x' y viceversa
        const icon = hamburgerMenu.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times'); // Icono de "x"
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars'); // Icono de "hamburguesa"
        }
    });

    // Cerrar el menú de hamburguesa cuando se hace clic en un enlace
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburgerMenu.querySelector('i').classList.remove('fa-times');
                hamburgerMenu.querySelector('i').classList.add('fa-bars');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Código existente...

    // Funcionalidad del botón de "subir hacia arriba"
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Muestra u oculta el botón según la posición del scroll
    window.onscroll = function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    // Desplaza la página hacia arriba al hacer clic en el botón
    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});