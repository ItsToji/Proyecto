function redirigirTipo() {
  const url = document.getElementById("tipoMoto").value;
  if (url) {
    window.location.href = url;
  }
}
