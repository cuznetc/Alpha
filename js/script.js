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

  //подобие модалки и переносом данных
  $('.gallery .block').on('click', function() {
    $('#overlay').show();
    $('#gallery-modal').show();
    var modalImageURL = $(this).find('a').attr('href');
    if(!modalImageURL){
      modalImageURL = 'images/01.jpg';
    }
    var modalinfo = $(this).find('.info').html();
    if(!modalinfo){
      modalinfo = '';
    }
    $('#modalImg').attr('src', modalImageURL);
    $('#modalText').html(modalinfo);
  });

  $('#gallery-modal .close').on('click', function() {
    $('#overlay').hide();
    $('#gallery-modal').hide();
  });

  $('#overlay').on('click', function() {
    $('#overlay').hide();
    $('#gallery-modal').hide();
  });


});
