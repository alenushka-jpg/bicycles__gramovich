'use strict';
(function () {
  var pageHeader = document.querySelector('.page-header');
  var burger = document.querySelector('.page-header__burger');
  var navigation = document.querySelector('.main-navigation');
  var navigationClose = document.querySelector('.main-navigation__close');
  var navigationList = document.querySelector('.main-navigation__list');
  var navigationLinks = navigationList.querySelectorAll('a');
  var pageMain = document.querySelector('.page-main');
  var pageFooter = document.querySelector('.page-footer');

  pageHeader.classList.remove('no-js');

  function hidePage() {
    pageMain.style.display = 'none';
    pageFooter.style.display = 'none';
  }

  function showPage() {
    pageMain.style.display = 'block';
    pageFooter.style.display = 'block';
  }

  function showNavigation() {
    navigation.classList.add('main-navigation--open');
    hidePage();
  }

  function hideNavigation() {
    navigation.classList.remove('main-navigation--open');
    showPage();
  }

  for (var i = 0; i < navigationLinks.length; i++) {
    var element = navigationLinks[i];

    element.addEventListener('click', function () {
      hideNavigation();
      showPage();
    });
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
        showPage();
        navigation.classList.remove('main-navigation--open');
      }
    }
  });

  burger.addEventListener('click', onBurgerClick);
  navigationClose.addEventListener('click', onCloseClick);
})();
