/*
*DIsplay Backdrop when mobile side bar is toggled
*
*/
const backdrop = document.querySelector('.backdrop');
const burgerButton = document.querySelector('.burger');
// const mobileNav = document.querySelector('.mobile-nav');


const backDrop = () => {
  backdrop.classList.remove('open');
};
// eslint-disable-next-line no-undef
const pascal = TweenMax.fromTo('.mobile-nav', 0.8, { x: -0, display: 'block', reversed: true }, { x: -500, display: 'none' });
const mobileButton = () => {
  // eslint-disable-next-line no-unused-expressions
  pascal.reversed() && backdrop.classList.add('open') ? pascal.play() : pascal.reverse();
};
const removeBackDrop = () => {
  pascal.play();
  backDrop();
};

const animate = () => {
  burgerButton.addEventListener('click', () => mobileButton());
  backdrop.addEventListener('click', () => removeBackDrop());
};

burgerButton.addEventListener('click', () => {
  animate();
  backdrop.removeEventListener('click', removeBackDrop);
  burgerButton.removeEventListener('click', mobileButton);
});
