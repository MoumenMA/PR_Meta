document.addEventListener("DOMContentLoaded", function () {
  // Initial animations
  gsap.from(".aaa", {
    opacity: 2,
    duration: 1,
    y: 50,
    ease: "power2.out",
  });
});
