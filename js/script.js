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
  $('.gallery .block').on('click', function(e) {
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
    e.preventDefault();
  });

  $('#gallery-modal .close, #overlay').on('click', function(e) {
    $('#overlay').hide();
    $('#gallery-modal').hide();
    e.preventDefault();
  });



});

//show/hide menu on jQuery
$('.gallery-menu').on('click', function(e) {
  $('.g-menu').toggleClass('open');
  e.preventDefault();
});


//show/hide blocks
var block = 15;

$(".block:not(:lt("+block+"))").hide();
$(".show-all").on('click', function (e) {
  e.preventDefault();
  if( $(".block:eq("+block+")").is(":hidden")) {
    $(".block:hidden").show();
  } else {
    $(".block:not(:lt("+block+"))").hide();
  };
});

