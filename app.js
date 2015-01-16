var restify = require('restify');
var curl = require('node-curl');

var server = restify.createServer({ name: 'stub server' })


server.get('get/remote/data', function(req, res, next){
	
	res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");

    curl('http://remotedata.com', {FOLLOWLOCATION: 1}, function(err) {
    	res.send(JSON.parse(this.body));
    	next();
  	});
});
 
server.listen(3000, function () {
  console.log('%s listening at %s', server.name, server.url)
})