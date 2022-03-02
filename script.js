$('.scroll').click(function(e) {
    e.preventDefault();
    var url = this.href;
    var urlHash = this.hash;
    var parts = url.split('#');
    var trgt = parts[1];
    var target_offset = $('#'+trgt).offset();
    var target_top = target_offset.top;

    $('html, body').animate({
        scrollTop:target_top
    }, 500);
    if($('nav.dots a').hasClass('active')) {
        $('nav.dots a').removeClass('active');
    }
    if (urlHash == '#section-1') {
        $('nav.dots a.scroll-1').addClass('active');
    }
    if (urlHash == '#section-2') {
        $('nav.dots a.scroll-2').addClass('active');
    }
    if (urlHash == '#section-3') {
        $('nav.dots a.scroll-3').addClass('active');
    }
    if (urlHash == '#section-4') {
        $('nav.dots a.scroll-4').addClass('active');
    }
});

$('nav.dots a').click(function(){
    if($('nav.dots a').hasClass('active')) {
        $('nav.dots a').removeClass('active');
    }
    $(this).addClass('active');
});

$('.hamburger, nav.main ul li a').on('click', function(e) {
    e.preventDefault();
    $('.hamburger').toggleClass('is-open');
    $('nav.main ul').toggleClass('is-open');
});

$('.geekstudios, .scroll-2').mouseenter(function() {
    $('.hipster').addClass('show');
});
$('.geekstudios, .scroll-2').mouseleave(function() {
    $('.hipster').removeClass('show');
});



<!-- Initialize Swiper -->

      var swiper = new Swiper('.swiper', 
      {
        speed:600,
        grabCursor: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween:10,
        watchSlidesProgress:true,
        keyboard:true,
        mousewheel:true,


        
        breakpoints:{512:{spaceBetween:16},1024:{spaceBetween:32}},
        
        on:{
            
            
            progress(e,r)
            {
                  var swiper = this;
                  
                  o=document.querySelector(".travel-slider-planet");
                  i=document.querySelector(".travel-slider-cities");
                  n=document.querySelector(".swiper");
                  l=document.querySelectorAll(".swiper-slide");
                  
                  const t=e.slides.length>4?360-45*(8-e.slides.length+1):270;
                  
                  
                  o.style.transform = `translate(-50%, -50%) rotate(${t*-r}deg)`;
                  

                  console.log(`${r}ms`);
                  

                /*
                rotate(${t*-r}deg)`,
                setTransition(e,r){o&&(o.style.transitionDuration=`${r}ms`)};
  
                
                  for (var i = 0; i < swiper.slides.length; i++)
                  {
                    var slideProgress = swiper.slides[i].progress,
                        innerOffset = swiper.width * interleaveOffset,
                        innerTranslate = slideProgress * innerOffset;
                    swiper.slides[i].querySelector(".slide-bgimg").style.transform =
                      "translate3d(" + innerTranslate + "px, 0, 0)";
                  }
                   */
            },
            
            setTransition(e,r)
            {
                o=document.querySelector(".travel-slider-planet");
                o.style.transitionDuration = `${r}ms`;
            }
        
        }
      });

  
var swiper2 = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 1,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 70,
      freeModeMomentum: true,
      freeModeMomentumBounce: true,
      preventClicks: true,
      stretch: 0,
      depth: 50,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  var swiper3 = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 1,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 70,
      freeModeMomentum: true,
      freeModeMomentumBounce: true,
      preventClicks: true,
      stretch: 0,
      depth: 50,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

