var answer = document.querySelector(".presult");
var loginButton = document.querySelector(".login");
var headername = document.querySelector(".localuser");

loginButton.onclick = function () {
    var user = document.querySelector(".username").value;
    var password = document.querySelector(".password").value;
    var confirmPassword = document.querySelector(".password2").value;
    var checkbox = document.querySelector(".check").checked;

    if (password !== confirmPassword) {
        answer.innerText = "Las contraseñas no coinciden";
        return;
    }

    answer.innerText = "Registro producido con éxito";

    if (checkbox) {
        if (localStorage.getItem('Username')) {
            answer.innerText = "El nombre de usuario ya está en uso";
            return;
        }

        localStorage.setItem('Username', user);

    } else {
        headername.innerText = "Bienvenido, " + user;
    }
};