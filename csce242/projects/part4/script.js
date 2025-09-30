// Hamburger Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');

  burger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
});
