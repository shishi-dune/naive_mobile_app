// Particle Background Configuration
particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { random: true, anim: { enable: true, speed: 1, opacity_min: 0.1 } },
      size: { value: 3, random: true, anim: { enable: false } },
      line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4 },
      move: { enable: true, speed: 2, direction: "none" }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" }
      }
    },
    retina_detect: true
  });
  
  // Scroll To Top Button
  const scrollToTop = document.getElementById("scrollToTop");
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollToTop.style.display = 'block';
    } else {
      scrollToTop.style.display = 'none';
    }
  });
  
  scrollToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });