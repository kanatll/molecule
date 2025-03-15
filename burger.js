document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.cjl');

  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
});