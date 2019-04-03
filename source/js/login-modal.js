// Login modal popup
//----------------------------------------------------------------------

'use strict';

const mainNavUserLoginLink = document.querySelector('.user-list__login');
const modalOverlay = document.querySelector('.modal-overlay');
const loginModal = document.querySelector('.login-modal');
const loginModalCloseBtn = document.querySelector('.login-modal__close-button');

mainNavUserLoginLink.addEventListener('click', function (event) {
  event.preventDefault();
  loginModal.classList.add('login-modal--opened');
  modalOverlay.classList.add('modal-overlay--opened');
});

loginModalCloseBtn.addEventListener('click', function (event) {
  event.preventDefault();
  loginModal.classList.remove('login-modal--opened');
  modalOverlay.classList.remove('modal-overlay--opened');
});

modalOverlay.addEventListener('click', function () {
  loginModal.classList.remove('login-modal--opened');
  modalOverlay.classList.remove('modal-overlay--opened');
});
