const hover = document.querySelector(".hover");
const imgSec = document.querySelector(".product");
const needHover = document.querySelector(".needHover");
const circle = document.querySelector(".circle");
const products = document.querySelector(".img-sec");

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

const obs = new IntersectionObserver((enteries) => {
  const ent = enteries[0];
  if (ent.isIntersecting === true) {
    gsap.from(".product", {
      scale: 0.99,
      opacity: 0,
      delay: 0.4,
      duration: 0.5,
    });
  } else {
    gsap.from(".product", {
      scale: 1,
      opacity: 1,
    });
  }
});

obs.observe(imgSec);

const hoverAnimation = () => {
  needHover.addEventListener("mouseenter", () => {
    hover.classList.add("move");
  });
  needHover.addEventListener("mouseleave", () => {
    hover.classList.remove("move");
  });
};

hoverAnimation();

const cursorMove = () => {
  products.addEventListener("mouseenter", (e) => {
    gsap.to(".circle", {
      opacity: 1,
      scale: 1,
      x: e.clientX,
      y: e.clientY,
    });
  });

  products.addEventListener("mouseleave", () => {
    gsap.to(".circle", {
      opacity: 0,
      scale: 0,
    });
  });
};

cursorMove();
