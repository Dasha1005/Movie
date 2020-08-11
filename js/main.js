$(function(){
    $('.slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev">' +
            '<img src="images/previous-arrow.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next">' +
            '<img src="images/next-arrow.svg" alt=""></button>',
        infinite: true
    });
});