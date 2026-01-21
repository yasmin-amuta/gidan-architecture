/* Accordion styles */
const toggles = document.querySelectorAll(".accordion-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const content = toggle.nextElementSibling;
    const isOpen = content.classList.contains("open");

    // Close all accordions
    document.querySelectorAll(".accordion-content").forEach((item) => {
      item.classList.remove("open");
    });
    document.querySelectorAll(".accordion-toggle").forEach((btn) => {
      btn.classList.remove("active");
    });

    // Open the clicked one
    if (!isOpen) {
      toggle.classList.add("active");
      content.classList.add("open");
    }
  });
});

//lenis scroll
const lenis = new Lenis({
  duration: 2, // smoothness: lower = snappier, higher = smoother
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // default easing
  smooth: true,
  smoothTouch: 0.2, //or 0.1
});

// Connect Lenis & ScrollTrigger
lenis.on("scroll", ScrollTrigger.update);

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
