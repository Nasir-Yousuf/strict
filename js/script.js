document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation toggle
  const menuToggle = document.getElementById("menuToggle");
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");

  if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
      navbar.classList.toggle("open");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navbar.classList.remove("open");
        navLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      });
    });
  }

  // Lightbox functionality for gallery zoom icons
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const closeBtn = document.querySelector(".close-lightbox");
  const zoomBtns = document.querySelectorAll(".zoom-btn");

  zoomBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const galleryItem = btn.closest(".gallery-item");
      const imgElement = galleryItem.querySelector(".gallery-photo");
      if (imgElement && lightbox && lightboxImg) {
        lightboxImg.src = imgElement.src;
        lightbox.classList.add("active");
      }
    });
  });

  if (closeBtn && lightbox) {
    closeBtn.addEventListener("click", () => {
      lightbox.classList.remove("active");
    });

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove("active");
      }
    });
  }

  // Contact form submission handler
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you! Your message has been sent.");
      contactForm.reset();
    });
  }
});
