function toggleNavigation() {
  const navbar = document.querySelector('[data-nav-element="navbar"]');
  const currentState = navbar.getAttribute("data-nav-state");
  const newState = currentState === "open" ? "closed" : "open";

  navbar.setAttribute("data-nav-state", newState);
  document.body.style.overflow = newState === "open" ? "hidden" : "";
}

document
  .querySelector('[data-nav-element="menu"]')
  .addEventListener("click", toggleNavigation);

document
  .querySelector('[data-nav-element="overlay"]')
  .addEventListener("click", toggleNavigation);

function smoothScroll() {
  document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth >= 992) {
      const lenis = new Lenis({
        smooth: true,
        lerp: 0.1,
        wheelMultiplier: 1,
        infinite: false,
      });
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
  });
}
