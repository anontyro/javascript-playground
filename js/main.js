//and ineligant way of setting the list length at the start regardless of what is written prior
document.getElementById("len-total").textContent = document.getElementById("my-list").getElementsByTagName("li").length;

//VARIABLE LIST
var firstBtn = document.getElementById("first-button");
var midBlock = document.querySelector('.the-middle');
var higherGameBtn = document.getElementById("higher-game");
var lowerGameBtn = document.getElementById("lower-game");
var rand = 0;
var guess = 0;

//Simple EventListner
firstBtn.addEventListener("click", function () {
	console.log("button pressed");
} );

//Block event Listener that will pull the elements value and add it as a li item to the ul my-list
midBlock.addEventListener("click", function (e) {
	var child = midBlock.firstChild; //not used but pulls first child


	var node = document.createElement("LI"); //adds a new <li> node
	var textNode = document.createTextNode(e.target.textContent); //creates a text node using the data from the button
	node.appendChild(textNode); //add the text to the <li>
	document.getElementById("my-list").appendChild(node); //add the new <li> to the <ul> my-list


	var totalList = document.getElementById("my-list").getElementsByTagName("li").length; //grab the total <li> in the <ul>
	document.getElementById("len-total").textContent = totalList; //add the total to the page
	console.log("Length of my-list: " + totalList ); //output total to console also

});
//generate random number method that takes in the mutlipul to use
//rounds to floor everytime
function generateRand(multi) {
	var num = Math.random()*multi+1;
	num = Math.floor(num);
	return num;
}

//setup the game
function setupHigherLowerGame() {
	rand = generateRand(100);
	console.log("number is: " +rand);
}

//higher lower outcomes and what happens
higherGameBtn.addEventListener("click", function () {
	var inputVal = document.getElementById("higher-game-guess").value;
	if(inputVal < rand){
		console.log("try higher");
		document.getElementById("higher-game-feedback").textContent ="try Higher";
	}else if(inputVal > rand){
		console.log("try lower");
		document.getElementById("higher-game-feedback").textContent ="try Lower";
	}else{
		console.log("winner");
		document.getElementById("higher-game-feedback").textContent ="Winner";

	}
})