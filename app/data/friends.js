Friend = function(name, photo, answers){
	this.name = name;
	this.photo = photo; 
	this.answers = answers; 
	this.hi = function(){
		console.log("HI")
	};
	this.compare = function(friend){
		var dif = 0 
		for (var a = 0; a < this.answers.length; a++) {
			dif += Math.abs(this.answers[a] - friend.answers[a])
		}
		return dif 
		}
};

kristen = {
	name: "Kristen",
	photo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
	answers: [1,2,2,3,4,5,4,3,2,2]
}

frankie = {
	name: "Frankie",
	photo: "https://wallpaperbrowse.com/static/pixadb/assets/img/logo.png",
	answers: [1,1,2,2,3,3,4,4,5,5]
}

kristen = {
	name: "Kristen",
	photo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
	answers: [5,5,4,4,3,3,2,2,1,1]
}

frankie = {
	name: "Frankie",
	photo: "https://wallpaperbrowse.com/static/pixadb/assets/img/logo.png",
	answers: [1,1,2,3,4,5,4,3,2,1]
}

kristen = {
	name: "Kristen",
	photo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
	answers: [1,1,2,3,4,5,4,3,2,1]
}

frankie = {
	name: "Frankie",
	photo: "https://wallpaperbrowse.com/static/pixadb/assets/img/logo.png",
	answers: [1,1,2,3,4,5,4,3,2,1]
}

all_friends = [kristen, frankie]

module.exports = {
    Friend: Friend,
    all_friends: all_friends
}