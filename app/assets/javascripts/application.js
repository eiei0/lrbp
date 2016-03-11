//= require main

// Nav logo resize animation
$(document).on("scroll",function(){
  if($(document).scrollTop()>50){
    $("img").removeClass("large").addClass("small");
  } else{
    $("img").removeClass("small").addClass("large");
  }
});

// Hidden menu from Squarespace
// $(document).ready(function() {
//   $('.markdown-block .sqs-block-content h3').css('cursor', 'pointer');
//   $(".markdown-block .sqs-block-content h3").nextUntil("h3").slideToggle();
//   $(".markdown-block .sqs-block-content h3").click(function() {
//       $(this).nextUntil("h3").slideToggle();
//   });
// });
