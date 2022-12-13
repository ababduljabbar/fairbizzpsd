$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:'<button type="button" class="slick-prev">     Prev   <i class="fa fa-arrow-left"></i></button>',
        nextArrow:'<button type="button" class="slick-next">  <i class="fa fa-arrow-right"></i>Next    </button>',
        dots:true,
        autoplay:true


    }); 
    $('.brand-slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay:true


    }); 
    $(".faq").accordion({
        questionClass: '.question',
        answerClass: '.answer',
        itemClass: '.item',
        closeOthers: true,
        animationDuration:500


      });
});