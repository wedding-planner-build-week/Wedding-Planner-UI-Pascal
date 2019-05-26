/*
*DIsplay Backdrop when mobile side bar is toggled
*
*/
const backdrop = document.querySelector('.backdrop');
const burgerButton = document.querySelector('.burger');
const mobileNav = document.querySelector('.mobile-nav');


const backDrop = () => {
  backdrop.classList.remove('shade');
};
const mobileButton = () => {
  mobileNav.classList.add('open');
  backdrop.classList.add('shade');
};
const removeBackDrop = () => {
  mobileNav.classList.remove('open');
  backDrop();
};

const animate = () => {
  burgerButton.addEventListener('click', mobileButton);
  backdrop.addEventListener('click', removeBackDrop);
};

animate();

/**
 * Animation
 */
const gallery = document.querySelectorAll('div[class*="card"]');
gallery.forEach((card) => {
  TweenMax.from(card, 2, { x: 100, ease: Bounce.easeOut });
});

const navBar = document.querySelector('.nav__bar');
const NavData = [
  {
    logo: 'Wedding Planner',
    links: [{ Home: 'index.html' }, { Signup: 'https://weddingplanner.netlify.com/register' }, { Login: 'https://weddingplanner.netlify.com/login' }, { AboutUs: 'about.html' }],
  },
];

class NavBar {
  constructor(navbar, data) {
    this.nav = navbar;
    this.data = data;
    this.attachLogo();
    this.attachNavItems();
  }

  attachLogo() {
    const logo = document.createElement('h2');
    logo.textContent = this.data.logo;
    logo.classList.add('logo');
    this.nav.append(logo);
  }

  attachNavItems() {
    const navItemContainer = document.createElement('div');
    navItemContainer.classList.add('nav__item');
    this.nav.insertAdjacentElement('beforeend', navItemContainer);
    this.data.links.forEach((link) => {
      const navItems = document.createElement('a');
      navItems.textContent = Object.keys(link);
      navItems.href = Object.values(link);
      navItemContainer.insertAdjacentElement('beforeend', navItems);
    });
  }
}

new NavBar(navBar, NavData[0]);
