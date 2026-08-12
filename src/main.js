import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// =========================================================
// ALWAYS START PORTFOLIO FROM HOME / TOP
// =========================================================

window.history.scrollRestoration = "manual";

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

// =========================================================
// LOADER
// =========================================================

const obj = {
  value: 0,
};

const counter = document.querySelector(".loader-count h2");

const tl = gsap.timeline({ paused: true });

if (counter) {
  gsap.to(obj, {
    value: 100,
    duration: 1.7,
    ease: "none",

    onUpdate: () => {
      counter.textContent = `${Math.round(obj.value)}%`;
    },

    onComplete: () => {
      gsap.to(counter, {
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",

        onComplete: () => {
          tl.play();
        },
      });
    },
  });
} else {
  tl.play();
}

// =========================================================
// INITIAL HERO POSITIONS
// =========================================================

gsap.set([".heading h1", ".sub-heading h2", ".para p", "button"], {
  yPercent: 110,
});

gsap.set("nav", {
  yPercent: -100,
});

// =========================================================
// HERO TIMELINE
// =========================================================

tl.to(".loader", {
  yPercent: 100,
  duration: 1.2,
  ease: "expo.out",
})

  .from(
    ".hero-bg img",
    {
      scale: 1.5,
      duration: 1.23,
      ease: "expo.out",
    },
    "-=1.1",
  )

  .to(
    ".heading h1",
    {
      yPercent: 0,
      duration: 1.1,
      ease: "power3.out",
    },
    "-=0.9",
  )

  .to(
    ".sub-heading h2",
    {
      yPercent: 0,
      duration: 1.1,
      ease: "power3.out",
    },
    "-=0.8",
  )

  .to(
    ".para p",
    {
      yPercent: 0,
      duration: 1.1,
      ease: "power3.out",
    },
    "-=0.7",
  )

  .to(
    "button",
    {
      yPercent: 0,
      duration: 1.1,
      ease: "power3.out",
    },
    "-=0.6",
  )

  .to(
    "nav",
    {
      yPercent: 0,
      duration: 1.1,
      ease: "power3.out",
    },
    "-=0.3",
  );

// =========================================================
// ABOUT SECTION
// =========================================================

// Responsive initial position
gsap.set(".about-content", {
  opacity: 0,
  x: -80,
  scale: 0.95,
});

// About animation
const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".about-content",
    start: "top 75%",
    end: "top 35%",
    scrub: 1.5,
    markers: false,
  },
});

tl1.fromTo(
  ".about-content",
  {
    opacity: 0,
    x: -80,
    scale: 0.95,
    filter: "brightness(1.5)",
  },
  {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "brightness(1)",
    ease: "none",
  },
);

// =========================================================
// EDUCATION SECTION
// =========================================================

// Responsive initial position
gsap.set(".education-content", {
  opacity: 0,
  x: -80,
  scale: 0.95,
});

// Education animation
const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".education-content",
    start: "top 75%",
    end: "top 35%",
    scrub: 1.5,
    markers: false,
  },
});

tl2.fromTo(
  ".education-content",
  {
    opacity: 0,
    x: -80,
    scale: 0.95,
    filter: "brightness(1.5)",
  },
  {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "brightness(1)",
    ease: "none",
  },
);

// =========================================================
// CONTACT SECTION
// =========================================================

// Contact title initial position
gsap.set(".contact-container .section-title", {
  opacity: 0,
  x: -80,
  scale: 0.95,
});

// Contact timeline
const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact-container",
    start: "top 80%",
    end: "top 25%",
    scrub: 2,
    markers: false,
  },
});

tl3

  // Contact heading
  .fromTo(
    ".contact-container .section-title",
    {
      opacity: 0,
      x: -80,
      scale: 0.95,
      filter: "brightness(1.5)",
    },
    {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "brightness(1)",
      ease: "none",
    },
  )

  // Contact form
  .fromTo(
    ".contact-container form",
    {
      opacity: 0,
      x: 80,
      scale: 0.95,
      filter: "brightness(1.5)",
    },
    {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "brightness(1)",
      ease: "none",
    },
    "-=0.3",
  );

