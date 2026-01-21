document.addEventListener("DOMContentLoaded", (event) => {
  (function () {
    const btn = document.getElementById("menuBtn");
    const panel = document.getElementById("mainMenu");
    const overlay = document.getElementById("overlay");

    function openMenu() {
      panel.classList.add("show");
      overlay.classList.add("show");
      panel.setAttribute("aria-hidden", "false");
      btn.setAttribute("aria-expanded", "true");
    }
    function closeMenu() {
      panel.classList.remove("show");
      overlay.classList.remove("show");
      panel.setAttribute("aria-hidden", "true");
      btn.setAttribute("aria-expanded", "false");
    }

    btn.addEventListener("click", (e) => {
      const isOpen = panel.classList.contains("show");
      if (isOpen) closeMenu();
      else openMenu();
    });

    // close when clicking overlay or outside
    overlay.addEventListener("click", closeMenu);
    document.addEventListener("click", (e) => {
      if (
        !panel.contains(e.target) &&
        !btn.contains(e.target) &&
        panel.classList.contains("show")
      ) {
        closeMenu();
      }
    });

    // Close on escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && panel.classList.contains("show")) closeMenu();
    });
  })();

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

  //GSAP
  // INTRO TIMELINE

  introTL = gsap.timeline();

  introTL
    .from(".heading h1", {
      opacity: 0,
      duration: 1,
      ease: "back",
      yPercent: 100,
    })
    .from(".sub-title", {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      ease: "back",
    })
    .from(".topbar", {
      opacity: 0,
      yPercent: -100,
      duration: 1,
      ease: "back",
    });
});
