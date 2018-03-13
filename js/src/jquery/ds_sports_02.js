(function($){

// jQuery Start!
var contentA = $('#content_Area_01');
var offsetTop =contentA.offset().top;
var scBox = $('#scroll_Box_01');
// console.log(offsetTop);   
$(window).on('scroll', function(){
  var scrollTop = $(this).scrollTop();
  // console.log(scrollTop);
  if(offsetTop <= scrollTop){
    scBox.fadeIn();
  }else{
    scBox.fadeOut();
  }
});
// jQuery End!

var gnbBox = $('#gnb_Box');
var sGG = gnbBox.offset().top;
// console.log(where);
$(window).on('scroll',function(){
  var scrollTb = $(this).scrollTop();
  
  if(sGG <= scrollTb){

    gnbBox.addClass('fixed');
  }else{
    gnbBox.removeClass('fixed');
  
}
});

})(this.jQuery);