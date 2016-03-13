//= require main

// Nav logo resize animation
$(document).on("scroll",function(){
  if($(document).scrollTop()>50){
    $("img").removeClass("large").addClass("small");
  } else{
    $("img").removeClass("small").addClass("large");
  }
});

// About section hidden text
// .showtext1
// $(function() {
//     $('.showtext1')
//         .hide();
// });
// $(document).ready(function() {
//     $('#hidden1').click(function() {
//         $('.showtext1').slideToggle("slow");
//     });
// });
// // .showtext2
// $(function() {
//     $('.showtext2')
//         .hide();
// });
// $(document).ready(function() {
//     $('#hidden2').click(function() {
//         $('.showtext2').slideToggle("slow");
//     });
// });
// // .showtext3
// // $(function() {
// //     $('.showtext3')
// //         .hide();
// // });

$(document).ready(function(){
  $("p").slideUp();
  $("h3").click(function(){
    $(this).next("p").slideToggle("slow");
    $("p").not($(this).next("p")).slideUp();
  });
});
