var express = require('express')
  , bodyParser = require('body-parser')
  , path = require('path')
  , http = require('http')
  , ejs = require('ejs')
  , net = require('net') //this will be the listening thing
  , edison = require('socket.io-client')('http://localhost:8080')
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


io.on('connection', function (socket) {
  var obj = {}
  obj.data1 = [1,2,3,5,6]
  obj.data2 = []
  obj.data3 = []
  obj.data4 = []

  socket.on('train', function (data) {
    obj.data1.push(data.data1)
    obj.data2.push(data.data2)
    obj.data3.push(data.data3)
    obj.data4.push(data.data4)
    socket.emit('train', obj)
    console.log('dsafasdf')
  })
})

server.listen(80)
