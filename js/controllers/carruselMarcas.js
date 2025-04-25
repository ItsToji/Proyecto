const imagenes = document.querySelector(".imagenes");
const imagenesOriginales = document.querySelectorAll(".imagenes img");
const totalImagenes = imagenesOriginales.length;

let indiceActual = 0;

const primeraImagen = imagenesOriginales[0].cloneNode(true);
imagenes.appendChild(primeraImagen);

const anchoImagen = 300;

function moverCarrusel(direccion) {
  indiceActual += direccion;
  imagenes.style.transition = "transform 0.7s cubic-bezier(0.77, 0, 0.175, 1)";
  imagenes.style.transform = `translateX(-${indiceActual * anchoImagen}px)`;

  if (indiceActual === totalImagenes) {
    setTimeout(() => {
      imagenes.style.transition = "none";
      imagenes.style.transform = "translateX(0)";
      indiceActual = 0;
    }, 700);
  }

  if (indiceActual < 0) {
    imagenes.style.transition = "none";
    indiceActual = totalImagenes - 1;
    imagenes.style.transform = `translateX(-${indiceActual * anchoImagen}px)`;
  }
}

function irMarca() {
  const url = document.getElementById("marcas").value;
  if (url) {
    window.open(url, "_blank");
  }
}
