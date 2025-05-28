// Fade in hero content
window.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  hero.style.opacity = 0;
  hero.style.transition = "opacity 1.2s ease-in-out";
  setTimeout(() => (hero.style.opacity = 1), 300);
});

// Scroll reveal animation for timeline cards
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1
  }
);

document.querySelectorAll(".timeline-card").forEach(card => {
  card.classList.add("hidden");
  observer.observe(card);
});
