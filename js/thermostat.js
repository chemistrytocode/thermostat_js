// interface.js
$(document).ready(function () {
  var thermostat = new Thermostat()
  updateTemperature()
  updateUsage()
  default_weather()

  $('#temperature-up').click(function () {
    thermostat.up()
    updateTemperature()
    updateUsage()
  })

  $('#temperature-down').click(function () {
    thermostat.down()
    updateTemperature()
    updateUsage()
  })

  $('#temperature-reset').click(function () {
    thermostat.reset()
    updateTemperature()
    updateUsage()
    display_weather()
  })

  $('#ps-on').click(function () {
    thermostat.power_saving_on()
    $('#PS_sign').text('Power Saving is ON!')
  })

  $('#ps-off').click(function () {
    thermostat.power_saving_off()
    $('#PS_sign').text('Power Saving is OFF!')
  })

  function updateTemperature () {
    $('#output').text(thermostat.temperature())

  };
  function updateUsage() {
    // $('#usage').text(thermostat.currentUsage())
    $('#usage').attr('class', thermostat.currentUsage())
  }

  function default_weather(city = 'London'){
  $.get('http://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=57e55e68828c05bd66fbbe542d6fb8c5&units=metric', function(data) {
      $('#current-temperature').text('Temp in ' + city + ' ' + data.main.temp + 'c');
    })}

    $('#current-city').change(function() {
  var city = $('#current-city').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text('Temp in ' + city + ' ' + data.main.temp + 'c')
  })
})

})
