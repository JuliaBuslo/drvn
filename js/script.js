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


// slider how it works
var swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  slidesPerView: 2.2,
  spaceBetween: 60,
  centeredSlides: true,
  slidesPerGroup: 1,
  touchReleaseOnEdges: true,
  initialSlide: 1,
  mousewheel: {
    releaseOnEdges: true,
    eventsTarget: '.work',
  },
  speed: 800,
  // loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


// current menu
$(window).scroll(function () {
  let $sections = $('section');
  $sections.each(function (i, el) {
    let top = $(el).offset().top - 100;
    let bottom = top + $(el).height();
    let scroll = $(window).scrollTop();
    let id = $(el).attr('id');
    if (scroll > top && scroll < bottom) {
      $('.menu__link.current').removeClass('current');
      $('.menu__link[href="#' + id + '"]').addClass('current');
    }
  })
});


// form empty check
let input = document.querySelector('.form__email_demo');
let button = document.querySelector('.form__reset_demo');
let inputv = input.value;

if (inputv.length == 0) {
  button.style.display = 'none';
}
input.oninput = function () {
  button.style.display = 'flex';
};
button.addEventListener('click', function () {
  button.style.display = 'none';
})

// email validation
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const INPUT = document.querySelector('#email');
let btnDemo = document.querySelector('.form__btn__demo');

function validateEmail(value) {
  return EMAIL_REGEXP.test(value);
}

function updateInput() {
  if (validateEmail(INPUT.value)) INPUT.style.borderColor = '#ffa300';
  else INPUT.style.borderColor = 'red';
}

btnDemo.addEventListener('click', updateInput);


// header adapt

$(window).on('scroll', function () {
  var scrollTop = $(this).scrollTop();
  $('.color-bg').each(function () {
    var topDistance = $(this).offset().top - 92;
    if ((topDistance) < scrollTop) {
      $('header').css('background-color', $(this).attr('data-bg'));
      $('.menu').css('background-color', $(this).attr('data-bg'));
    }
  });
  $('.color-change').each(function () {
    var topDistance = $(this).offset().top - 92;
    if ((topDistance) < scrollTop) {
      $('#mymenu a').css('color', $(this).attr('data-color'));
      $('#mymenu span').css('color', $(this).attr('data-color'));
      $('#mylogo svg path').css('fill', $(this).attr('data-color'));
      $('#mylogo2 svg path').css('fill', $(this).attr('data-color'));
      $('#mylogo2 svg polygon').css('fill', $(this).attr('data-color'));
      $('.burger span').css('background-color', $(this).attr('data-color'));
    }
  });
});

$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function () {
  if ($('#hero').isInViewport()) {
    $('.header__logo').removeClass('invisible');
    $('.header__logo_2').removeClass('visible');
    $('.footer__logo').removeClass('invisible');
    $('.footer__logo_2').removeClass('visible');
  } else {
    $('.header__logo').addClass('invisible');
    $('.header__logo_2').addClass('visible');
    $('.footer__logo').addClass('invisible');
    $('.footer__logo_2').addClass('visible');
  }
});

// cookie policy
$(document).on('ready', function () {
  if (document.cookie.indexOf("accepted_cookies=") < 0) {
    $('.cookie-overlay').removeClass('d-none').addClass('d-block');
  }

  $('.accept-cookies').on('click', function () {
    document.cookie = "accepted_cookies=yes;"
    $('.cookie-overlay').removeClass('d-block').addClass('d-none');
  })

  // expand depending on your needs
  // $('.close-cookies').on('click', function () {
  //   $('.cookie-overlay').removeClass('d-block').addClass('d-none');
  // })
})
