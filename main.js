$(document).ready(function() {



$('.input').hide();



$('.noInput').hover(function() {
  $('.noInput').hide();
  $('.input').show();
});




$('.input').keyup(function() {
  var currentText = $( this ).val();
  $('.noInput').text( currentText );
  console.log(currentText)
});

$('.input').focusout(function() {
  $('.input').hide();
  $('.noInput').show();

});




})
