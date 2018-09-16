jQuery(document).ready(function() {
  //test JQ
  var msg;
  if (window.jQuery) {
      msg = 'Version jQuery: ' + jQuery.fn.jquery;
  } else {
      msg = 'jQuery not installed';
  }
  console.log(msg);


});
