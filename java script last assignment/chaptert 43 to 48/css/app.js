// Function for Assignment 1 (index)
function show() {
    alert(" Realme Mobile\n\nThank You For purchasing\n\nPrice: 25000\n");
}


// Function for Assignment 2 (index 2)
function example(eId1, eId2) {
    document.getElementById(eId1).innerHTML = '';
    document.getElementById(eId2).style.visibility = 'hidden';
}

// Function for Assignment 3 (Index 3)
var count=0;
function increase() {
    count += 1;
    document.getElementById('show').innerHTML = count;
}
function decrease() {
    count -= 1;
    document.getElementById('show').innerHTML = count;
}
