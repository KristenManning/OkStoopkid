Friend = function(name, photo, answers){
	this.name = name;
	this.photo = photo; 
	this.answers = answers; 
};

Arnold = {
	name: "Arnold",
	photo: "http://vignette3.wikia.nocookie.net/heyarnold/images/f/f6/Arnold.jpg/revision/latest/scale-to-width-down/200?cb=20140706192844",
	answers: [1,2,2,3,4,5,4,3,2,2]
}

Harold = {
	name: "Harold",
	photo: "http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/harold-berman-hey-arnold-the-movie-8.45.jpg",
	answers: [1,1,2,2,3,3,4,4,5,5]
}

Reggie = {
	name: "Reggie",
	photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxWs-WC8AUP_x5-6HmeGPrQ8u900z0JerwmAG0lhkF7-SjKfism_zCOg",
	answers: [5,5,4,4,3,3,2,2,1,1]
}

Eliza = {
	name: "Eliza",
	photo: "http://vignette3.wikia.nocookie.net/poohadventures/images/f/f5/Eliza_Thornberry.jpg/revision/latest?cb=20130421050028",
	answers: [1,5,2,4,3,1,5,2,4,3]
}


all_friends = [Arnold, Harold, Reggie, Eliza]

module.exports = {
    Friend: Friend,
    all_friends: all_friends
}