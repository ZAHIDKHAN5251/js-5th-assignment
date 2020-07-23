// Function for Update Button
function update(eId1, eId3, eId4) {
    var c = document.getElementById('show-text').value;
    document.getElementById(eId1).innerText = c;
    document.getElementById(eId3).className += "update-btn";
    document.getElementById(eId4).className += "update-section";
    document.getElementById('span').className += " alert";
    document.getElementById('span').className += " show-this";
    document.getElementById('span').innerHTML = "Update suceesfully"
}

// Function for delete Button 
function dle(abc) {
    document.getElementById(abc).innerHTML = "";
    document.getElementById('span').className += " alert";
    var element = document.getElementById('span');
    element.classList.remove("alert-success");
    document.getElementById('span').className += " alert-danger";
    document.getElementById('span').innerHTML = "Deleted Successfully";
}

// function for edit Button
function edit(eId, eId2) {
    document.getElementById('update-part').className += " show-this";
    document.getElementById(eId).className += " show-this";
    var a = document.getElementById(eId2).innerText;
    document.getElementById('show-text').value = a;
    document.getElementById('span').innerHTML = "";
    var ele = document.getElementById('span');
    ele.classList.remove("alert");
}