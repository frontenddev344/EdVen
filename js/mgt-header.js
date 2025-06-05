// Responsive MGT Header Hamburger Menu

document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.mgt-header');
  const hamburger = document.querySelector('.mgt-header-hamburger');
  const closeButton = document.querySelector('.header-close');

  if (hamburger && header) {
    hamburger.addEventListener('click', function () {
      header.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', header.classList.contains('active'));
    });

    closeButton.addEventListener('click', function() {
      header.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  }
}); 
 