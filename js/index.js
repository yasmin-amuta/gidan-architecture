document.addEventListener("DOMContentLoaded", (event) => {
  document.fonts.ready.then(() => {
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

    // GSAP
    // INTRO TIMELINE
    introTL = gsap.timeline();

    introTL
      .from(".hero-gallery img", {
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        ease: "back",
      })
      .from(".topbar", {
        opacity: 0,
        yPercent: -100,
        duration: 0.5,
        ease: "back",
      })
      .from(".hero-desc", { opacity: 0, ease: "back", duration: 1 });

    let mm = gsap.matchMedia();
    mm.add("(min-width:1025px)", () => {
      // Desktop animation

      //about video

      let aboutTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-vid",

          start: "center center",
          end: "+=700",

          scrub: 0.3,
          pin: true,
        },
      });

      aboutTl.to(".about-vid video", {
        scale: 0.9,
      });
    });

    mm.add("(max-width:1024px)", () => {
      // Desktop animation

      //about video

      let aboutTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-vid",

          start: "center center",
          end: "+=600",

          scrub: 0.3,
          pin: true,
        },
      });

      aboutTl.to(".about-vid video", {
        scale: 0.9,
      });
    });

    mm.add("(max-width:768px)", () => {
      // Desktop animation

      //about video

      let aboutTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-vid",

          start: "center center",
          end: "+=600",

          scrub: 0.3,
          pin: true,
        },
      });

      aboutTl.to(".about-vid video", {
        scale: 0.9,
      });
    });

    mm.add("(max-width:576px)", () => {
      // Desktop animation

      //about video

      let aboutTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-vid",

          start: "center center",
          end: "+=300",

          scrub: true,
          pin: true,
        },
      });

      aboutTl.to(".about-vid video", {
        duration: 0.5,
        scale: 0.7,
      });
    });
  });
});
