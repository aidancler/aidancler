//1,2
var anything = document.querySelector("h1.first");
anything.innerHTML = "<b><i>This is the first line of the web page.</i></b>";

//3
var listItems = document.getElementsByTagName("li");
var ref = listItems[0].parentNode;
//4
//5
ref.setAttribute("class", "first");

//6
var myItem = document.createElement("li");
//7
var myLi = document.createTextNode("any brief text in the text node.");
myItem.appendChild(myLi);
ref.appendChild(myItem);
