const mainForm = document.getElementById('main-form');
var f_user, f_mail, f_pass;

isValid = {
    user: false,
    mail: false,
    pass: false,
}

setupFields();
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