var express = require('express')
  , bodyParser = require('body-parser') 
  , path = require('path')
  , http = require('http')
  , ejs = require('ejs')
  , net = require('net') //this will be the listening thing
  , app = express()
  , server = http.createServer(app)
  , io  = require('socket.io')(server)

app.set('views', path.join(__dirname, 'views')) //tell our webserver to look for views in a folder called views
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.get('/', function (req, res) { 
  res.render('index', {noOfTabs : 02}) 
})

var obj = {}
obj.light= [] 
obj.temp= []
obj.pressure= [] 
var last

app.post('/data', function (req, res) { 
  if(obj.temp.length > 10) { 
    obj.temp.push(req.body.temp)
    last = req.body.temp
    obj.temp.shift() 
  } else 
  obj.temp.push(req.body.temp)

  if (obj.light.length > 10) { 
    obj.light.push(req.body.light) 
    obj.light.shift()
  } else 
  obj.light.push(req.body.light) 

  if (obj.pressure.length > 10) { 
    obj.pressure.push(req.body.pressure) 
    obj.pressure.shift()
  } else
   obj.pressure.push(req.body.pressure) 
    res.end() 
})

io.on('connection', function (socket) {
  setInterval(function () { 
  if (last !== obj.temp[obj.temp.length -1])
    socket.emit('event', obj) 
  
  } , 2000)
})

server.listen(8080)
