function getData() {
    document.getElementById('data-Div').className += " show";
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var year = document.getElementById('year').value;
    var month = document.getElementById('month').value;
    var date = document.getElementById('date').value;
    var mobile = document.getElementById('mobile').value;

    document.getElementById('showName').innerHTML = name;
    document.getElementById('showEmail').innerHTML = email;
    document.getElementById('showYear').innerHTML = year;
    document.getElementById('showMonth').innerHTML = month;
    document.getElementById('showDate').innerHTML = date;
    document.getElementById('showMobile').innerHTML = mobile;
}