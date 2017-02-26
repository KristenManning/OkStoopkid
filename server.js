var express = require("express");
var bodyParser = require("body-parser");

var port = 7921;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// app.get('/', function(req, res){
// 	res.send('hi')
// });
// Import routes and give the server access to them.
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");

app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

app.listen(port, function(){
	console.log('listening on port ' + port)
});