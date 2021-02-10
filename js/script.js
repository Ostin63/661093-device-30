/*top slider*/

const sliderButtons = document.querySelectorAll('.slider-item__pagination');
const sliderItems = document.querySelectorAll('.slider-list__item');

const slideSwitch = function (itemButton, sliderCart) {
  itemButton.addEventListener('click', function () {

    for (let i = 0; i < sliderButtons.length; i++) {
      sliderButtons[i].classList.remove('button-active');
      sliderItems[i].classList.remove('active');
    }
    itemButton.classList.add('button-active');
    sliderCart.classList.add('active');
  });
};
for (let i = 0; i < sliderButtons.length; i++) {
  slideSwitch(sliderButtons[i], sliderItems[i]);
};

/*Services*/

const servicesButtons = document.querySelectorAll('.services-buttons__item');
const servicesSliders = document.querySelectorAll('.services-slider__item');

const serviceSwitch = function (itemButton, sliderCart) {
  itemButton.addEventListener('click', function () {

    for (let i = 0; i < servicesButtons.length; i++) {
      servicesButtons[i].classList.remove('button-active');
      servicesSliders[i].classList.remove('active');
    }
    itemButton.classList.add('button-active');
    sliderCart.classList.add('active');
  });
};
for (let i = 0; i < servicesButtons.length; i++) {
  serviceSwitch(servicesButtons[i], servicesSliders[i]);
};

/* modal map*/

const buttonMap = document.querySelector('.contacts__map');
const modalMap = document.querySelector('.modal-map');
const mapClose = modalMap.querySelector('.modal-map__close');

const modalClose = function (evt) {
  evt.preventDefault();
  document.querySelector('.show-block').classList.remove('show-block');
  window.removeEventListener('keypress', onEscapePress);
}

const onEscapePress = function (evt) {
  if (evt.keyCode === 27) {
    modalClose(evt);
  }
};

buttonMap.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalMap.classList.add('show-block');
  window.addEventListener('keydown', onEscapePress);
});

mapClose.addEventListener('click', modalClose);

/*modal feedback*/

const contactsButton = document.querySelector('.contacts__button');
const modalFeedback = document.querySelector('.modal-feedback');
const feedbackClose = modalFeedback.querySelector('.modal-feedback__close');

const fullname = modalFeedback.querySelector('[name=fullname]');
const email = modalFeedback.querySelector('[name=email]');

let isStorageSupport = true;
let storage = '';

try {
  storage = localStorage.getItem('fullname');
} catch (err) {
  isStorageSupport = false;
}

contactsButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalFeedback.classList.add('show-block');
  window.addEventListener('keydown', onEscapePress);
  if (storage) {
    fullname.value = storage;
    email.focus();
  } else {
    fullname.focus();
  }
});

feedbackClose.addEventListener('click', modalClose);

const feedbackForm = modalFeedback.querySelector('.modal-feedback__form');
const fields = feedbackForm.querySelectorAll('.feedback-item__field');

feedbackForm.addEventListener('submit', function (evt) {
  if (!fullname.value || !email.value) {
    evt.preventDefault();
    for (let i = 0; i < fields.length; i++) {
      let field = fields[i];
      if (!field.value) {
        field.classList.add('field-error');
        modalFeedback.classList.remove('modal-error');
        modalFeedback.offsetWidth = modalFeedback.offsetWidth;
        modalFeedback.classList.add('modal-error');
      } else {
        field.classList.remove('field-error');
      }
    }
  } else {
    if (isStorageSupport) {
      localStorage.setItem('fullname', fullname.value);
    }
  }
});
