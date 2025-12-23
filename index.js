

document.addEventListener("DOMContentLoaded", function() {

    
    const signupEmailInput = document.getElementById("signup-email");
    const signupNicknameInput = document.getElementById("signup-nickname");
    const signupPasswordInput = document.getElementById("signup-password");
    const signupPasswordCheckInput = document.getElementById("signup-password-check");
    
    const passwordView = document.querySelectorAll(".password-toggle");
    const loginButton = document.getElementById('btn-login');
    const signupButton = document.getElementById('btn-signup');

    passwordView.forEach(function(button){
        button.addEventListener('click', function(e){
            e.preventDefault();

            const passwordWrap = button.closest('.password-wrap');
            const input = passwordWrap.querySelector('input');

            button.classList.add('active');
            input.type = 'text';

            setTimeout(function(){
                input.type = 'password';
                button.classList.remove('active');
            }, 1000);
        });
    });
    // signup form elements
    if (signupButton) {
        const validity = {
            email: false,
            nickname: false,
            password: false,
            passwordCheck: false,
        };

        

        signupEmailInput.addEventListener("focusout", function(event) {
            const eventTarget = event.currentTarget;
            const noti = eventTarget.parentElement.querySelector('.noti');
            if (signupEmailInput.value == ''){
                noti.innerText = "이메일을 입력해주세요.";
                eventTarget.style.border = "1px solid #F74747";
                validity.email = false;
            } else if (!signupEmailInput.value.includes("@"))  {
                noti.innerText = "잘못된 이메일 형식입니다";
                eventTarget.style.border = "1px solid #F74747";
                validity.email = false;
            } else {
                noti.innerText = "";
                eventTarget.style.border = "1px solid transparent";
                validity.email = true;
            }   
            checkSignupAvailable()
        });

        signupEmailInput.addEventListener("keydown", function(event) {
            const eventTarget = event.currentTarget;
            const noti = eventTarget.parentElement.parentElement.querySelector('.noti');
            if (signupEmailInput.value.includes("@")){
                noti.innerText = "";
                checkSignupAvailable()
            }
        });


        signupNicknameInput.addEventListener("focusout", function(event) {
            const eventTarget = event.currentTarget;
            const noti = eventTarget.parentElement.querySelector('.noti');

            if (signupNicknameInput.value == ''){
                noti.innerText = "닉네임을 입력해주세요.";
                eventTarget.style.border = "1px solid #F74747";
                validity.nickname = false;
            } else {
                noti.innerText = "";
                eventTarget.style.border = "1px solid #3692FF";
                validity.nickname = true;
            } 
            checkSignupAvailable()  
        });

        signupPasswordInput.addEventListener("focusout", function(event) {
            const eventTarget = event.currentTarget;
            const noti = eventTarget.parentElement.parentElement.querySelector('.noti');
            if (signupPasswordInput.value == ''){
                noti.innerText = "비밀번호를 입력해주세요.";
                eventTarget.style.border = "1px solid #F74747";
                validity.password = false;
            } else if (signupPasswordInput.value.length < 8){
                noti.innerText = "비밀번호를 8자 이상 입력해주세요";
                eventTarget.style.border = "1px solid #F74747";
                validity.password = false;
            } else {
                noti.innerText = "";
                eventTarget.style.border = "1px solid transparent";
                validity.password = true;
            }
            checkSignupAvailable()
        });

        signupPasswordInput.addEventListener("keydown", function(event) {
            const eventTarget = event.currentTarget;
            const noti = eventTarget.parentElement.parentElement.querySelector('.noti');
            if (signupPasswordInput.value.length >= 8){
                noti.innerText = "";
                validity.password = true;
                checkSignupAvailable()
            }
        });

        signupPasswordCheckInput.addEventListener("input",function(){
            const targetVelue = signupPasswordCheckInput.value;
            const passwordquery = signupPasswordInput.value;
            const noti = signupPasswordCheckInput.parentElement.parentElement.querySelector('.noti');

            if (targetVelue !== passwordquery){
                noti.innerText = "비밀번호가 일치하지 않습니다";
                signupPasswordCheckInput.style.border = "1px solid #F74747";
                validity.passwordCheck = false;
            } else {
                noti.innerText = "";
                signupPasswordCheckInput.style.border = "1px solid transparent";
                validity.passwordCheck = true;
            }
            checkSignupAvailable()
        });

        function checkSignupAvailable() {
        const someReturn = Object.values(validity).every((el) => {
            return el;
        });
        if (someReturn) {
            signupButton.removeAttribute('disabled');
        } else {
            signupButton.setAttribute('disabled', true);
        }
    };
    }

    // login form elements
    if (loginButton) {
        const validity = {
            email: false,
            password: false,
        };

        const loginEmailInput = document.getElementById("login-email");
        const loginPasswordInput = document.getElementById("login-password");

        loginEmailInput.addEventListener("focusout", function(event) {
            const eventTarget = event.currentTarget;
            const noti = eventTarget.parentElement.querySelector('.noti');
            if (loginEmailInput.value == ''){
                noti.innerText = "이메일을 입력해주세요.";
                eventTarget.style.border = "1px solid #F74747";
                validity.email = false;
                checkSignupAvailable()
            } else if (!loginEmailInput.value.includes("@"))  {
                noti.innerText = "잘못된 이메일 형식입니다";
                eventTarget.style.border = "1px solid #F74747";
                validity.email = false;
                checkSignupAvailable()
            } else {
                noti.innerText = "";
                eventTarget.style.border = "1px solid transparent";
                validity.email = true;
                checkSignupAvailable()
            }   
        });
        loginEmailInput.addEventListener("keydown", function(event) {
            const eventTarget = event.currentTarget;
            const noti = eventTarget.parentElement.parentElement.querySelector('.noti');
            if (loginEmailInput.value.includes("@")){
                noti.innerText = "";
                checkSignupAvailable()
            }
        });

        loginPasswordInput.addEventListener("focusout", function(event) {
            const eventTarget = event.currentTarget;
            const noti = eventTarget.parentElement.parentElement.querySelector('.noti');
            if (loginPasswordInput.value == ''){
                noti.innerText = "비밀번호를 입력해주세요.";
                eventTarget.style.border = "1px solid #F74747";
                validity.password = false;
            } else if (loginPasswordInput.value.length < 8){
                noti.innerText = "비밀번호를 8자 이상 입력해주세요";
                eventTarget.style.border = "1px solid #F74747";
                validity.password = false;
            } else {
                noti.innerText = "";
                eventTarget.style.border = "1px solid transparent";
                validity.password = true;
            }
            checkSignupAvailable()
        });

        loginPasswordInput.addEventListener("keydown", function(event) {
            const eventTarget = event.currentTarget;
            const noti = eventTarget.parentElement.parentElement.querySelector('.noti');
            if (loginPasswordInput.value.length >= 8){
                noti.innerText = "";
                validity.password = true;
                checkSignupAvailable();
            }
        });

        function checkSignupAvailable() {
        const someReturn = Object.values(validity).every((el) => {
            return el;
        });
        if (someReturn) {
            loginButton.removeAttribute('disabled');
        } else {
            loginButton.setAttribute('disabled', true);
        }
    };
    }
    
});