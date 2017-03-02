var firstBtn = document.getElementById("first-button");
var midBlock = document.querySelector('.the-middle');


firstBtn.addEventListener("click", function () {
	console.log("button pressed");
} );

midBlock.addEventListener("click", function (e) {
	var child = midBlock.firstChild;


	var node = document.createElement("LI");
	var textNode = document.createTextNode(e.target.textContent);
	node.appendChild(textNode);
	document.getElementById("my-list").appendChild(node);


	var totalList = document.getElementById("my-list").getElementsByTagName("li").length;
	document.getElementById("len-total").textContent = totalList;
	console.log("Length of my-list: " + totalList );

});