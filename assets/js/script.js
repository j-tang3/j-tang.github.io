$(document).ready(function() {

  //"slide to left" when the user clicks on #carousel-next here
  $('#carousel-prev').hide();
  $('#carousel-next').click(function(){
    var left = parseInt($('#carousel').css('margin-left').replace("px",""));
    if (left == -3840) {
      $('#carousel-next').hide();
      return false;
    } else {
      $('#carousel-prev').show();
      left -= 960;
      $('#carousel').css('margin-left', left);
    }
  });

  //"slide to right" when the user clicks on #carousel-prev here
  $('#carousel-prev').click(function(){
    var right = parseInt($('#carousel').css('margin-left').replace("px",""));
    if (right == 0) {
      $('#carousel-prev').hide();
      return false;
    } else {
      $('#carousel-next').show();
      right += 960;
      $('#carousel').css('margin-left', right);
    }
  });



});