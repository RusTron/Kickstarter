'use strict';

const form = document.querySelector('.questions__form.form');

const inputs = document.querySelectorAll('.form__input.field');

const play = document.querySelector('.video__player-round');

const video = document.querySelector('.video__player-movie');

let active = false;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
});

play.addEventListener('click', () => {
  if (!active) {
    active = !active;
    play.style = 'opacity: 0';
    video.style = 'visibility: visible';
    video.play();

    return;
  }

  active = !active;
  video.pause();
  play.style = 'opacity: 1';
});
