var mraa = require('mraa');

// via http://playground.arduino.cc/Learning/PhotoResistor
var PhotoResistor = function(out, ain) {
    this._out = new mraa.Gpio(out);
    this._ain = new mraa.Aio(ain);
    this._out.dir(mraa.DIR_OUT);
};

PhotoResistor.prototype.getLight = function(cb) {
    this._out.write(1);
    var that = this;
    setTimeout(function() {
        var lightVal = that._ain.read();
        that._out.write(0);
        cb(lightVal);
    }, 10);
};

module.exports = PhotoResistor;