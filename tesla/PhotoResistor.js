var mraa = require('mraa');

var PhotoResistor = function(out, ain) {
    this._out = mraa.Gpio(out);
    this._ain = mraa.Aio(ain);
    this._out.dir(mraa.DIR_OUT);
};

PhotoResistor.prototype.getLight = function(cb) {
    this._out.write(1);
    setTimeout(function() {
        var light = this._ain.read();
        this._out.write(0);
        cb(light);
    }, 10);
};

module.exports = PhotoResistor;