//= require jquery

// http://learnwebtutorials.com/jquery-tutorial-animate-scroll-to-anchor-link
$(document).ready(function() {
  $('a[href="#about"]').click(function(e) {
    e.preventDefault();
    var targetOffset = $('div[name="about"]').offset().top;
    $('body').animate({scrollTop: targetOffset}, 1000);
  });
});
