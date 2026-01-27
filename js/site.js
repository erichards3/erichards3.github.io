$(document).ready(() => {
  initParticlesJS();
  observeIntersections();
  initTypeEffects();

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

// Function to add the 'show' class to an element when it intersects the viewport
const intersectionCallback = (entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
    else {
      entry.target.classList.remove('show');
    }
  }
};

// Sets up the intersection observer to handle animating when elements are in view
observeIntersections = () => {
  // Create an observer instance
  const observer = new IntersectionObserver(intersectionCallback, {
    root: null // observe against the viewport
  });

  // Get all the lazy fade in elements
  const items = document.querySelectorAll('.lazy-fade-in');

  // Start observing each item
  items.forEach(item => {
    observer.observe(item);
  });
}

initTypeEffects = () => {
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
