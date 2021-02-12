//slider

 const slider = tns({
    container: '.reviews__slider',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    speed: 500
  });

  const prev = document.querySelectorAll('.reviews__slider-prev');
  const next = document.querySelectorAll('.reviews__slider-next');
  next.forEach(item => {
    item.addEventListener('click', function() {
      slider.goTo('next');
    })
  })
  prev.forEach(item => {
    item.addEventListener('click', function() {
      slider.goTo('prev');
    })
  })
  // document.querySelector('.reviews__slider-prev').addEventListener('click', function() {
  //   slider.goTo('prev');
  // });
  // document.querySelector('.reviews__slider-next').addEventListener('click', function() {
  //   slider.goTo('next');
  // });
  
  //show Map Info

  const marker = document.querySelector('.map__marker');
  const markerDescr = document.querySelector('.map__descr');

  marker.addEventListener('click', () => {
        markerDescr.classList.toggle('active');
  })

  //menu

  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.navigation__menu');
  const overlay = document.querySelector('.navigation__overlay');
  const links = document.querySelectorAll('.navigation__link');


  hamburger.addEventListener('click' ,() => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('close');
  })

  overlay.addEventListener('click', () => {
    menu.classList.remove('active');
    hamburger.classList.remove('close');
  }) 
  
  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      hamburger.classList.remove('close');
    })
  })
   