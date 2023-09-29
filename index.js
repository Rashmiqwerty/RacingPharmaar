$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20) {
             $('.navbar').addClass("sticky");
            
        } else {
            $('.navbar').removeClass("sticky");
        }
        // Scro;;
    });
     // scroll-up button show/hide script
     if(this.scrollY > 500){
      $('.scroll-up-btn').addClass("show");
  }else{
      $('.scroll-up-btn').removeClass("show");
  }
});

// slide-up script
$('.scroll-up-btn').click(function(){
  $('html').animate({scrollTop: 0});
  // removing smooth scroll on slide-up button click
  $('html').css("scrollBehavior", "auto");
});

$('.navbar .menu li a').click(function(){
  // applying again smooth scroll on menu items click
  $('html').css("scrollBehavior", "smooth");
});

// toggle menu/navbar script
$('.menu-btn').click(function(){
  $('.navbar .menu').toggleClass("active");
  $('.menu-btn i').toggleClass("active");
});
        


// AboutProduct Section 
let slides = document.getElementsByClassName("slide");
let navlinks = document.getElementsByClassName("dot");
let currentSlide = 0;

document.getElementById("button-next").addEventListener("click", () => {
  changeSlide(currentSlide + 1);
});
document.getElementById("button-prev").addEventListener("click", () => {
  changeSlide(currentSlide - 1);
});

function changeSlide(moveTo) {    
  console.log("c",currentSlide);
  if (moveTo >= slides.length) {
    moveTo = 0;
  }
  if (moveTo < 0) {
    moveTo = slides.length - 1;
  }

  slides[currentSlide].classList.toggle("active");
  navlinks[currentSlide].classList.toggle("activeDot");
  slides[moveTo].classList.toggle("active");
  navlinks[moveTo].classList.toggle("activeDot");
  currentSlide = moveTo; 
}

document.querySelectorAll(".dot").forEach((bullet, bulletIndex) => {
  bullet.addEventListener("click", () => {
    if (currentSlide !== bulletIndex) {
      changeSlide(bulletIndex);
    }
  });
});


// Gas

