var express = require("express");

var router = express.Router();

var friend = require('../data/friends.js')

// Create all our routes and set up logic within those routes where required.
router.get("/friends", function(req, res) {
	res.send(friend.api);
	
});


router.post("/friends", function(req, res){
	var name = "Fermi"
	var answers = [req.body.q1,req.body.q2,req.body.q3]
	var fermi = new friend.Friend(name, answers)
	console.log(fermi)
	res.redirect('/')
});


// // Export routes for server.js to use.
module.exports = router;