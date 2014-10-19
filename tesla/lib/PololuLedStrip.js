var mraa = require('mraa');
var sleep = require('sleep');

var PololuLedStrip = function(pin) {
    this._pin = new mraa.Gpio(pin);
    this._pin.dir(mraa.DIR_OUT);
    this._pin.write(1);
};

PololuLedStrip.prototype.sendBit = function(bit) {
    this._pin.write(1);
    if (bit) {
        // if 1
        sleep.usleep(1);
    } else {
        sleep.usleep(0);
    }
    this._pin.write(0);
    if (bit) {
        // if 1
        sleep.usleep(0);
    } else {
        sleep.usleep(1);
    }
};

PololuLedStrip.prototype.endWrite = function() {
    this._pin.write(0);
    sleep.usleep(24);
    this._pin.write(1);
};

PololuLedStrip.prototype.write = function(colors) {
    for (var c = 0; c < colors.length; c++) {
        // colors is an array of objects with keys r,g,b and values [0..255]
        var str = colors[c].r.toString(2);
        var that = this;
        for (var i = 0; i < 8; i++) {
            this.sendBit(parseInt(str[i]) || 0);
            // process.nextTick(function (){
            //     that._pin.write(1);
            //     that._pin.write(0);
            // });
        }
        // colors is an array of objects with keys r,g,b and values [0..255]
        str = colors[c].g.toString(2);
        for (i = 0; i < 8; i++) {
            this.sendBit(parseInt(str[i]) || 0);
            // process.nextTick(function (){
            //     that._pin.write(1);
            //     that._pin.write(0);
            // });
        }
        // colors is an array of objects with keys r,g,b and values [0..255]
        str = colors[c].b.toString(2);
        for (i = 0; i < 8; i++) {
            this.sendBit(parseInt(str[i]) || 0);
            // process.nextTick(function (){
            //     that._pin.write(1);
            //     that._pin.write(0);
            // });
        }
    }

    this.endWrite();

};

module.exports = PololuLedStrip;