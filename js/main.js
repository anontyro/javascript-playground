var firstBtn = document.getElementById("first-button");
var midBlock = document.querySelector('.the-middle');


firstBtn.addEventListener("click", function () {
	console.log("button pressed");
} );

midBlock.addEventListener("click", function (e) {
	var child = midBlock.firstChild;
	console.log(e);
	// while(child != )
});