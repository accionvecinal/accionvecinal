document.addEventListener("DOMContentLoaded", () => {
  // Lógica para el menú hamburguesa
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Cerrar el menú al hacer clic en un enlace (para mejor UX en móvil)
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
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
});
