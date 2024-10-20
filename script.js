// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#menu-toggle').onclick = (e) => {
  navbarNav.classList.toggle('active');
  e.preventDefault();
};

// Klik di luar elemen
const hamburger = document.querySelector('#menu-toggle');

document.addEventListener('click', function(e) {
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
