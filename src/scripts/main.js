'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.burger__menu');
  const menu = document.querySelector('.menu');
  const pageBody = document.querySelector('.page__body');
  const menuItems = document.querySelectorAll('.menu__item');

  menuButton.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuButton.classList.toggle('active');
    pageBody.classList.toggle('page__body--with-menu');
  });

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const target = document
        .querySelector(item.querySelector('a').getAttribute('href'));

      target.scrollIntoView({ behavior: 'smooth' });

      menu.classList.remove('active');
      pageBody.classList.remove('page__body--with-menu');
    });
  });
});
