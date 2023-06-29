$(document).ready(function() {
    console.log('[sale page]')
    var width = window.innerWidth

    if (width < 768) {
      $('.mobile-gallery-carousel').flickity({
        lazyLoad: 2,
        freeScroll: true,
        imagesLoaded: true,
        draggable: true,
        cellAlign: 'center',
        pageDots: false,
        arrowShape: arrowShape
      });
    }
})