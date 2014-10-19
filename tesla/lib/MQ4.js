var mraa = require('mraa');

var MQ4 = function(pin) {
    this._pin = new mraa.Gpio(pin);
    this._pin.dir(mraa.DIR_IN);
};

MQ4.prototype.getMethaneLevel = function() {
    return this._pin.read();
};

module.exports = MQ4;