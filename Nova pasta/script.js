// Scroll suave para catálogo
function scrollToCatalogo() {
  document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
}

// Animação de fade-in ao scroll
const elements = document.querySelectorAll(".card, .sobre, .contato");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      entry.target.style.transition = "all 1s ease";
    }
  });
});

elements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(50px)";
  observer.observe(el);
});
