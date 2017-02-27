var express = require("express");

var router = express.Router();

var friend = require('../data/friends.js')

// Create all our routes and set up logic within those routes where required.
router.get("/friends", function(req, res) {
	res.json(friend.all_friends);
	
});


router.post("/friends", function(req, res){
	var answers = [req.body.q1,req.body.q2,req.body.q3,req.body.q4,req.body.q5,req.body.q6,req.body.q7,req.body.q8,req.body.q9,req.body.q10]
	friend.all_friends.push(new friend.Friend(req.body.name, req.body.photo, answers))
});


// // Export routes for server.js to use.
module.exports = router;