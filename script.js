const hover = document.querySelectorAll(".hover");
const imgSec = document.querySelector(".product");
const needHover = document.querySelectorAll(".needHover");
const imgWrapper = document.querySelector(".img-sec");
const header = document.querySelector(".header");

const scroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true,
  lerp: 0.08,
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
  needHover.forEach((e) => {
    e.addEventListener("mouseenter", () => {
      hover.forEach((e) => {
        e.classList.add("move");
      });
    });
  });
  needHover.forEach((e) => {
    e.addEventListener("mouseleave", () => {
      hover.forEach((e) => {
        e.classList.remove("move");
      });
    });
  });
};

hoverAnimation();

const cursorAnimation = () => {
  const circle = document.querySelector(".circle");

  document.querySelectorAll(".img").forEach((elem) => {
    const img = elem.querySelector("img");

    elem.addEventListener("mouseenter", () => {
      circle.style.backgroundImage = `url("${img.src}")`;
      circle.style.backgroundSize = `${img.width * 2}px ${img.height * 2}px`;

      gsap.to(circle, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });
    elem.addEventListener("mousemove", (e) => {
      const rect = img.getBoundingClientRect();
      const currentScroll = scroll.scroll.instance.scroll.y;

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.set(circle, {
        left: e.clientX,
        top: e.clientY + currentScroll,
        backgroundPosition: `-${x * 2 - circle.offsetWidth / 2}px -${
          y * 2 - circle.offsetHeight / 2
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

const imgSecObs = new IntersectionObserver((enteries) => {
  const ent = enteries[0];
  if (ent.isIntersecting === true) {
    gsap.from(".img", {
      scale: 0.99,
      opacity: 0,
      delay: 0.4,
      duration: 0.5,
    });
  } else {
    gsap.from(".img", {
      scale: 1,
      opacity: 1,
    });
  }
});

imgSecObs.observe(imgWrapper);

// const headerSecObs = new IntersectionObserver((enteries) => {
//   const ent = enteries[0];
//   if (ent.isIntersecting === true) {
//     gsap.from(".header", {
//       scale: 0.99,
//       opacity: 0,
//       delay: 0.4,
//       duration: 0.5,
//     });
//   } else {
//     gsap.from(".header", {
//       scale: 1,
//       opacity: 1,
//     });
//   }
// });

// imgSecObs.observe(header);
