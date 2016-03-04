// nav logo resize
<script type="text/javascript">
$(document).on("scroll",function(){
    if($(document).scrollTop()>100){
        $("header").removeClass("logo-large").addClass("logo-small");
    } else{
        $("header").removeClass("logo-small").addClass("logo-large");
    }
});
</script>
