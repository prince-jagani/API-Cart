var f_user, f_mail, f_pass;
var mainForm;
isValid = {
    user: false,
    mail: false,
    pass: false,
}
document.head.innerHTML += `
<style>@import url(https://fonts.googleapis.com/css?family=Poppins);html{background-color:#56baed}body{font-family:Poppins,sans-serif;height:100vh}a{color:#92badd;display:inline-block;text-decoration:none;font-weight:400}h2{text-align:center;font-size:16px;font-weight:600;text-transform:uppercase;display:inline-block;margin:40px 8px 10px 8px;color:#ccc;cursor:pointer}.wrapper{display:flex;align-items:center;flex-direction:column;justify-content:center;width:100%;min-height:100%;padding:20px}#formContent{-webkit-border-radius:10px 10px 10px 10px;border-radius:10px 10px 10px 10px;background:#fff;padding:30px;width:90%;max-width:450px;position:relative;padding:0;-webkit-box-shadow:0 30px 60px 0 rgba(0,0,0,.3);box-shadow:0 30px 60px 0 rgba(0,0,0,.3);text-align:center}#formFooter{background-color:#f6f6f6;border-top:1px solid #dce8f1;padding:25px;text-align:center;-webkit-border-radius:0 0 10px 10px;border-radius:0 0 10px 10px}#main-form{margin-top:10%;height:220px;transition:.5s}h2.inactive{color:#ccc}h2.active{color:#0d0d0d;border-bottom:2px solid #5fbae9}input[type=button],input[type=reset],input[type=submit]{background-color:#56baed;border:none;color:#fff;padding:15px 80px;text-align:center;text-decoration:none;display:inline-block;text-transform:uppercase;font-size:13px;cursor:pointer;-webkit-box-shadow:0 10px 30px 0 rgba(95,186,233,.4);box-shadow:0 10px 30px 0 rgba(95,186,233,.4);-webkit-border-radius:5px 5px 5px 5px;border-radius:5px 5px 5px 5px;margin:5px 20px 40px 20px;-webkit-transition:all .3s ease-in-out;-moz-transition:all .3s ease-in-out;-ms-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;transition:all .3s ease-in-out}input[type=button]:hover,input[type=reset]:hover,input[type=submit]:hover{background-color:#39ace7}input[type=button]:active,input[type=reset]:active,input[type=submit]:active{-moz-transform:scale(.95);-webkit-transform:scale(.95);-o-transform:scale(.95);-ms-transform:scale(.95);transform:scale(.95)}input{background-color:#f6f6f6;border:none;color:#0d0d0d;padding:15px 32px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:5px;width:85%;border:2px solid #f6f6f6;-webkit-transition:all .5s ease-in-out;-moz-transition:all .5s ease-in-out;-ms-transition:all .5s ease-in-out;-o-transition:all .5s ease-in-out;transition:all .5s ease-in-out;-webkit-border-radius:5px 5px 5px 5px;border-radius:5px 5px 5px 5px}input:focus{background-color:#fff;border-bottom:2px solid #5fbae9}input:placeholder{color:#ccc}.invalid{border-bottom:2px solid #e95f5f!important}.inval-pass{border-bottom:2px solid #e9c95f!important}.valid_{border-bottom:2px solid #6fe95f!important}.fadeInDown{-webkit-animation-name:fadeInDown;animation-name:fadeInDown;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}@-webkit-keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}100%{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}100%{opacity:1;-webkit-transform:none;transform:none}}@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@-moz-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.fadeIn{opacity:0;-webkit-animation:fadeIn ease-in 1;-moz-animation:fadeIn ease-in 1;animation:fadeIn ease-in 1;-webkit-animation-fill-mode:forwards;-moz-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-duration:1s;-moz-animation-duration:1s;animation-duration:1s}.fadeIn.first{-webkit-animation-delay:.4s;-moz-animation-delay:.4s;animation-delay:.4s}.fadeIn.second{-webkit-animation-delay:.6s;-moz-animation-delay:.6s;animation-delay:.6s}.fadeIn.third{-webkit-animation-delay:.8s;-moz-animation-delay:.8s;animation-delay:.8s}.fadeIn.fourth{-webkit-animation-delay:1s;-moz-animation-delay:1s;animation-delay:1s}.underlineHover:after{display:block;left:0;bottom:-10px;width:0;height:2px;background-color:#56baed;content:"";transition:width .2s}.underlineHover:hover{color:#0d0d0d}.underlineHover:hover:after{width:100%}:focus{outline:0}#icon{width:60%}*{box-sizing:border-box}<style>`;
initializeForm();
function loginType(type) {
    if(type == 'login') {
        mainForm.innerHTML = `<input type="email" id="email" class="fadeIn first" name="loginid" placeholder="Enter Email">
        <input type="password" id="password" class="fadeIn second" name="loginpass" placeholder="Enter Password">
        <input type="submit" class="fadeIn forth" value="Log In">`;
        document.getElementById('loginBtn').className = 'active'
        document.getElementById('signupBtn').className = 'inactive underlineHover'
        mainForm.style.height = 220+'px';
    }
    else {
        mainForm.innerHTML = `<input type="email" id="email" class="fadeIn first" name="loginid" placeholder="Enter Email">
        <input type="password" id="password" class="fadeIn second" name="loginpass" placeholder="Enter Password">
        <input type="text" id="username" class="fadeIn first" name="loginuser" placeholder="Select Username">
        <input type="submit" class="fadeIn forth" value="Register">`;
        document.getElementById('loginBtn').className = 'inactive underlineHover'
        document.getElementById('signupBtn').className = 'active'
        mainForm.style.height = 300+'px';
    }
    setupFields()
}

