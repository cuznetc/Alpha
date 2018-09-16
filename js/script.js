jQuery(document).ready(function() {
  //test JQ
  var msg;
  if (window.jQuery) {
      msg = 'Version jQuery: ' + jQuery.fn.jquery;
  } else {
      msg = 'jQuery not installed';
  }
  console.log(msg);


  //add gallery bg
  $('.gallery .block a').each(function() {
    var imageURL = $(this).attr('href');
    if(imageURL){
      $(this).parent().css("background-image", "url('"+imageURL+"')");
      $(this).hide();
    }
  });


});
