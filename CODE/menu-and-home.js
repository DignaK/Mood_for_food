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

// HOME


//FUNCTION TO LINK FROM IMAGE CLICK TO RECIPES
function imageClick() {
  $("#toLink").click(()=>{
    $(".slideshow-container").hide();
    $(".recipes").show();
    $(".shopping").hide();
})
};

//SLIDESHOW
let slideIndex = 1;

let myTimer;

let slideshowContainer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 3000);
  
    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];
  
    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
  
    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n){
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }
  
  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 3000);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 3000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, 3000);
  showSlides(slideIndex = n);
}

function showSlides(n){
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

pause = () => {
  clearInterval(myTimer);
}

resume = () =>{
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(slideIndex)}, 3000);
}
