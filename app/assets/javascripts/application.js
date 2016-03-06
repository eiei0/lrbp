//= require jquery

// Nav scroll animations - http://learnwebtutorials.com/jquery-tutorial-animate-scroll-to-anchor-link
//// About section
$(document).ready(function() {
  $('a[href="#about"]').click(function(e) {
    e.preventDefault();
    var targetOffset = $('div[name="about"]').offset().top;
    $('body').animate({scrollTop: targetOffset}, 1000);
  });
});
//// Where We Play Section
$(document).ready(function() {
  $('a[href="#where"]').click(function(e) {
    e.preventDefault();
    var targetOffset = $('div[name="where"]').offset().top;
    $('body').animate({scrollTop: targetOffset}, 1000);
  });
});

// Nav logo resize animation
$(document).on("scroll",function(){
  if($(document).scrollTop()>50){
    $("img").removeClass("large").addClass("small");
  } else{
    $("img").removeClass("small").addClass("large");
  }
});
