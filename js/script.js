/*top slider*/

let sliderButtons = document.querySelectorAll('.pagination-slider__item');
let sliderItems = document.querySelectorAll('.slider-list__item');

let slideSwitch = function (itemButton, sliderCart) {
  itemButton.addEventListener('click', function () {

    for (let i = 0; i < sliderButtons.length; i++) {
      let item = sliderButtons[i];
      item.classList.remove('pagination-active');
    }
    itemButton.classList.add('pagination-active');

    for (let i = 0; i < sliderItems.length; i++) {
      let cart = sliderItems[i];
      cart.classList.remove('show-slider');
    }
    sliderCart.classList.add('show-slider');
  });
};
for (let i = 0; i < sliderButtons.length; i++) {
  slideSwitch(sliderButtons[i], sliderItems[i]);
};

/*Services*/

let servicesButtons = document.querySelectorAll('.services-buttons__item');
let servicesSliders = document.querySelectorAll('.services-slider__item');

let serviceSwitch = function (itemButton, sliderCart) {
  itemButton.addEventListener('click', function () {

    for (let i = 0; i < servicesButtons.length; i++) {
      let item = servicesButtons[i];
      item.classList.remove('service-button-active');
    }
    itemButton.classList.add('service-button-active');

    for (let i = 0; i < servicesSliders.length; i++) {
      let cart = servicesSliders[i];
      cart.classList.remove('active-service');
    }
    sliderCart.classList.add('active-service');
  });
};
for (let i = 0; i < servicesButtons.length; i++) {
  serviceSwitch(servicesButtons[i], servicesSliders[i]);
};

/* modal map*/

let buttonMap = document.querySelector('.contacts__map');
let modalMap = document.querySelector('.modal-map');
let mapClose = modalMap.querySelector('.modal-map__close');

let modalClose = function (evt) {
  evt.preventDefault();
  document.querySelector('.show-block').classList.remove('show-block');
  window.removeEventListener('keypress', onEscapePress);
}

let onEscapePress = function (evt) {
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

let contactsButton = document.querySelector('.contacts__button');
let modalFeedback = document.querySelector('.modal-feedback');
let feedbackClose = modalFeedback.querySelector('.modal-feedback__close');

let fullname = modalFeedback.querySelector('[name=fullname]');
let email = modalFeedback.querySelector('[name=email]');

  var isStorageSupport = true;
  var storage = '';

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

  let feedbackForm = modalFeedback.querySelector('.modal-feedback__form');
  let fields = feedbackForm.querySelectorAll('.feedback-item__field');

  feedbackForm.addEventListener('submit', function (evt) {
    if (!fullname.value || !email.value) {
      evt.preventDefault();
      for (var i = 0; i < fields.length; i++) {
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
