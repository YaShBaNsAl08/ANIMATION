  // GSAP animations
  gsap.from("#navbar", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
  gsap.from(".nav-link", { duration: 1, y: -50, opacity: 0, stagger: 0.2, delay: 0.5, ease: "power2.out" });
  gsap.from(".slider", { duration: 1, x: -50, opacity: 0, stagger: 0.2, delay: 1, ease: "power2.out" });

  // Image slider functionality
  const slides = document.querySelector(".slides");
  const slideWidth = document.querySelector(".slide").clientWidth;
  let currentIndex = 0;

  function nextSlide() {
    if (currentIndex < slides.children.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    gsap.to(slides, { duration: 0.5, x: -currentIndex * slideWidth, ease: "power2.out" });
  }

  setInterval(nextSlide, 3000);