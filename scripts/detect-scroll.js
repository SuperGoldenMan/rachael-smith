document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const scrollThreshold = window.innerHeight/6;
  
    // Initially hide the navbar
    navbar.style.transform = "translateY(-100%)";
    navbar.style.transition = "transform 0.3s ease-in-out";
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > scrollThreshold) {
        navbar.style.transform = "translateY(0)";
      } else {
        navbar.style.transform = "translateY(-100%)";
      }
    });
  });