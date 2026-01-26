$(document).ready(() => {
  observeIntersections();
  typeCode();
  initParticlesJS();

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = $('.needs-validation');
  // Loop over them and prevent submission
  Array.prototype.filter.call(forms, (form) => {
    form.addEventListener('submit', (event) => {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);  
  });

  // Make sure the nave bar collapses when option clicked
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const navbar = document.querySelector('.navbar-collapse');
      if (navbar.classList.contains('show')) {
        bootstrap.Collapse.getOrCreateInstance(navbar).hide();
      }
    });
  });
});  

initParticlesJS = () => {
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles-js', 'js/particles.json');
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
  new TypeIt('#about_header', {
    speed: 50,
    startDelay: 200,
    cursor: false,
    lifeLike: false,
    waitUntilVisible: true
  }).go();

  new TypeIt('#faq_header', {
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

randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min) ) + min;
}
