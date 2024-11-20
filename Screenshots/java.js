
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const signInForm = document.getElementById('signIn');
const signUpForm = document.getElementById('signup');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password_input');
const repeat_password_input = document.getElementById('repeat_password_input');
const error_message = document.getElementById('error-message');

if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove('active');
    });
}

    
