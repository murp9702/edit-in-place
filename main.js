$(document).ready(function() {

// hide the input on page load
$('.input').hide();

// hide the static text and reveal text box when cursor hovers over
$('.noInput').hover(function() {
  $('.noInput').hide();
  $('.input').show();
});

// captures keypresses and updates the noInput span with the new text
$('.input').keyup(function() {
  var currentText = $( this ).val();
  $('.noInput').text( currentText );
  console.log(currentText)
});


// when input loses focus the input is hidden and the noInput span is revealed.
$('.input').focusout(function() {
  $('.input').hide();
  $('.noInput').show();

});




})
