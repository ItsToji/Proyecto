document.addEventListener("DOMContentLoaded", () => {
  const buscador = document.getElementById("buscadorServicios");
  const servicios = document.querySelectorAll(".servicioEspecial");

  buscador.addEventListener("input", () => {
    const filtro = buscador.value.toLowerCase();
    const lang = localStorage.getItem("language") || "es";

    servicios.forEach((servicio) => {
      const nombreElemento = servicio.querySelector(".nombreServicio");
      const descripcionElemento = servicio.querySelector(".desServicio");

      const keyNombre = nombreElemento.getAttribute("data-translate");
      const keyDescripcion = descripcionElemento.getAttribute("data-translate");

      const textoNombre = keyNombre
        ? getTranslatedText(lang, keyNombre)
        : nombreElemento.textContent;
      const textoDescripcion = keyDescripcion
        ? getTranslatedText(lang, keyDescripcion)
        : descripcionElemento.textContent;

      const coincide =
        textoNombre.toLowerCase().includes(filtro) ||
        textoDescripcion.toLowerCase().includes(filtro);

      servicio.style.display = coincide ? "flex" : "none";
    });
  });

  function getTranslatedText(lang, key) {
    return (
      key.split(".").reduce((obj, prop) => obj?.[prop], translations[lang]) ||
      ""
    );
  }
});
