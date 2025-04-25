document.addEventListener("DOMContentLoaded", () => {
  const languageSelector = document.getElementById("languageSelector");

  const savedLanguage = localStorage.getItem("language") || "es";
  languageSelector.value = savedLanguage;
  changeLanguage(savedLanguage);

  languageSelector.addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    localStorage.setItem("language", selectedLanguage);
    changeLanguage(selectedLanguage);
  });

  function changeLanguage(language) {
    const elementsToTranslate = document.querySelectorAll("[data-translate]");

    elementsToTranslate.forEach((element) => {
      const key = element.getAttribute("data-translate");
      const translation = key
        .split(".")
        .reduce((obj, i) => obj[i], translations[language]);

      if (translation) {
        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
          if (element.type === "submit") {
            element.value = translation;
          } else {
            element.placeholder = translation;
          }
        } else {
          element.innerHTML = translation;
        }
      }
    });

    if (typeof moto !== "undefined" && moto.especificaciones) {
      const specsElement = document.getElementById("motoSpecs");
      specsElement.innerHTML =
        moto.especificaciones[language] || moto.especificaciones["es"];
    }
  }
});
