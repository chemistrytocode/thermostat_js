function Thermostat () {
  this._degrees = 20
  this._minimum = 10
  this._maximum = 25
  this._usage = 'medium-usage'
};

Thermostat.prototype.temperature = function () {
  return (this._degrees)
}

Thermostat.prototype.currentUsage = function () {
  this.checkUsage()
  return this._usage
}

Thermostat.prototype.up = function () {
  if (this._degrees < this._maximum) { this._degrees++ }
}

Thermostat.prototype.down = function () {
  if (this._degrees > this._minimum) { this._degrees-- }
}

Thermostat.prototype.power_saving_on = function () {
  this._maximum = 25
}

Thermostat.prototype.power_saving_off = function () {
  this._maximum = 32
}

Thermostat.prototype.reset = function () {
  this._degrees = 20
}

Thermostat.prototype.checkUsage = function () {
  if (this.temperature() < 18) { this._usage = 'low-usage' } else if (this.temperature() < 25) { this._usage = 'medium-usage' } else { this._usage = 'high-usage' }
}
