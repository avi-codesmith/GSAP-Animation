const hover = document.querySelector(".hover");
const imgSec = document.querySelector(".product");
const needHover = document.querySelector(".needHover");

const scroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true,
  lerp: 0.1,
  getDirection: true,
  reloadOnContextChange: true,
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

const cursorAnimation = () => {
  const circle = document.querySelector(".circle");
  document.querySelectorAll(".img").forEach((elem) => {
    const img = elem.querySelector("img");

    elem.addEventListener("mouseenter", () => {
      circle.style.backgroundImage = `url("${img.src}")`;
      circle.style.backgroundSize = `${img.width * 2}px ${img.height * 2}px`; // 📸 Set correct zoom level based on image size

      gsap.to(circle, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    elem.addEventListener("mousemove", (e) => {
      const rect = img.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.set(circle, {
        left: e.clientX,
        top: e.clientY,
        backgroundPosition: `-${x * 2 - circle.offsetWidth / 2}px -${
          y * 2 - circle.offsetHeight / 1
        }px`,
      });
    });

    elem.addEventListener("mouseleave", () => {
      gsap.to(circle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });
};

cursorAnimation();
