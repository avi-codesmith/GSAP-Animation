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

  document.querySelector("main").addEventListener("scroll", () => {
    gsap.to(".cover", {
      opacity: 0,
      duration: 0.5,
    });
  });

  gsap.from(".img-container", {
    scale: 0.99,
    opacity: 0,
    delay: 2,
    duration: 0.5,
  });
};

loadingAnimation();

const imgSec = document.querySelector(".product-wrappper");

const obs = new IntersectionObserver((enteries) => {
  const ent = enteries[0];
  console.log(ent);
});

obs.observe(imgSec);
