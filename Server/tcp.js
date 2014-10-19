var net = require('net'),
server = net.createServer(function(c) { //'connection' listener
  c.setEncoding('utf8')    
  console.log('server connected')
  c.on('end', function() {
    console.log('server disconnected')
  })
  c.on('data', function (data) { 
    data = JSON.parse(data)  
    console.log(data)
  })
})
server.listen(8124, function() { //'listening' listener
  console.log('server bound')
})

