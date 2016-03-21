//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


// Nav logo resize animation
$(document).on("scroll",function(){
  if($(document).scrollTop()>50){
    $("img").removeClass("large").addClass("small");
  } else{
    $("img").removeClass("small").addClass("large");
  }
});

// About section toggle
$(function() {
    $('.accordion dd').filter(':nth-child(n+4)').hide();
    $('.accordion dl').on('click', 'dt', function() {
    $('.accordion dd').hide();
    $(this).siblings("dt").find("span").text("+");
    $(this).find("span").text("-");
    $(this).next().slideDown("slow");
  });
});

