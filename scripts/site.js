$(document).ready(() => {  
  // So we can know when elements are added (or removed) from the page
  const target = document.querySelector('#page_content');
  
  let observer = new MutationObserver(() => observeIntersections());
  
  const config = {
    childList: true,
    subtree: true
  };
  
  observer.observe(target, config);

  // Load the home page info by default
  loadContent('home.html');

  // When a nav item is clicked, load the corresponding content
  $('.nav-item').click(function() {
    loadContent($(this).attr('data-name'));
  });
});

const lazyFadeAnimation = [
  { opacity: 0 },
  { opacity: 1 }
];

const lazyFadeTiming = {
  duration: 500,
  iterations: 1
}

// Retrieves and loads the content for the page
loadContent = (page) => {
  $('#page_content').hide().load(page).fadeIn('1000');

  // Set the title of the page based on the content shown
  document.title = page == 'about.html' ? 'About Edwin Richards' :
    page == 'projects.html' ? 'Personal Projects' :
    page == 'resume.html' ? 'Resumé' :
    page == 'contact.html' ? 'Contact Edwin Richards' : 'Edwin Richards | Full-Stack Software Developer';
}

// Sets up the intersection observer to handle animating when elements are in view
observeIntersections = () => {
  let target = document.querySelector('.lazy-fade-in');

  if (target != null) {
    let observer = new IntersectionObserver(intersectCallback);

    observer.observe(target);
  }
}

// Callback function called when an intersection is observed
intersectCallback = (entries, obs) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.animate(lazyFadeAnimation, lazyFadeTiming);
      obs.unobserve(entry.target);
    }
  });
}
