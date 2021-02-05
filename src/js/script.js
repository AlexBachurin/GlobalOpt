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

  document.querySelector('.reviews__slider-prev').addEventListener('click', function() {
    slider.goTo('prev');
  });
  document.querySelector('.reviews__slider-next').addEventListener('click', function() {
    slider.goTo('next');
  });
  
  //show Map Info

  const marker = document.querySelector('.map__marker');
  const markerDescr = document.querySelector('.map__descr');

  marker.addEventListener('click', () => {
        markerDescr.classList.toggle('active');
  })