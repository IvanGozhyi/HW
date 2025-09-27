let slideNum = 1;
let interval = null;

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

let timer = () => {
    if (interval) clearInterval(interval);
     interval = setInterval(() => {
        slideNum++;
        showSlides(slideNum);
    }, 3000);

}


showSlides(slideNum);
timer();



let currentSlide = (n) => {
    showSlides(slideNum = n);
    timer()
}

let plusSlides = (n) => {
    slideNum += n;
    showSlides(slideNum);
    timer()
}


