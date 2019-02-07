// interface.js
$(document).ready(function () {
  var thermostat = new Thermostat()
  updateTemperature()
  updateUsage()

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
})
