const lenis = new Lenis({
  lerp: 0.08
})
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

let fullvh = window.innerHeight;

gsap.registerPlugin(ScrollTrigger, TextPlugin);


gsap.to('.hero-subtext', {
  duration: 2,
  delay: 7,
  text: "I work with Websites.",
  ease: "none"
})

let sections = gsap.utils.toArray(".panel");

function scrollto(selector, duration, noeasing = false) {

  if (noeasing) {
    lenis.scrollTo(selector, {duration: duration, easing: (t) => t})
  } else {
    lenis.scrollTo(selector, {duration: duration})
  }
} 

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".second-section",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".second-section").offsetWidth
  }
});

gsap.to('.because-text', {
  scale: 1.1,
  x: 40,
  scrollTrigger: {
    trigger: '.because-text',
    start: (document.querySelector('.because-text').offsetLeft) + "px",
    end: "+=" + window.innerWidth * 0.6,
    scrub: true,
  }
})

gsap.to('.hero-container', {
  duration: 3,
  delay: 0.5,
  "--clip": '100%'
})

gsap.to('.psst', {
  duration: 1,
  opacity: 1,
  delay: 3,
  scrollTrigger: {
    trigger: '.love-container',
    start: (document.querySelector('.love-container').offsetLeft + window.innerWidth) + "px",
  }
})

gsap.to('.cta-container', {
  duration: 1,
  delay: 4,
  opacity: 1
})


if (window.innerWidth > 768) {
  
  gsap.to('.hero-container', {
    y: -fullvh / 2,
    scrollTrigger: {
      trigger: '.first-container',
      scrub: true,
      start: 'top top',
    }
  })

  gsap.to('.cta-container', {
    y: -fullvh / 2.5,
    scrollTrigger: {
      trigger: '.first-container',
      scrub: true,
      start: 'top top',
    }
  })

  gsap.to('.hero-waves', {
    scaleY: 2,
    scrollTrigger: {
      trigger: '.first-container',
      scrub: true,
      start: 'top top',
    }
  })

}

gsap.to('.react-logo', {
  rotate: 360,
  duration: 30,
  ease: "none",
  repeat: -1,
})

gsap.to('.last-container', {
  duration: 2,
  delay: 0.5,
  "--clip": '100%',
  scrollTrigger: {
    trigger: '.second-section',
    start: 'bottom top',
  }
})
gsap.to('.cat-hanging', {
  duration: 1,
  opacity:1,
  delay: 30,
  scrollTrigger: {
    trigger: '.second-section',
    start: 'bottom top',
  }
})

