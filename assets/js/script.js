document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  var DESKTOP_MIN_WIDTH = 992;
  var currentMotionMode = null;
  var hasBootstrappedOnce = false;
  var isBarbaInitialized = false;
  var navigationHandlersBound = false;
  var responsiveMutationObserver = null;
  var responsiveResizeTimer = 0;
  var responsiveMediaQuery = null;
  var activeStaggerObservers = new Set();
  var activeStaggerTimeouts = new Set();
  var suspendResponsiveMutationUntil = 0;
  var lenisTickerCallback = null;
  var lenisRafId = 0;
  var lenisSvelteReadyHandler = null;
  var lenisLoadHandler = null;

  function isDesktopViewport() {
    return (
      !window.matchMedia ||
      window.matchMedia("(min-width: " + DESKTOP_MIN_WIDTH + "px)").matches
    );
  }

  function shouldUseAnimatedExperience() {
    return isDesktopViewport();
  }

  function shouldSkipStagger() {
    return (
      !shouldUseAnimatedExperience() ||
      document.body.getAttribute("data-motion-state") === "disabled" ||
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

  function suspendResponsiveMutation(ms) {
    suspendResponsiveMutationUntil = Math.max(
      suspendResponsiveMutationUntil,
      Date.now() + (ms || 0),
    );
  }

  function registerStaggerObserver(observer) {
    if (observer) activeStaggerObservers.add(observer);
    return observer;
  }

  function unregisterStaggerObserver(observer) {
    if (!observer) return;
    observer.disconnect();
    activeStaggerObservers.delete(observer);
  }

  function registerStaggerTimeout(timeoutId) {
    if (timeoutId) activeStaggerTimeouts.add(timeoutId);
    return timeoutId;
  }

  function unregisterStaggerTimeout(timeoutId) {
    if (!timeoutId) return;
    clearTimeout(timeoutId);
    activeStaggerTimeouts.delete(timeoutId);
  }

  function clearTrackedStaggerWork() {
    activeStaggerObservers.forEach(function (observer) {
      observer.disconnect();
    });
    activeStaggerObservers.clear();

    activeStaggerTimeouts.forEach(function (timeoutId) {
      clearTimeout(timeoutId);
    });
    activeStaggerTimeouts.clear();
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

  function revertStaggerElement(element) {
    if (!element || !element.__staggerSplit) return;

    if (typeof gsap !== "undefined") {
      gsap.killTweensOf(element.__staggerSplit.lines);
    }

    element.__staggerSplit.revert();
    delete element.__staggerSplit;
  }

  function revertAllStaggers(root) {
    var scope = root || document;

    Array.prototype.forEach.call(
      scope.querySelectorAll("[data-motion-stagger]"),
      function (element) {
        revertStaggerElement(element);
      },
    );

    setStaggerLoading(false);
  }

  function prepareStaggerElement(element, options) {
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

    if (options && options.hideLines === false) {
      gsap.set(split.lines, { opacity: 1, clearProps: "opacity" });
    } else {
      gsap.set(split.lines, { opacity: 0 });
    }

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
    var disconnectTimeout = 0;

    function prepareVisibleTargets() {
      getStaggerTargets(scope).forEach(function (element) {
        prepareStaggerElement(element);
      });
    }

    prepareVisibleTargets();

    observer = registerStaggerObserver(
      new MutationObserver(function () {
        if (Date.now() < suspendResponsiveMutationUntil) return;
        prepareVisibleTargets();
      }),
    );

    observer.observe(scope, {
      childList: true,
      subtree: true,
    });

    disconnectTimeout = registerStaggerTimeout(
      window.setTimeout(function () {
        unregisterStaggerObserver(observer);
        activeStaggerTimeouts.delete(disconnectTimeout);
      }, 1500),
    );

    return {
      disconnect: function () {
        unregisterStaggerObserver(observer);
        unregisterStaggerTimeout(disconnectTimeout);
      },
    };
  }

  function queueStagger(root) {
    var scope = root || document;

    function run() {
      requestAnimationFrame(function () {
        if (getStaggerTargets(scope).length) {
          initStagger(scope);
          return;
        }

        var observer = null;
        var disconnectTimeout = 0;

        observer = registerStaggerObserver(
          new MutationObserver(function () {
            if (Date.now() < suspendResponsiveMutationUntil) return;
            if (!getStaggerTargets(scope).length) return;

            unregisterStaggerObserver(observer);
            unregisterStaggerTimeout(disconnectTimeout);

            requestAnimationFrame(function () {
              initStagger(scope);
            });
          }),
        );

        observer.observe(scope, {
          childList: true,
          subtree: true,
        });

        disconnectTimeout = registerStaggerTimeout(
          window.setTimeout(function () {
            unregisterStaggerObserver(observer);
            activeStaggerTimeouts.delete(disconnectTimeout);
          }, 1500),
        );
      });
    }

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(run);
      return;
    }

    run();
  }

  function rebuildStaggerLayout(root, animate) {
    var scope = root || document;

    clearTrackedStaggerWork();
    revertAllStaggers(scope);

    if (shouldSkipStagger() || !canUseStagger()) return;

    suspendResponsiveMutation(500);

    if (animate) {
      var staggerPrep = primeStagger(scope);
      staggerPrep.disconnect();
      queueStagger(scope);
      return;
    }

    getStaggerTargets(scope).forEach(function (element) {
      prepareStaggerElement(element, { hideLines: false });
    });
  }

  function initNavigationExitRouting() {
    if (navigationHandlersBound) return;
    navigationHandlersBound = true;

    function handleAnimatedNavigation(e) {
      if (!e.detail || !e.detail.url) return;

      if (
        shouldUseAnimatedExperience() &&
        isBarbaInitialized &&
        typeof barba !== "undefined"
      ) {
        barba.go(e.detail.url);
        return;
      }

      window.location.href = e.detail.url;
    }

    document.addEventListener("reel:exit", handleAnimatedNavigation);
    document.addEventListener("strip:exit", handleAnimatedNavigation);
  }

  function teardownLenis() {
    if (lenisSvelteReadyHandler) {
      window.removeEventListener("svelte:ready", lenisSvelteReadyHandler);
      lenisSvelteReadyHandler = null;
    }

    if (lenisLoadHandler) {
      window.removeEventListener("load", lenisLoadHandler);
      lenisLoadHandler = null;
    }

    if (
      typeof gsap !== "undefined" &&
      gsap.ticker &&
      typeof gsap.ticker.remove === "function" &&
      lenisTickerCallback
    ) {
      gsap.ticker.remove(lenisTickerCallback);
      lenisTickerCallback = null;
    }

    if (lenisRafId) {
      cancelAnimationFrame(lenisRafId);
      lenisRafId = 0;
    }

    if (window.lenis && typeof window.lenis.destroy === "function") {
      window.lenis.destroy();
    }

    window.lenis = undefined;
  }

  function initLenis() {
    if (!shouldUseAnimatedExperience() || window.lenis) return;

    if (typeof Lenis === "undefined") {
      console.warn("Lenis library not loaded. Smooth scrolling disabled.");
      return;
    }

    var lenis = new Lenis({
      smoothWheel: true,
      wheelMultiplier: 1,
      lerp: 0.12,
    });

    if (typeof gsap !== "undefined" && gsap.ticker) {
      lenisTickerCallback = function (time) {
        lenis.raf(time * 1000);
      };
      gsap.ticker.add(lenisTickerCallback);
      gsap.ticker.lagSmoothing(0);
    } else {
      function raf(time) {
        lenis.raf(time);
        lenisRafId = requestAnimationFrame(raf);
      }

      lenisRafId = requestAnimationFrame(raf);
    }

    if (typeof ScrollTrigger !== "undefined") {
      lenis.on("scroll", ScrollTrigger.update);
    }

    window.lenis = lenis;
    window.dispatchEvent(new CustomEvent("lenis:ready"));

    lenisSvelteReadyHandler = function () {
      requestAnimationFrame(function () {
        lenis.resize();
        if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();
      });
    };

    lenisLoadHandler = function () {
      lenis.resize();
      if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();
    };

    window.addEventListener("svelte:ready", lenisSvelteReadyHandler, {
      once: true,
    });
    window.addEventListener("load", lenisLoadHandler);
  }

  function runInitialDesktopExperience() {
    var mainEl = document.querySelector("[data-barba='container']");
    if (!mainEl || typeof gsap === "undefined") return;

    gsap.set(mainEl, { opacity: 0 });

    if (document.querySelector("c-preloader")) {
      window.addEventListener(
        "preloader:exit",
        function () {
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
        },
        { once: true },
      );
      return;
    }

    gsap.set(mainEl, { opacity: 1 });
    rebuildStaggerLayout(mainEl, true);
  }

  function teardownBarba() {
    if (
      isBarbaInitialized &&
      typeof barba !== "undefined" &&
      typeof barba.destroy === "function"
    ) {
      barba.destroy();
    }

    isBarbaInitialized = false;
  }

  function initBarba(skipInitialReveal) {
    if (
      !shouldUseAnimatedExperience() ||
      isBarbaInitialized ||
      typeof barba === "undefined" ||
      typeof gsap === "undefined"
    ) {
      return;
    }

    if (skipInitialReveal) {
      var currentContainer = document.querySelector("[data-barba='container']");
      if (currentContainer) {
        currentContainer.style.opacity = "1";
        rebuildStaggerLayout(currentContainer, false);
      }
    } else {
      runInitialDesktopExperience();
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

    isBarbaInitialized = true;
  }

  function refreshMotionSystems(force) {
    var shouldAnimate = shouldUseAnimatedExperience();
    var didModeChange = force || currentMotionMode !== shouldAnimate;

    if (didModeChange) {
      currentMotionMode = shouldAnimate;

      if (!shouldAnimate) {
        teardownBarba();
        teardownLenis();
        clearTrackedStaggerWork();
        revertAllStaggers(document);

        var staticContainer = document.querySelector("[data-barba='container']");
        if (staticContainer) staticContainer.style.opacity = "1";

        hasBootstrappedOnce = true;
        return;
      }

      initLenis();
      initBarba(hasBootstrappedOnce);
    }

    if (shouldAnimate && !didModeChange) {
      var activeContainer = document.querySelector("[data-barba='container']");
      if (activeContainer) {
        rebuildStaggerLayout(activeContainer, false);
      }

      if (window.lenis) window.lenis.resize();
      if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();
    }

    hasBootstrappedOnce = true;
  }

  function observeResponsiveMotion() {
    if (responsiveMutationObserver || !document.body) return;

    function scheduleRefresh(force) {
      clearTimeout(responsiveResizeTimer);
      responsiveResizeTimer = window.setTimeout(function () {
        refreshMotionSystems(!!force);
      }, 180);
    }

    if (window.matchMedia) {
      responsiveMediaQuery = window.matchMedia(
        "(min-width: " + DESKTOP_MIN_WIDTH + "px)",
      );

      if (typeof responsiveMediaQuery.addEventListener === "function") {
        responsiveMediaQuery.addEventListener("change", function () {
          scheduleRefresh(true);
        });
      } else if (typeof responsiveMediaQuery.addListener === "function") {
        responsiveMediaQuery.addListener(function () {
          scheduleRefresh(true);
        });
      }
    }

    window.addEventListener("resize", function () {
      scheduleRefresh(false);
    });

    responsiveMutationObserver = new MutationObserver(function (mutations) {
      if (Date.now() < suspendResponsiveMutationUntil) return;

      var shouldRefresh = mutations.some(function (mutation) {
        if (mutation.type !== "childList") return false;

        function hasRelevantNode(nodeList) {
          return Array.prototype.some.call(nodeList, function (node) {
            if (!node || node.nodeType !== 1) return false;

            if (
              node.matches &&
              node.matches("[data-barba='container'], [data-motion-stagger]")
            ) {
              return true;
            }

            return !!(
              node.querySelector &&
              node.querySelector("[data-barba='container'], [data-motion-stagger]")
            );
          });
        }

        return (
          hasRelevantNode(mutation.addedNodes) ||
          hasRelevantNode(mutation.removedNodes)
        );
      });

      if (shouldRefresh) {
        scheduleRefresh(false);
      }
    });

    responsiveMutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  initNavigationExitRouting();
  refreshMotionSystems(true);
  observeResponsiveMotion();
});