// Footer - delayed
gsap.set(".footer-left, .footer-center, .footer-right", {
  opacity: 0,
  y: 40,
  scale: 0.95,
});

gsap.to(".footer-left, .footer-center, .footer-right", {
  opacity: 1,
  y: 0,
  scale: 1,
  duration: 0.8,
  stagger: 0.15,
  ease: "power3.out",

  scrollTrigger: {
    trigger: "footer",
    start: "top 90%",
    toggleActions: "play none none reverse",
    markers: false,
  },
});

// =========================================================
// ACHIEVEMENT SECTION
// =========================================================

gsap.set(".achievement-content .section-title", {
  yPercent: -50,
});

const tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".achievement-item",
    start: "top 70%",
    end: "top 30%",
    scrub: 1.5,
    markers: false,
  },
});

tl5

  .fromTo(
    ".achievement-item",
    {
      opacity: 0.25,
      x: 0,
      rotation: 20,
      scale: 0.95,
      filter: "brightness(1.5)",
    },
    {
      opacity: 1,
      x: 0,
      rotation: 0,
      scale: 1,
      filter: "brightness(1)",
      ease: "none",
    },
  )

  .to(
    ".achievement-content .section-title",
    {
      yPercent: 0,
      duration: 1.1,
      ease: "power3.out",
    },
    "-=0.3",
  );

// =========================================================
// PROJECT SECTION
// =========================================================

const projectCards = gsap.utils.toArray(".project-card");

projectCards.forEach((card, index) => {
  if (index === 0) return;

  gsap.fromTo(
    card,
    {
      yPercent: 100,
    },
    {
      yPercent: 0,
      ease: "none",

      scrollTrigger: {
        trigger: card,
        start: "top bottom",
        end: "top 100px",
        scrub: 1.2,
        markers: false,
      },
    },
  );
});

// =========================================================
// SKILLS SECTION
// =========================================================

// Start all progress bars from 0%
gsap.set(
  [
    ".html-progress",
    ".css-progress",
    ".javascript-progress",
    ".react-progress",
    ".redux-progress",
    ".tailwind-progress",
    ".gsap-progress",
    ".git-progress",
    ".api-progress",
  ],
  {
    width: "0%",
  },
);

// Skills heading initial state
gsap.set(".skills-section .section-title", {
  opacity: 0,
  y: 50,
});

// Skills animation
const skillsTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".skills-section",
    start: "top 70%",
    end: "top 20%",
    scrub: 1.5,
    markers: false,
  },
});

// Heading
skillsTl.to(".skills-section .section-title", {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power3.out",
});

// HTML
skillsTl.to(
  ".html-progress",
  {
    width: "90%",
    duration: 1,
    ease: "power2.out",
  },
  "-=0.5",
);

// CSS
skillsTl.to(
  ".css-progress",
  {
    width: "85%",
    duration: 1,
    ease: "power2.out",
  },
  "-=0.8",
);

// JavaScript
skillsTl.to(
  ".javascript-progress",
  {
    width: "85%",
    duration: 1,
    ease: "power2.out",
  },
  "-=0.8",
);

// React
skillsTl.to(
  ".react-progress",
  {
    width: "85%",
    duration: 1,
    ease: "power2.out",
  },
  "-=0.8",
);

// Redux
skillsTl.to(
  ".redux-progress",
  {
    width: "80%",
    duration: 1,
    ease: "power2.out",
  },
  "-=0.8",
);

// Tailwind
skillsTl.to(
  ".tailwind-progress",
  {
    width: "85%",
    duration: 1,
    ease: "power2.out",
  },
  "-=0.8",
);

// GSAP
skillsTl.to(
  ".gsap-progress",
  {
    width: "75%",
    duration: 1,
    ease: "power2.out",
  },
  "-=0.8",
);

// Git & GitHub
skillsTl.to(
  ".git-progress",
  {
    width: "80%",
    duration: 1,
    ease: "power2.out",
  },
  "-=0.8",
);

// REST APIs / Axios
skillsTl.to(
  ".api-progress",
  {
    width: "80%",
    duration: 1,
    ease: "power2.out",
  },
  "-=0.8",
);

// =========================================================
// REFRESH SCROLLTRIGGER
// =========================================================

window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});

window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});
