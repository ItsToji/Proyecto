let indice = 0;
const slides = document.querySelectorAll(".slide");
const carrusel = document.querySelector(".carousel");
let intervalo;

function mostrarSlide(n) {
  slides.forEach((slide) => slide.classList.remove("active"));

  indice = (n + slides.length) % slides.length;
  slides[indice].classList.add("active");
}

function moverCarrusel(direccion) {
  mostrarSlide(indice + direccion);
  reiniciarAutoCarrusel();
}

function iniciarAutoCarrusel() {
  intervalo = setInterval(() => {
    mostrarSlide(indice + 1);
  }, 2500);
}

function detenerAutoCarrusel() {
  clearInterval(intervalo);
}

function reiniciarAutoCarrusel() {
  detenerAutoCarrusel();
  iniciarAutoCarrusel();
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarSlide(indice);
  iniciarAutoCarrusel();

  carrusel.addEventListener("mouseenter", detenerAutoCarrusel);
  carrusel.addEventListener("mouseleave", iniciarAutoCarrusel);
});

const counters = document.querySelectorAll(".contador");
let yaEjecutado = false;

function iniciarContadores() {
  if (yaEjecutado) return;
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const updateCount = () => {
      const current = +counter.innerText.replace(/,/g, "");
      const increment = target / 100;
      if (current < target) {
        counter.innerText = Math.ceil(current + increment).toLocaleString();
        setTimeout(updateCount, 15);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };
    updateCount();
  });
  yaEjecutado = true;
}

window.addEventListener("scroll", () => {
  const seccion = document.querySelector(".estadisticas");
  const seccionTop = seccion.getBoundingClientRect().top;
  const ventanaAlto = window.innerHeight;

  if (seccionTop < ventanaAlto) {
    iniciarContadores();
  }
});
