// interface.js
$(document).ready(function () {
  var thermostat = new Thermostat()
  updateTemperature()
  updateUsage()
  get_weather()

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

  function get_weather(){
  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=57e55e68828c05bd66fbbe542d6fb8c5&units=metric', function(data) {
      $('#weather').text("temperature now " + data.main.temp + " c");
    })}

})
