const floatingButton = document.getElementById('floating-button');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    floatingButton.style.opacity = '1';
  } else {
    floatingButton.style.opacity = '0';
  }
});