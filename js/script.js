/*Function sliders*/

const switchSlides = function (switchers, slides) {
  for (let i = 0; i < switchers.length; i++) {
    switchers[i].addEventListener('click', function () {

      for (let i = 0; i < switchers.length; i++) {
        switchers[i].classList.remove('button-active');
        slides[i].classList.remove('active');
      }

      switchers[i].classList.add('button-active');
      slides[i].classList.add('active');
    });
  }
}

/*Top slider*/

const sliderButtons = document.querySelectorAll('.slider-item__pagination');
const sliderItems = document.querySelectorAll('.slider-list__item');

switchSlides(sliderButtons, sliderItems);

/*Services*/

const servicesButtons = document.querySelectorAll('.services-buttons__item');
const servicesSliders = document.querySelectorAll('.services-slider__item');

switchSlides(servicesButtons, servicesSliders);

/* modal map*/

const buttonMap = document.querySelector('.contacts__map');
const modalMap = document.querySelector('.modal-map');
const mapClose = modalMap.querySelector('.modal-map__close');

let lastFocus;
const rememberFocus = function (evt) {
  if (evt.keyCode === 13 || evt.keyCode === 32) {
    lastFocus = evt.target;
  }
}

const modalClose = function (evt) {
  evt.preventDefault();
  document.querySelector('.show-block').classList.remove('show-block');
  window.removeEventListener('keypress', onEscapePress);
  if (lastFocus) {
    lastFocus.focus();
    lastFocus = null;
  }
}

const onEscapePress = function (evt) {
  if (evt.keyCode === 27) {
    modalClose(evt);
  }
};

buttonMap.addEventListener('keydown', rememberFocus);
buttonMap.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalMap.classList.add('show-block');
  if (lastFocus) {
    mapClose.focus();
  }
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

contactsButton.addEventListener('keydown', rememberFocus);
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
