$(function () {
  var socket = io('/');
  socket.on('event', function (data) { 
    var d1 = data.temp
    var d2 = data.light
    var d3 = data.pressure
    yo(d1) 
    yo1(d2) 
    yo2(d3)
  })
})
function yo (data) { 
    console.log(data)
    $('#container').highcharts({
        title: {
            text: 'Temperature',
            x: -20 //center
        },
        subtitle: {
            text: '',
            x: -20
        },
        xAxis: {
            categories: []
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'TRAIN DUDE',
            data: data 
       }]
    });
} 

function yo1 (data) { 
    console.log(data)
    $('#container1').highcharts({
        title: {
            text: 'LIGHT ON TRAINZZZZZZZZZZZ',
            x: -20 //center
        },
        subtitle: {
            text: '',
            x: -20
        },
        xAxis: {
            categories: []
        },
        yAxis: {
            title: {
                text: 'lux'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: 'lux'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'TRAIN DUDE',
            data: data 
       }]
    });
}

function yo2 (data) { 
    console.log(data)
    $('#container2').highcharts({
        title: {
            text: 'PRESSURE!!!!!!!!!!!!!!!!!!',
            x: -20 //center
        },
        subtitle: {
            text: '',
            x: -20
        },
        xAxis: {
            categories: []
        },
        yAxis: {
            title: {
                text: 'PSI FOO'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: 'PSI'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'TRAIN DUDE',
            data: data 
       }]
    });
} 
