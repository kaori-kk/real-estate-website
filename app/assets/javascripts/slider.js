$(document).ready(function(){
  $('.main-property').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  nextArrow: $('.next'),
  prevArrow: $('.prev'),

  responsive: [
   {
     breakpoint: 1025, // 768~1023px以下のサイズに適用
        settings: {
           slidesToShow:3
        }
    }, {
      breakpoint: 769, // 480〜767px以下のサイズに適用
        settings: {
           slidesToShow: 2
         }
     },{
 breakpoint: 480, // 〜479px以下のサイズに適用
       settings: {
          slidesToShow: 1
       }
    }
 ]
  });
})
