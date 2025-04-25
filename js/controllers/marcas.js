document.addEventListener("DOMContentLoaded", () => {
  const marcas = document.querySelectorAll(".marca img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxInfo = document.getElementById("lightboxInfo");

  marcas.forEach((marca) => {
    marca.addEventListener("click", () => {
      const userLang = localStorage.getItem("language") || "es";
      const infoMarcas = translations[userLang].marcasInfo;

      const marcaNombre = marca.alt.trim();

      lightbox.style.display = "flex";
      lightboxImg.src = marca.src;
      lightboxInfo.textContent =
        infoMarcas[marcaNombre] ||
        translations[userLang]?.info?.infoNoDisponible ||
        "Información no disponible.";
    });
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      cerrarLightbox();
    }
  });

  function cerrarLightbox() {
    lightbox.style.display = "none";
  }

  window.cerrarLightbox = cerrarLightbox;
});

function abrirVideoLightbox() {
  const videoLightbox = document.getElementById("videoLightbox");
  const video = document.getElementById("videoYamaha");
  videoLightbox.style.display = "flex";
  video.play();

  videoLightbox.addEventListener("click", (event) => {
    if (event.target === videoLightbox) {
      cerrarVideoLightbox();
    }
  });
}

function cerrarVideoLightbox() {
  const videoLightbox = document.getElementById("videoLightbox");
  const video = document.getElementById("videoYamaha");
  videoLightbox.style.display = "none";
  video.pause();
  video.currentTime = 0;
}
