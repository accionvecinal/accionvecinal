document.addEventListener("DOMContentLoaded", () => {
  // Lógica para el menú hamburguesa
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  // Lógica para cerrar el menú al hacer clic en un enlace de navegación
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      // Solo cerramos el menú si está activo
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
      }
      // La navegación a la sección se mantiene sin necesidad de event.preventDefault()
      // porque el enlace href ya hace el trabajo por nosotros.
    });
  });

  // Lógica para los botones de perfil (se mantiene)
  const botonesPerfil = document.querySelectorAll(".btn-perfil");
  botonesPerfil.forEach((boton) => {
    boton.addEventListener("click", (event) => {
      const candidatoId = event.target.dataset.candidato;
      console.log(`Clic en el botón de perfil del candidato: ${candidatoId}`);
      // Aquí iría el código para el pop-up
    });
  });

  // Lógica del Carrusel de Candidatos (se mantiene)
  const carrusel = document.querySelector(".carrusel-candidatos");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  if (carrusel && prevBtn && nextBtn) {
    const card = carrusel.querySelector(".candidato-card");
    if (card) {
      const carruselStyle = window.getComputedStyle(carrusel);
      const gap = parseFloat(carruselStyle.gap) || 0;
      const scrollAmount = card.offsetWidth + gap;

      nextBtn.addEventListener("click", () => {
        carrusel.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });

      prevBtn.addEventListener("click", () => {
        carrusel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      });
    }
  }
});
