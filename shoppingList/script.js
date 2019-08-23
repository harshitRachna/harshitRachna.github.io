var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list=document.querySelectorAll("li");
var dell=document.querySelectorAll(".del");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var de= document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	de.appendChild(document.createTextNode("Delete"));

	ul.appendChild(li);
	li.appendChild(de);
	li.addEventListener("click",toggles);
 	de.addEventListener("click",Delete);
	input.value = "";

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}
function toggles( lists ){
	if (lists.target.innerHTML!=="Delete") {
		lists.target.classList.toggle("done");
	}
	
	// console.log(lists.target.innerHTML);
}
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
function Delete( but ){
	but.path[1].innerHTML="";
	but.path[1].style.listStyleType="none";
	console.log(but.path[1]);
}

list.forEach(function(cu){
	
	cu.addEventListener("click",toggles);
	
});
dell.forEach(function(cu){
	cu.addEventListener("click",Delete);
	
}) ;

//  {
// 	list[i].addEventListener("click",toggles);
// 	dell[i].addEventListener("click",Delete);
// }

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);