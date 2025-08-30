window.addEventListener(
  "touchmove",
  function (event) {
    // Prevent multi-touch gestures
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  },
  { passive: false },
);

window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
```
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;

  if (scrollTop < 0) {
    window.scrollTo(0, 0);
  }
  if (scrollTop + clientHeight >= scrollHeight) {
    window.scrollTo(0, scrollHeight - clientHeight);
  }
});

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
