// бургер
let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav');

function closeMenu() {
  if (!burger || !nav) return;
  burger.classList.remove('is-open');
  nav.classList.remove('is-open');
  document.body.classList.remove('menu-open');
}

if (burger && nav) {
  burger.onclick = function () {
    burger.classList.toggle('is-open');
    nav.classList.toggle('is-open');
    document.body.classList.toggle('menu-open');
  };

  let links = nav.querySelectorAll('a');
  for (let i = 0; i < links.length; i++) {
    links[i].onclick = closeMenu;
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });
}

// слайдер
let slider = document.querySelector('.slider');

if (slider) {
  let track = slider.querySelector('.slider__track');
  let slides = slider.querySelectorAll('.slider__slide');
  let prevBtn = slider.querySelector('.slider__btn--prev');
  let nextBtn = slider.querySelector('.slider__btn--next');
  let dots = slider.querySelectorAll('.slider__dot');
  let current = 0;

  function showSlide(n) {
    if (n >= slides.length) {
      current = 0;
    } else if (n < 0) {
      current = slides.length - 1;
    } else {
      current = n;
    }

    track.style.transform = 'translateX(-' + current * 100 + '%)';

    for (let d = 0; d < dots.length; d++) {
      dots[d].classList.remove('is-active');
    }
    if (dots[current]) {
      dots[current].classList.add('is-active');
    }

    let num = slider.querySelector('.slider__counter-current');
    if (num) {
      let text = current + 1;
      if (text < 10) {
        text = '0' + text;
      }
      num.textContent = text;
    }

    let bar = slider.querySelector('.slider__progress-bar');
    if (bar) {
      bar.style.width = ((current + 1) / slides.length) * 100 + '%';
    }
  }

  if (prevBtn) {
    prevBtn.onclick = function () {
      showSlide(current - 1);
    };
  }

  if (nextBtn) {
    nextBtn.onclick = function () {
      showSlide(current + 1);
    };
  }

  for (let j = 0; j < dots.length; j++) {
    (function (index) {
      dots[index].onclick = function () {
        showSlide(index);
      };
    })(j);
  }

  showSlide(0);
}
