// каталог
let list = document.querySelector('.catalog__list');
let tabs = document.querySelectorAll('.catalog__tab');
let moreBtn = document.querySelector('.catalog__more');
let modal = document.querySelector('.modal');
let modalBg = document.querySelector('.modal__overlay');
let modalClose = document.querySelector('.modal__close');
let modalBody = document.querySelector('.modal__body');

let activeCat = 'wedding';
let showAll = false;
let format = 'digital';
let duration = '1h';
let currentItem = null;

function getItems() {
  let result = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].category === activeCat) {
      result.push(products[i]);
    }
  }
  return result;
}

function priceText(num) {
  return num.toLocaleString('ru-RU') + ' ₽';
}

function drawCards() {
  if (!list) return;

  let items = getItems();
  let limit = showAll ? items.length : 4;
  let html = '';

  for (let i = 0; i < items.length && i < limit; i++) {
    let item = items[i];
    html +=
      '<article class="card" data-id="' +
      item.id +
      '">' +
      '<div class="card__image">' +
      '<img src="' +
      item.image +
      '" alt="' +
      item.name +
      '" width="700" height="500">' +
      '</div>' +
      '<div class="card__content">' +
      '<h3 class="card__title">' +
      item.name +
      '</h3>' +
      '<p class="card__text">' +
      item.description +
      '</p>' +
      '<p class="card__price">от ' +
      priceText(item.price) +
      '</p>' +
      '</div>' +
      '</article>';
  }

  list.innerHTML = html;

  if (moreBtn) {
    if (!showAll && items.length > 4) {
      moreBtn.hidden = false;
    } else {
      moreBtn.hidden = true;
    }
  }

  let cards = list.querySelectorAll('.card');
  for (let c = 0; c < cards.length; c++) {
    cards[c].onclick = function () {
      openModal(Number(this.getAttribute('data-id')));
    };
  }
}

function setCat(cat) {
  activeCat = cat;
  showAll = false;

  for (let i = 0; i < tabs.length; i++) {
    if (tabs[i].getAttribute('data-category') === cat) {
      tabs[i].classList.add('is-active');
    } else {
      tabs[i].classList.remove('is-active');
    }
  }

  drawCards();
}

for (let t = 0; t < tabs.length; t++) {
  tabs[t].onclick = function () {
    setCat(this.getAttribute('data-category'));
  };
}

if (moreBtn) {
  moreBtn.onclick = function () {
    showAll = true;
    drawCards();
  };
}

function getPrice(item) {
  return item.price + item.formats[format].addPrice + item.durations[duration].addPrice;
}

function makeOptions(obj, selected, type) {
  let html = '<div class="modal__options">';
  for (let key in obj) {
    let cls = 'modal__option';
    if (key === selected) {
      cls += ' is-active';
    }
    html +=
      '<button type="button" class="' +
      cls +
      '" data-type="' +
      type +
      '" data-value="' +
      key +
      '">' +
      obj[key].label +
      '</button>';
  }
  html += '</div>';
  return html;
}

function drawModal() {
  if (!currentItem || !modalBody) return;

  modalBody.innerHTML =
    '<div class="modal__media"><img src="' +
    currentItem.image +
    '" alt="' +
    currentItem.name +
    '"></div>' +
    '<div class="modal__info">' +
    '<h2 class="modal__title">' +
    currentItem.name +
    '</h2>' +
    '<p class="modal__text">' +
    currentItem.description +
    '</p>' +
    '<p class="modal__label">Формат</p>' +
    makeOptions(currentItem.formats, format, 'format') +
    '<p class="modal__label">Длительность</p>' +
    makeOptions(currentItem.durations, duration, 'duration') +
    '<p class="modal__total">Итого: <span>' +
    priceText(getPrice(currentItem)) +
    '</span></p>' +
    '</div>';

  let opts = modalBody.querySelectorAll('.modal__option');
  for (let o = 0; o < opts.length; o++) {
    opts[o].onclick = function () {
      if (this.getAttribute('data-type') === 'format') {
        format = this.getAttribute('data-value');
      } else {
        duration = this.getAttribute('data-value');
      }
      drawModal();
    };
  }
}

function openModal(id) {
  currentItem = null;
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      currentItem = products[i];
      break;
    }
  }

  if (!currentItem || !modal) return;

  format = 'digital';
  duration = '1h';
  drawModal();
  modal.classList.add('is-open');
  document.body.classList.add('modal-open');
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove('is-open');
  document.body.classList.remove('modal-open');
  currentItem = null;
}

if (modalClose) {
  modalClose.onclick = closeModal;
}

if (modalBg) {
  modalBg.onclick = closeModal;
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});

setCat('wedding');
