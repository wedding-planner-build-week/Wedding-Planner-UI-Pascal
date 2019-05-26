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

const navMobile = document.querySelector('.mobile-nav');

class NavBar {
  constructor(navbar, data) {
    this.nav = navbar;
    this.data = data;
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

  createMobileNav() {
    const ulContainer = document.createElement('ul');
    ulContainer.classList.add('mobile-nav__items');
    const lists = document.createElement('li');
    lists.className += 'mobile-nav__item aside__item';
    this.nav.append(ulContainer);
    ulContainer.appendChild(lists);
    this.data.links.forEach((link) => {
      const navItems = document.createElement('a');
      navItems.textContent = Object.keys(link);
      navItems.href = Object.values(link);
      lists.insertAdjacentElement('beforeend', navItems);
    });
  }
}

const desktop = new NavBar(navBar, NavData[0]);
const mobile = new NavBar(navMobile, NavData[0]);

desktop.attachLogo();
desktop.attachNavItems();
mobile.createMobileNav();
