/**
 * class TaCard
 * @param ardElement
 */

class TabCard {
  constructor(cardElement) {
    this.cardElement = cardElement;
  }

  selectCard() {
    this.cardElement.style.display = 'flex';
  }
}

/**
 * class TabLink
 * @param tabElement
 */
class TabLink {
  constructor(tabElement) {
    this.tabElement = tabElement;

    this.tabData = tabElement.dataset.tab;


    if (this.tabData === 'all') {
      this.cards = document.querySelectorAll('div[class*="card"]');
    } else {
      this.cards = document.querySelectorAll(`div[class*="card"][data-tab="${this.tabData}"]`);
    }

    this.cards = Array.from(this.cards).map(card => new TabCard(card));
    this.tabElement.addEventListener('click', () => {
      this.selectTab();
    });
  }

  selectTab() {
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach((tab) => {
      tab.classList.remove('active-tab');
    });

    const cards = document.querySelectorAll('div[class*="card"]');

    cards.forEach((card) => {
      // eslint-disable-next-line no-param-reassign
      card.style.display = 'none';
    });

    this.tabElement.classList.add('active-tab');

    this.cards.forEach((card) => {
      card.selectCard();
    });
  }
}


const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => new TabLink(tab));
