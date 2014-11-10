var mraa = require('mraa');

var TMP36 = function(pin) {
    this._pin = new mraa.Aio(pin);
};

TMP36.prototype.vToC = function(voltage) {
    // according to specs
    return 100*voltage/204.8 - 50;
};

TMP36.prototype.CtoF = function(C) {
    return C*9/5 + 32;
};

TMP36.prototype.getTemp = function() {
    var v = this._pin.read();
    return this.vToC(v);
};

module.exports = TMP36;