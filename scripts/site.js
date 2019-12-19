$(document).ready(() => {
  $('input').click(() => updateDebugState());

  updateDebugState();

  observeIntersections();
  typeCode();
});

updateDebugState = () => {
  document.body.classList.toggle('debug-on', $('input').is(':checked'));
}

// Sets up the intersection observer to handle animating when elements are in view
observeIntersections = () => {
  let targets = document.querySelectorAll('.lazy-fade-in');

  if (targets != null) {
    targets.forEach(t => {
      let observer = new IntersectionObserver(intersectCallback);

      observer.observe(t);
    });
  }
}

// Callback function called when an intersection is observed
intersectCallback = (entries, obs) => {
  const lazyFadeAnimation = [
    { opacity: 0, transform: 'translateY(50px)' },
    { opacity: 1, transform: 'translateY(0px)' }
  ];

  const lazyFadeTiming = {
    duration: 500,
    easing: 'ease-out',
    iterations: 1
  }

  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.animate(lazyFadeAnimation, lazyFadeTiming);
      obs.unobserve(entry.target);
    }
  });
}

typeCode = () => {
  new TypeIt('#welcome_header', {
    speed: 50,
    startDelay: 200,
    cursor: false,
    lifeLike: false
  }).go();

  new TypeIt('#about_header', {
    speed: 50,
    startDelay: 200,
    cursor: false,
    lifeLike: false,
    waitUntilVisible: true
  }).go();

  new TypeIt('#portfolio_header', {
    speed: 50,
    startDelay: 200,
    cursor: false,
    lifeLike: false,
    waitUntilVisible: true
  }).go();

  new TypeIt('#contact_header', {
    speed: 50,
    startDelay: 200,
    cursor: false,
    lifeLike: false,
    waitUntilVisible: true
  }).go();
};
