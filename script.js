const scroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true,
});

const loadingAnimation = () => {
  gsap.from("h1", {
    y: 1000,
    opacity: 0,
    delay: 0.8,
    duration: 0.8,
    stagger: 0.3,
  });

  gsap.from(".img-container", {
    scale: 0.9,
    opacity: 0,
    delay: 2,
    duration: 0.5,
  });
};

loadingAnimation();
