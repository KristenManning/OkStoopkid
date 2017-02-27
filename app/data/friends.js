Friend = function(name, answers, all_friends){
	this.name = name;
	this.answers = answers; 
	this.compare = function(){
		console.log("comparing")
		};
	this.add_to_all_friends = function(){
		console.log("adding to all friends " + all_friends[0])
		};
	this.top_friend = "";
};

kristen = {
	name: "Kristen",
	answers: [1,1,2,3,4,5,4,3,2,1],
	compare: function(){
		console.log("comparing")
		},
	add_to_all_friends: function(){
		console.log("adding to all friends " + all_friends[0])
		}

}

frankie = {
	name: "Kristen",
	answers: [1,1,2,3,4,5,4,3,2,1],
	compare: function(){
		console.log("comparing")
		},
	add_to_all_friends: function(){
		console.log("adding to all friends " + all_friends[0])
		}

}

all_friends = [kristen, frankie]

module.exports = {
    Friend: Friend,
    all_friends: all_friends
}