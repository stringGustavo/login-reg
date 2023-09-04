let btn = document.getElementById('login-button');
let test = document.getElementById('test');

function redirecionarLogin () {

    let user = document.querySelector('#user').value;
    let pass = document.querySelector('#pass').value;

    if (user == "admin" && pass == "pass") {

        window.location.pathname = "/pages/home.html";

    } else {

        
    }
 
}

btn.addEventListener('click', redirecionarLogin);