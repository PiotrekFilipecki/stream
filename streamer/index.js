var http = require('http');
var fs = require('fs');

console.log('starting on 3001');
http.createServer(function(req, res){
	res.writeHead(200, 
		{
			'Content-Type': 'video/mp4',
			'Accept-Ranges': 'bytes'
		});
	var rs = fs.createReadStream("movie.mp4");
	rs.pipe(res);
}).listen(3001);