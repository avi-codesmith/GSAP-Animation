const scroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true,
});

const vedioContainerAnimation = () => {
  const videoCon = document.querySelector(".vedio-container");
  const playBtn = document.querySelector(".vedio-container .play");
  videoCon.addEventListener("mouseenter", () => {
    gsap.to(playBtn, {
      scale: 1,
      opacity: 1,
    });
  });

  videoCon.addEventListener("mouseleave", () => {
    gsap.to(playBtn, {
      scale: 0,
      opacity: 0,
    });
  });

  videoCon.addEventListener("mousemove", (e) => {
    gsap.to(playBtn, {
      left: e.x,
      top: e.y,
    });
  });
};
vedioContainerAnimation();

const loadingAnimation = () => {
  gsap.from(".first", {
    y: 1000,
    opacity: 0,
    delay: 0.2,
    duration: 0.5,
    stagger: 0.3,
  });
  gsap.from(".second", {
    x: 5000,
    // opacity: 0,
    delay: 0.5,
    duration: 1,
    stagger: 0.3,
  });
  gsap.from(".vedio-container", {
    x: -5000,
    delay: 1.2,
    duration: 0.7,
    opacity: 0,
    // stagger: 0.2,
  });
};

loadingAnimation();
