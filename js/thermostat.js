// interface.js
$(document).ready(function() {
  $('#temperature-up').click(function(){
    $('#output').append("You staying for games or going to the gym? ");
  });
  $('#temperature-down').click(function(){
    $('#output').append("Games :) ");
  });
  $('#temperature-reset').click(function(){
    $('#output').append("Gym :( ");
  });
  $('#ps-on').click(function(){
    $('#output').append("Sleep :o ");
  });
  $('#ps-off').click(function(){
    $('#output').append("Food :D");
  });
});
