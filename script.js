window.addEventListener("DOMContentLoaded", () => {
  // Fade in hero
  document.querySelector(".hero").classList.add("visible");

  // Scroll-reveal for timeline cards
  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".timeline-card").forEach(card => {
    obs.observe(card);
  });
});
