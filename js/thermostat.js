// interface.js
$(document).ready(function () {
  var thermostat = new Thermostat()
  updateTemperature()

  $('#temperature-up').click(function () {
    thermostat.up()
    updateTemperature()
  })

  $('#temperature-down').click(function () {
    thermostat.down()
    updateTemperature()
  })

  $('#temperature-reset').click(function () {
    thermostat.reset()
    updateTemperature()
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
})
