// burger menu
let burger = document.querySelector(".burger");
let nav = document.querySelector(".nav");

burger.addEventListener("click", ()=> {
   nav.classList.toggle("active");
   burger.classList.toggle("active");
})

// slider

let indexSlider = 1;
showSlid(indexSlider);

function plusSlides(n) {
   showSlid(indexSlider += n);
}

function currentSlide(n) {
   showSlid(indexSlider = n);
}

function showSlid(n) {
   
   let slides = document.querySelectorAll(".slider__content");
   let dots = document.querySelectorAll(".slider__dots-dot");

   if (n > slides.length) { indexSlider = 1 }
   if (n < 1) { indexSlider = slides.length }

   for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }
   for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" dotActive", "");
   }

   slides[indexSlider - 1].style.display = "flex";
   dots[indexSlider - 1].className += " dotActive";
} 