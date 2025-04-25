const tira = document.querySelector(".tira-fotografica");
let scrollPosition = 0;
const imageWidth = tira.offsetWidth / 3;

function autoScrollTira() {
  scrollPosition += imageWidth;

  if (scrollPosition >= tira.scrollWidth - tira.clientWidth) {
    scrollPosition = 0;
  }

  tira.scrollTo({
    left: scrollPosition,
    behavior: "smooth",
  });
}

setInterval(autoScrollTira, 2500);