function setupFields() {
    f_user = document.getElementById('username');
    f_mail = document.getElementById('email');
    f_pass = document.getElementById('password');
    
    if (f_user) f_user.addEventListener('input', valUser);
    f_mail.addEventListener('input', valMail);
    f_pass.addEventListener('input', valPass);

    valMail();
    valPass();
    if(f_user) valUser();
}
        
function valUser() {
    var user = f_user.value;
    if(user == null || user == '') {
        f_user.className = 'fadeIn third'
        f_user.setCustomValidity('Username cannot be empty!');
        isValid.user = false;
    }
    else if (!user.includes(' ')) {
        f_user.className = 'fadeIn third valid_';
        f_user.setCustomValidity('');
        isValid.user = true;
    }
    else {
        f_user.className = 'fadeIn third invalid';
        f_user.setCustomValidity('Invalid Username! Unsername should not contain space');
        isValid.user = false;
    }
}
function valMail() {
    var mail = f_mail.value;
    if(mail == null || mail == '') {
        f_mail.className = 'fadeIn first';
        f_mail.setCustomValidity('Email address cannot be empty!')
        isValid.mail = false;
    }
    else if (/\S+@\S+\.\S+/.test(mail)) {
        f_mail.className = 'fadeIn first valid_';
        f_mail.setCustomValidity('')
        isValid.mail = true;
    }
    else {
        f_mail.className = 'fadeIn first invalid';
        f_mail.setCustomValidity('Invalid Email Adress! Try (example@domain.com)')
        isValid.mail = false;
    }
    console.log(/\S+@\S+\.\S+/.test(mail) + f_mail.className);
}
function valPass() {
    var pass = f_pass.value;
    if(pass == null || pass == '') {
        f_pass.className = 'fadeIn second';
        f_pass.setCustomValidity('Password cannot be empty!');
    }
    else if (/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{10,})(?=.*[~`!@#$%^&*()--+={}[|\:;"'<>,.?/_₹])/.test(pass)) {
        f_pass.className = 'fadeIn second valid_';
        isValid.pass = true;
        f_pass.setCustomValidity('');
    } else if (/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{7,})/.test(pass)) {
                console.log('midium')
        f_pass.className = 'fadeIn second inval-pass';
        isValid.pass = false;
        f_pass.setCustomValidity('Invalid Password! Password must have at least one uppercase, lowercase, number and special character');
    }
    else {
        f_pass.className = 'fadeIn second invalid';
        isValid.pass = false;
        f_pass.setCustomValidity('Invalid Password! Password must have at least one uppercase, lowercase, number and special character');
    }
}

function validateForm() {
    valMail();
    valPass();
    if(f_user) {
        valUser();
        return (isValid.user && isValid.mail && isValid.pass);
    }
    return (isValid.mail && isValid.pass);
}
function initializeForm() {
    document.body.innerHTML = `
    <div class="wrapper fadeInDown">
        <div id="formContent">
        <h2 id="loginBtn" class="active" onclick="loginType('login')"> Sign In </h2>
        <h2 id="signupBtn" class="inactive underlineHover" onclick="loginType('signup')">Sign Up </h2>
        <form id="main-form" method="post" onsubmit="return validateForm()" action="/login">
        </form><div id="formFooter">
        <a class="underlineHover" href="">Forgot Password?</a></div></div></div>`;
        mainForm = document.getElementById('main-form');
        loginType('login');
    setupFields();
}