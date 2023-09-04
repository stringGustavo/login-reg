let regUserErrorMessage = document.getElementById('user-error');
let regEmailErrorMessage = document.getElementById('email-error');
let regPassErrorMessage = document.getElementById('pass-error');
let regPassConfirmErrorMessage = document.getElementById('pass-confirm-error');
let formStatus = document.getElementById('form-status');
let btn = document.getElementById('reg-button');

function validarUsuario() {

    let user = document.getElementById('user').value;

    let validUser = false;

    for (let i = 0; i < user.length; i++) {

        if (user.charAt(i) != " " && user.length >= 4) {

            validUser = true;

        } else {

            validUser = false;
            break;
        }
    }

    if (validUser) {

        regUserErrorMessage.innerHTML = `<span style="color: #00ff00; font-size: 15px">Usuário válido</span>`;

        return true;

    } else {

        regUserErrorMessage.innerHTML = `<span style="color: #ffa500; font-size: 15px">Usuário inválido</span>`;
        return false;
    }
}

function validarEmail() {

    let email = document.getElementById('email').value;

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {

        regEmailErrorMessage.innerHTML = `<span style="color: #00ff00; font-size: 15px">E-mail válido</span>`;

        return true;

    } else {

        regEmailErrorMessage.innerHTML = `<span style="color: #ffa500; font-size: 15px">E-mail inválido</span>`;

        return false;
    }
}

function validarSenha() {

    let password = document.getElementById('pass').value;

    if (password.length > 10) {

        regPassErrorMessage.innerHTML = `<span style="color: #00ff00; font-size: 15px">Senha Ok</span>`;

        return true;

    } else {

        regPassErrorMessage.innerHTML = `<span style="color: #ffa500; font-size: 15px">Senha muito pequena</span>`;

        return false;
    }
}

function confirmarSenha() {

    let password = document.getElementById('pass').value;
    let confirmPass = document.getElementById('confirm-pass').value;

    if (password === confirmPass && password.length > 10) {

        regPassConfirmErrorMessage.innerHTML = `<span style="color: #00ff00; font-size: 15px">Senha Ok<span>`

        return true;

    } else {

        regPassConfirmErrorMessage.innerHTML = `<span style="color: #ffa500; font-size: 15px">Senha inválida</span>`;

        return false;
    }
}

function validarCampos() {

    if (validarUsuario() && validarEmail() && validarSenha() && confirmarSenha()) {

        formStatus.innerHTML = `<span style="color: #00ff00; font-size: 15px;">Cadastrado<span>`;

    } else {

        formStatus.innerHTML = `<span style="color: #ffa500; font-size: 15px;">Cadastro inválido<span>`;
    }
}

btn.addEventListener('click', validarCampos);