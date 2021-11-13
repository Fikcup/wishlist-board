const { axios } = require('axios');
require('dotenv').config();

async function loginUser(event) {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim().toLowerCase();
    const password = document.querySelector('#password-login').value.trim();

    const loginRequest = {
        username: username,
        userPassword: password
    };

    await axios.get(`/api/users/:${loginRequest.username}`);
}

const submit = document.querySelector('#login-btn');
submit.addEventListener('click', loginUser);