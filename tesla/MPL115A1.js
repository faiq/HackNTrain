

var mraa = require('mraa');

var MPL115A1 = function(bus) {
    this._spi = mraa.Spi(bus);
    // assume the defaults work for now?
    // this._spi.mode(0);
    // this._spi.frequnecy(4);
};

MPL115A1.prototype.getPressure = function() {
    return this._spi.write(0x55);
};

module.exports = MPL115A1;