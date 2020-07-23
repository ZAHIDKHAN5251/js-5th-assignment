//i. Get element of id “main-content” and assign them in a variable. 
//ii. Display all child elements of “main-content” element. 

let a = document.getElementById("main-content").innerHTML; 
document.write(a);

//iii. Get all elements of class “render” and show their innerHTML in browser.
// function myRender{
// 	var b = document.getElementsByClassName('render');
// 	document.write(b)

// }

//iv. Fill input value whose element id first-name using javascript. v. Repeat part iv for id ”last-name” and “email”.
function myFunction(){
document.getElementById('biodata').innerHTML = "<h4>Fill input value whose element id first-name, last-name, email using javascript</h4>";
var c = document.getElementById('first-name').value = "RAO";
var c = document.getElementById('last-name').value = "ABDUL RAHEEM";
var c = document.getElementById('email').value = "raoabdulraheem000@gmail.com";

}

// QUESTION NUMB 2: use HTML code of question 1 and  show the result on browser. 
//i. What is node type of  element having id “form-content”.
function myFunc() {
var x = document.getElementById("form-content").nodeType;
document.getElementById("demo").innerHTML = " node type of  element having id “form-content” is : "+x;
document.getElementById("para").innerHTML;
}

//ii. Show node type of element having id “lastName” and its child node. 

function myFun() {
var y = document.getElementById("last-name").nodeType;
document.getElementById("demo1").innerHTML = " node type of  element having id “LAST-NAME” is : "+y;
document.getElementById("para1").innerHTML;
var z = document.getElementById("nodElement").childNodes;
document.getElementById("demo1").innerHTML ="......"+z;

}

//iii. Update child node of element having id “lastName”.
function myUpdate() {
var textnode = document.createTextNode("nodElement");
var item = document.getElementById("nodElement").childNodes[0];
item.replaceChild(textnode, item.childNodes[0]);
document.getElementById("demo2").innerHTML = " node type of  element having id “LAST-NAME” is : "+item;
}

function myFirstLast(){
document.getElementById("para4").innerHTML;
var s = document.getElementById("main-content").firstElementChild.innerHTML;
document.write(s);
var n = document.getElementById("main-content").lastElementChild;
document.write(n);
}

// document.getElementById("demo3").innerHTML = " node type of  element having id “LAST-NAME” is : "+s;