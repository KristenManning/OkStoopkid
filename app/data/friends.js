Friend = function(name, answers, all_friends){
	this.name = name;
	this.answers = answers; 
	this.compare = function(){
		console.log("comparing")
		};
	this.add_to_all_friends = function(){
		console.log("adding to all friends " + all_friends[0])
		};
};

kristen = {
	name: "Kristen",
	answers: [0,1,2,3,4],
	compare: function(){
		console.log("comparing")
		},
	add_to_all_friends: function(){
		console.log("adding to all friends " + all_friends[0])
		}

}

all_friends = [kristen]

module.exports = {
    Friend: Friend,
    all_friends
}