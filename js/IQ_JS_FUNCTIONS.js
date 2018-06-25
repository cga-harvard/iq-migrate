<script src="https://code.jquery.com/jquery-1.10.2.js"></script>
<script>
jQuery(document).ready(function() {
jQuery(".block-boxes-os_boxes_columns .block-inner:first").addClass("contain");
});


jQuery(window).scroll(function () {
   jQuery('[id^="os-fade"]').each(function () { // <---loop the divs id starts with #box 
      if ((jQuery(this).offset().top - jQuery(window).scrollTop()) < 1) { //<---mark the jQuery(this).offset().top of current object
          jQuery(this).stop().fadeTo('40', 0); //<----fadeOut the current obj
      } else {
          jQuery(this).stop().fadeTo('slow', 2); //<----fadeIn the current obj
      }
   });
});

jQuery(document).ready(function() {
  jQuery("div.copyright").each(function() {
   $(this).html($(this).html().replace(/[|]/g," "));
});
});

var stickyOffset = jQuery('#menu-bar').offset().top;
jQuery(window).scroll(function(){
  var sticky = jQuery('#menu-bar'),
      scroll = jQuery(window).scrollTop();
    
  if (scroll >= stickyOffset) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

</script>