"use strict";
// burger menu
let menuBurger = document.querySelector('.burger');
let menuBody = document.querySelector('.menu');
let menuBodyLock = document.querySelector('body');
let menuItem = document.querySelectorAll('.menu__link');

menuBurger.addEventListener('click', function (e) {
  menuBurger.classList.toggle('active');
  menuBody.classList.toggle('active');
  menuBodyLock.classList.toggle('lock');
});

menuItem.forEach(function (btn) {
  btn.addEventListener('click', function () {
    menuBurger.classList.remove("active");
    menuBody.classList.remove("active");
    menuBodyLock.classList.remove('lock');
  });
});