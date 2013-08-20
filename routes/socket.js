var fnRouter  = require('./piRouter.js')
var fs = require('fs');

exports.socket = function (io) {
  io.sockets.on('connection', function(socket) {
  	socket.on('turnOn', function (data) {
  		console.log(data);
  		var request = new Object();
  		request.body = data;
      fnRouter.turnON(request,function(results){
    		//console.log(results);
    	});
  });

  	socket.on('turnOff', function (data) {
  		var request = new Object();
  		request.body = data;
    	fnRouter.turnOff(request,function(results){
    		//console.log(results);
    	});
  });
});
}
