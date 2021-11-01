
TweenMax.to('.first', 1.5, {
    delay: .2,
    left: '-100%',
    ease: Expo.easeInOut
  })

TweenMax.to('.second', 1.5, {
    delay: .4,
    left: '-100%',
    ease: Expo.easeInOut
  })

TweenMax.to('.third', 1.5, {
    delay: .6,
    left: '-100%',
    ease: Expo.easeInOut
  })

  TweenMax.to('.text', 1, {
    delay: 2.2,
    opacity: 100,
    left: 0,
    ease: Expo.easeInOut
  })

gsap.registerPlugin(ScrollTrigger)

gsap.to(".projects", {
  scrollTrigger:{
    trigger: '.projects',
    //markers: true, 
    start: 'top top',
    //start: '=-300 0',
    duration: 3,
    scrub: 5,
    //pin: '.projects',
  },
  opacity: 100,
});
  

