
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    http = require('http'),
    path = require('path'),
    Ready = require('ready-signal'),
    r1 = new Ready(),
    socket = require('socket.io-client')('http://localhost:8080'),
    MPL115A1 = require('lib/MPL115A1'),
    MQ4 = require('lib/MQ4'),
    PhotoResistor = require('lib/PhotoResistor'),
    TMP36 = require('lib/TMP36'),
    request = require('request');


var app = express();

app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.post('/lights', routes.lights);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

// set up the listening for the color sensor

// var pressureSensor = new MPL115A1(0);
// var methaneSensor = new MQ4(9);
var pr = new PhotoResistor(6, 1);
var tempSensor = new TMP36(2);

var laser = new mraa.Gpio(7);
laser.dir(mraa.DIR_OUT);
laser.write(0);
var laserState = false;

socket.on('connect', function(){
  console.log('connected');
  onConnect();
});

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

finConnect(function() {
    socket.on('laser', function() {
        laserState = !laserState;
        laser.write(laserState?1:0);
    });
});

onConnect(function () {
    finConnect();
});

setInterval(function() {
    // every 1 sec, get some sensor data for now
    /// socket.emit('train', some data here)
    // console.log(pressureSensor.getPressure());
    pr.getLight(function(light) {
        var data = {
            light: light,
            temp: tempSensor.getTemp(),
            pressure: getRandomInt(12,16)
        };

        request.post('/die', data);

    });

}, 1000);

