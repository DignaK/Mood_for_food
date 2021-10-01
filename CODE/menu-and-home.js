$(document).ready(()=>{
  $(".recipes").hide();
  $(".shopping").hide();

  $(".menu-home").click(()=>{
      $(".slideshow-container").show();
      $(".recipes").hide();
      $(".shopping").hide();
  })

  $(".menu-recipes").click(()=>{
      $(".slideshow-container").hide();
      $(".recipes").show();
      $(".shopping").hide();
  })

  $(".menu-shopping").click(()=>{
      $(".slideshow-container").hide();
      $(".recipes").hide();
      $(".shopping").show();
  })
})


//FUNCTION TO LINK FROM IMAGE CLICK TO RECIPES
function imageClick() {
  $("#toLink").click(()=>{
    $(".slideshow-container").hide();
    $(".recipes").show();
    $(".shopping").hide();
})
};

// HOME
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000);
}
