$(document).on('ready', function() {

  $('#submitquote').on('click', function() {
  	console.log($(this));
  	$('.quotebox').append("This is working");
  });
});