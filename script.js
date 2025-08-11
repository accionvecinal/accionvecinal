document.addEventListener("DOMContentLoaded", () => {
  // Aquí puedes agregar funcionalidad para el carrusel de candidatos
  // y los pop-ups. Por ahora, solo mostraremos un mensaje en la consola.

  const botonesPerfil = document.querySelectorAll(".btn-perfil");

  botonesPerfil.forEach((boton) => {
    boton.addEventListener("click", (event) => {
      const candidatoId = event.target.dataset.candidato;
      console.log(`Clic en el botón de perfil del candidato: ${candidatoId}`);

      // Aquí iría el código para mostrar el pop-up o expandir la sección
      // con el video y la biografía del candidato.
    });
  });
});
