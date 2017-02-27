var express = require("express");
var bodyParser = require("body-parser");

var port = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use('/app/public', express.static(__dirname + '/app/public'));

app.use(bodyParser.urlencoded({ extended: false }));

// app.get('/', function(req, res){
// 	res.send('hi')
// });
// Import routes and give the server access to them.
var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


app.listen(port, function(){
	console.log('listening on port ' + port)
});