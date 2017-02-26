var express = require("express");
var path = require("path");
var router = express.Router();

var friend = require('../data/friends.js')

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
		
});

// Create all our routes and set up logic within those routes where required.
router.get("/survey", function(req, res) {
		res.send("SURVEY");
	
});

// router.post("/create", function(req, res){
// 	// res.send(req.body);
// 	var cols = ['title', 'genre', 'rating'];
// 	var vals = [req.body.title, req.body.genre, req.body.rating];



// // Export routes for server.js to use.
module.exports = router;
