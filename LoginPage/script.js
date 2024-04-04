var answer = document.querySelector(".presult");
var loginButton = document.querySelector(".login");
var headername = document.querySelector(".localuser");

window.onload = function () {
    var localname = localStorage.getItem('Username');
    if (localname) {
        headername.innerText = "Bienvenido, " + localname;
    }
};

loginButton.onclick = function () {
    var user = document.querySelector(".username").value;
    var password = document.querySelector(".password").value;
    var checkbox = document.querySelector(".check").checked;

    answer.innerText = "Sesión iniciada con éxito";

    if (checkbox) {
        localStorage.setItem('Username', user);

        var localname = localStorage.getItem('Username');

        headername.innerText = "Bienvenido, " + localname;
    } else {
        headername.innerText = "Bienvenido, " + user;
    }
};