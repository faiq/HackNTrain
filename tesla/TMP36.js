var mraa = require('mraa');

var TMP36 = function(pin) {
    this._pin = mraa.Gpio(pin);
    this._pin.dir(mraa.DIR_IN);
};

TMP36.prototype.vToC = function(voltage) {
    // according to specs
    return 100*voltage - 50;
};

TMP36.prototype.getTemp = function() {
    return this.vToC(this._pin.read());
};

module.exports = TMP36;