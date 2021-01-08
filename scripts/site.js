const contactPlaceholders = [
  {'name': 'Jon Snow', 'email': 'jon.snow@nightswatch.com', 'message': 'My watch has ended!'},
  {'name': 'Samwell Tarley', 'email': 'sam.tarly@nightswatch.com', 'message': 'You\'re better than me in everything. Except reading.'},
  {'name': 'Daenerys Targaryen', 'email': 'motherofdragons@danyforqueen.org', 'message': 'Bend the knee... or DIE!'},
  {'name': 'Tyrion Lannister', 'email': 'tinylannister@danyforqueen.org', 'message': 'That\'s what I do. I drink and I know things.'},
  {'name': 'Petyr Baelish', 'email': 'little.finger@kingscouncil.com', 'message': 'Money buys a man\'s silence for a time. A bolt in the heart buys it forever.'},
  {'name': 'Arya Stark', 'email': 'arya@thefaceless.org', 'message': 'A girl has no name.'},
  {'name': 'Brienne of Tarth', 'email': 'brienne@newknights.com', 'message': 'I, Brienne of Tarth, sentence you to die. Do you have any last words?'},
  {'name': 'Bran Stark', 'email': 'bran.stark@teamwarg.com', 'message': 'How do you know there is an afterwards?'},
  {'name': 'Sansa Stark', 'email': 'sansa.stark@downwithdany.org', 'message': 'Definitely NOT getting married again.'},
  {'name': 'Cersei Lannister', 'email': 'cersei@ruthlessrulers.com', 'message': 'When you play the Game of Thrones, you win or you die. There is no middle ground.'},
  {'name': 'Jaime Lannister', 'email': 'jamie.lannister@kingsguard.com', 'message': 'Would you lend me a hand? I seem to have lost mine.'},
  {'name': 'Tormund Giantsbane', 'email': 'tormund@giantsmilk.sales', 'message': 'Is the big woman still here?'},
  {'name': 'Ygritte', 'email': 'ygritte@toparchers.org', 'message': 'You know nothing, Jon Snow.'},
  {'name': 'Melisandre', 'email': 'melisandre@lordoflight.org', 'message': 'The night is dark and full of terrors.'},
  {'name': 'Hodor', 'email': 'hodor@hodor.com', 'message': 'Hodor hodor hodor, hodor hodor Hodor hodor.'},
]

$(document).ready(() => {
  observeIntersections();
  typeCode();

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

  formPlaceholder = contactPlaceholders[randomInteger(0, contactPlaceholders.length)];

  $('#contact_name').attr('placeholder', formPlaceholder['name']);
  $('#contact_email').attr('placeholder', formPlaceholder['email']);
  $('#contact_message').attr('placeholder', formPlaceholder['message']);
});  

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

randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min) ) + min;
}
