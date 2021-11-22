'use strict';

// Открытие выпадающего меню
var pageHeader = document.querySelector('.page-header');
var burger = document.querySelector('.page-header__burger');
var navigation = document.querySelector('.main-navigation');
var navigationClose = document.querySelector('.main-navigation__close');
var navigationLinks = document.querySelectorAll('.main-navigation__link');
var pageMain = document.querySelector('.page-main');

pageHeader.classList.remove('no-js');

function hideMain() {
  pageMain.style.display = 'none';
}

function showMain() {
  pageMain.style.display = 'block';
}

function showNavigation() {
  navigation.classList.add('main-navigation--open');
  hideMain();

  navigationLinks.forEach(function (link) {
    link.addEventListener('click', hideNavigation);
  });
}

function hideNavigation() {
  navigation.classList.remove('main-navigation--open');
  showMain();
}

function onBurgerClick() {
  showNavigation();
}

function onCloseClick() {
  hideNavigation();
}

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (navigation.classList.contains('main-navigation--open')) {
      evt.preventDefault();
      showMain();
      navigation.classList.remove('main-navigation--open');
    }
  }
});

burger.addEventListener('click', onBurgerClick);
navigationClose.addEventListener('click', onCloseClick);
