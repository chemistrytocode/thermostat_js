describe('Thermostat', function () {
  var thermostat
  var lowThermostat
  var highThermostat
  beforeEach(function () {
    thermostat = new Thermostat()
    lowThermostat = new Thermostat()
    highThermostat = new Thermostat()
  })

  it('initializes with a default of 20 degrees', function () {
    expect(thermostat.temperature()).toEqual(20)
  })

  it('initializes with a minimum temperature of 10 degrees', function () {
    expect(thermostat._minimum).toEqual(10)
  })

  it('initializes with a maximum temperature of 25 degrees', function () {
    expect(thermostat._maximum).toEqual(25)
  })

  it('initializes with usage set to medium-usage', function () {
    expect(thermostat._usage).toEqual('medium-usage')
  })

  it('up - increases temperature by 1 degree', function () {
    thermostat.up()
    expect(thermostat.temperature()).toEqual(21)
  })

  it('up - should not increase temperature by 1 degree if at max temperature', function () {
    spyOn(highThermostat, 'temperature').and.returnValue(32)
    highThermostat.up()
    expect(highThermostat.temperature()).toEqual(32)
  })

  it('down - descreases temperature by 1 degree', function () {
    thermostat.down()
    expect(thermostat.temperature()).toEqual(19)
  })

  it('down - should not descrease temperature by 1 degree if at min temperature', function () {
    spyOn(lowThermostat, 'temperature').and.returnValue(10)
    lowThermostat.down()
    expect(lowThermostat.temperature()).toEqual(10)
  })

  it('power_saving_on - sets the temperature to the maximum of 25', function () {
    thermostat.power_saving_on()
    expect(thermostat._maximum).toEqual(25)
  })

  it('power_saving_off - sets the temperature to the maximum of 32', function () {
    thermostat.power_saving_off()
    expect(thermostat._maximum).toEqual(32)
  })

  it('#Reset - Resets the temperature to 20', function () {
    thermostat.reset()
    expect(thermostat.temperature()).toEqual(20)
  })

  it('#checkUsage - It updates the usage to low-usage if temperature drops below 18', function () {
    spyOn(lowThermostat, 'temperature').and.returnValue(10)
    lowThermostat.checkUsage()
    expect(lowThermostat._usage).toEqual('low-usage')
  })

  it('#checkUsage - It updates the usage to low-usage if temperature drops below 18', function () {
    spyOn(thermostat, 'temperature').and.returnValue(23)
    thermostat.checkUsage()
    expect(thermostat._usage).toEqual('medium-usage')
  })

  it('#checkUsage - It updates the usage to high-usage if temperature exceeds 32', function () {
    spyOn(highThermostat, 'temperature').and.returnValue(32)
    highThermostat.checkUsage()
    expect(highThermostat._usage).toEqual('high-usage')
  })
})
