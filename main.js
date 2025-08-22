// MENU RESPONSIVO
const toggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// FORMULARIO
const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("¡Gracias por tu mensaje! Te contactaré pronto.");
  form.reset();
});
