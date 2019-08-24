var button = document.getElementById("enter");
var clear = document.getElementById("clear");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list=document.querySelectorAll("li");
var dell=document.querySelectorAll(".div");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var de= document.createElement("div");
	var dot= document.createElement("div");
	var liDiv= document.createElement("div");
	li.appendChild(document.createTextNode(input.value));
	de.className="div";
	dot.className="dot";
	liDiv.className="li-wrapper";
	ul.appendChild(liDiv);
	liDiv.appendChild(dot);
	liDiv.appendChild(li)
	liDiv.appendChild(de);
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
	// but.path[1].innerHTML="";
	// but.path[1].style.listStyleType="none";
	
	dele(but.path[0]);
}
function dele( button1 ){
	button1.parentNode.remove();
}

list.forEach(function(cu){
	
	cu.addEventListener("click",toggles);
	
});
dell.forEach(function(cu){
	cu.addEventListener("click",Delete);
	
}) ;

function clean(li){
	var re=li.path[1].children[4].children[0].children[0];
	re.innerHTML="";
	// re.forEach(function(rev){
	// 	rev.remove();
	// });
	// li.path[1].children[4].children[0].children[0].children.remove();
	// console.log(re);
}
//  {
// 	list[i].addEventListener("click",toggles);
// 	dell[i].addEventListener("click",Delete);
// }

button.addEventListener("click", addListAfterClick);
clear.addEventListener("click", clean);
input.addEventListener("keypress", addListAfterKeypress);