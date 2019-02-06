describe('Thermostat', function () {
  var thermostat
  beforeEach(function () {
    thermostat = new Thermostat()
  })

  it('initializes with a default of 20 degrees', function () {
    expect(thermostat.temperature()).toEqual(20)
  })
})
