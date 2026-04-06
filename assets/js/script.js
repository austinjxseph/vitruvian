document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  function shouldSkipStagger() {
    return (
      document.body.getAttribute("data-motion-stagger-disabled") === "true" ||
      (window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    );
  }

  function canUseStagger() {
    if (typeof gsap === "undefined" || typeof SplitText === "undefined") {
      console.warn("GSAP SplitText not loaded. Text stagger disabled.");
      return false;
    }

    if (typeof gsap.registerPlugin === "function") {
      gsap.registerPlugin(SplitText);
    }

    return true;
  }

  function setStaggerLoading(active) {
    document.body.classList.toggle("loading", active);
    window.dispatchEvent(
      new CustomEvent(active ? "stagger:start" : "stagger:done"),
    );
  }

  function getStaggerTargets(root) {
    var scope = root || document;

    return Array.prototype.filter.call(
      scope.querySelectorAll("[data-motion-stagger]"),
      function (element) {
        if (!element.textContent || !element.textContent.trim()) return false;

        var styles = window.getComputedStyle(element);
        if (styles.display === "none" || styles.visibility === "hidden") {
          return false;
        }

        var rect = element.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0;
      },
    );
  }

  function prepareStaggerElement(element) {
    if (element.__staggerSplit) return element.__staggerSplit;

    var split = SplitText.create(element, {
      type: "lines",
      linesClass: "a-stagger",
    });

    if (!split.lines.length) {
      split.revert();
      return null;
    }

    if (split.masks && split.masks.length) {
      split.masks.forEach(function (mask) {
        mask.classList.add("a-stagger", "mask");
      });
    }

    gsap.set(split.lines, { opacity: 0 });
    element.__staggerSplit = split;

    return split;
  }

  function initStagger(root) {
    if (shouldSkipStagger() || !canUseStagger()) return;

    var scope = root || document;
    var elements = getStaggerTargets(scope);

    if (!elements.length) return;

    var timeline = gsap.timeline({
      onStart: function () {
        setStaggerLoading(true);
      },
      onComplete: function () {
        setStaggerLoading(false);
      },
      onInterrupt: function () {
        setStaggerLoading(false);
      },
    });

    elements.forEach(function (element) {
      var split = prepareStaggerElement(element);
      if (!split) return;

      timeline.to(
        split.lines,
        {
          opacity: 1,
          duration: 0.6,
          ease: "cubic-bezier(0.23, 1, 0.32, 1)",
          stagger: 0.08,
          clearProps: "opacity",
        },
        0,
      );
    });
  }

  function primeStagger(root) {
    if (shouldSkipStagger() || !canUseStagger()) {
      return { disconnect: function () {} };
    }

    var scope = root || document;
    var observer = null;

    function prepareVisibleTargets() {
      getStaggerTargets(scope).forEach(function (element) {
        prepareStaggerElement(element);
      });
    }

    prepareVisibleTargets();

    observer = new MutationObserver(function () {
      prepareVisibleTargets();
    });

    observer.observe(scope, {
      childList: true,
      subtree: true,
    });

    window.setTimeout(function () {
      if (observer) observer.disconnect();
    }, 1500);

    return {
      disconnect: function () {
        if (observer) observer.disconnect();
      },
    };
  }

  function queueStagger(root) {
    var scope = root || document;
    var run = function () {
      requestAnimationFrame(function () {
        if (getStaggerTargets(scope).length) {
          initStagger(scope);
          return;
        }

        var observer = new MutationObserver(function () {
          if (!getStaggerTargets(scope).length) return;

          observer.disconnect();
          requestAnimationFrame(function () {
            initStagger(scope);
          });
        });

        observer.observe(scope, {
          childList: true,
          subtree: true,
        });

        window.setTimeout(function () {
          observer.disconnect();
        }, 1500);
      });
    };

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(run);
      return;
    }

    run();
  }

  // --- Lenis smooth scroll ---
  (function initLenis() {
    if (typeof Lenis === "undefined") {
      console.warn("Lenis library not loaded. Smooth scrolling disabled.");
      return;
    }

    var lenis = new Lenis({
      smoothWheel: true,
      wheelMultiplier: 1,
      lerp: 0.12,
    });

    // Integrate with GSAP ticker if available
    if (typeof gsap !== "undefined" && gsap.ticker) {
      gsap.ticker.add(function (time) {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    } else {
      // Fallback to rAF loop
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    // Integrate with ScrollTrigger if available
    if (typeof ScrollTrigger !== "undefined") {
      lenis.on("scroll", ScrollTrigger.update);
    }

    // Expose globally
    window.lenis = lenis;

    // Signal ready for components that load later
    window.dispatchEvent(new CustomEvent("lenis:ready"));

    // Refresh Lenis dimensions after Svelte components hydrate
    // (components add height to the page that Lenis needs to measure)
    window.addEventListener(
      "svelte:ready",
      function () {
        requestAnimationFrame(function () {
          lenis.resize();
          if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();
        });
      },
      { once: true },
    );

    // Also refresh after all images have loaded (belt and suspenders)
    window.addEventListener("load", function () {
      lenis.resize();
      if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();
    });
  })();

  // --- Barba.js page transitions ---
  (function initBarba() {
    if (typeof barba === "undefined" || typeof gsap === "undefined") return;

    // Listen for canvas component clicks — route through Barba instead of window.location
    document.addEventListener("reel:exit", function (e) {
      barba.go(e.detail.url);
    });
    document.addEventListener("strip:exit", function (e) {
      barba.go(e.detail.url);
    });

    // --- Initial load: preloader or immediate reveal ---
    var mainEl = document.querySelector("[data-barba='container']");
    if (mainEl) {
      gsap.set(mainEl, { opacity: 0 });
    }

    var hasPreloader = !!document.querySelector("c-preloader");
    if (hasPreloader) {
      window.addEventListener(
        "preloader:exit",
        function () {
          if (mainEl) {
            var staggerPrep = primeStagger(mainEl);
            gsap.to(mainEl, {
              opacity: 1,
              duration: 0.4,
              delay: 0.1,
              ease: "power2.out",
              onComplete: function () {
                staggerPrep.disconnect();
                queueStagger(mainEl);
              },
            });
          }
        },
        { once: true },
      );
    } else if (mainEl) {
      var initialStaggerPrep = primeStagger(mainEl);
      gsap.set(mainEl, { opacity: 1 });
      initialStaggerPrep.disconnect();
      queueStagger(mainEl);
    }

    barba.init({
      prevent: function (data) {
        return data.el && data.el.hasAttribute("data-barba-prevent");
      },

      transitions: [
        {
          name: "default",

          leave: function (data) {
            if (window.lenis) window.lenis.stop();
            window.dispatchEvent(new CustomEvent("navigation:exit"));

            return new Promise(function (resolve) {
              gsap.to(data.current.container, {
                opacity: 0,
                duration: 0.2,
                ease: "power2.in",
                onComplete: function () {
                  data.current.container.style.display = "none";
                  resolve();
                },
              });
            });
          },

          enter: function (data) {
            var el = data.next.container;
            window.scrollTo(0, 0);
            if (window.lenis) window.lenis.scrollTo(0, { immediate: true });

            el.style.opacity = "0";
            var staggerPrep = primeStagger(el);

            return new Promise(function (resolve) {
              requestAnimationFrame(function () {
                gsap.to(el, {
                  opacity: 1,
                  duration: 0.2,
                  ease: "power2.out",
                  onComplete: function () {
                    staggerPrep.disconnect();
                    queueStagger(el);
                    resolve();
                  },
                });
              });
            });
          },

          after: function () {
            if (window.lenis) {
              window.lenis.start();
              window.lenis.resize();
            }
            if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();
          },
        },
      ],
    });
  })();
});
