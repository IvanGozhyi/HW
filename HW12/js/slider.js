
let showSlides = (n) => {
    let dots = document.getElementsByClassName("dot");
    let slides = document.getElementsByClassName("slider__inner");
    if (n > slides.length) {
        slideNum = 1;
    }
    else if (n < 1) {
        slideNum = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideNum-1].style.display = "block";
    dots[slideNum-1].className += " active";

}

let slideNum = 1;
showSlides(slideNum);


function currentSlide(n) {
    showSlides(slideNum = n);
}

let plusSlides = (n) => {
    slideNum += n;
    showSlides(slideNum);

}
