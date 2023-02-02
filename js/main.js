/*$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:true,
        adaptiveHeight:true,
        slidesToScroll:1,
        slidesToShow:1,
        speed:2000,
        easing:'ease',
        infinite:true,
        initialSlide:0,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        draggable:false,
        waitForAnimate:true,
    });
});
*/

var slideIndex = 1;

showSlides(slideIndex)

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("hero__item")
    if (n > slides.length){
        slideIndex = 1
    }

    if (n < 1){
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block"
}