const loginForm = document.querySelector("#login-form");
const loginInput = docment.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function onLoginSubmit(event) {
    event.preventDefault();
    const email = loginInput.value;
    paintGreetings(email);
}