class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.images = this.carousel.querySelectorAll('img');
    this.rightButton = this.carousel.querySelector('.right-button');
    this.leftButton = this.carousel.querySelector('.left-button');

    this.leftButton.addEventListener('click', () => {
      this.move(false);
      TweenMax.to('.img', 2, { ease: Elastic.easeOut });
    });
    this.rightButton.addEventListener('click', () => {
      this.move(true);
      TweenMax.to('.img', 2, { ease: Elastic.easeOut });
    });
  }

  move(right) {
    const current = this.carousel.querySelector('.active');
    this.data = current.dataset.img;
    const num = right ? 1 : -1;
    const nextImg = this.carousel.querySelector(`.img[data-img="${Number(this.data) + num}"]`);
    if (nextImg) {
      if (right) {
        current.classList.replace('active', 'left');
      } else {
        current.classList.replace('active', 'right');
      }
      nextImg.classList.remove('left', 'right');
      nextImg.classList.add('active');
    }
  }
}

const carousel = document.querySelector('.carousel');
const slide = new Carousel(carousel);
