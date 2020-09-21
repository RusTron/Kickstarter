'use strict';

const form = document.querySelector('.questions__form.form');

const inputs = document.querySelectorAll('.form__input.field');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  inputs
    .forEach(input => {
      input.value = '';
    });
});
