function onLoad() {
    const token = localStorage.getItem('token');

    if (token) {
        window.location.assign('/dashboard');
    }
}

async function loginUser(event) {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim().toLowerCase();
    const password = document.querySelector('#password-login').value.trim();

    await axios.post(`/api/users/${username}`, {
        username: username,
        userPassword: password
    })
        .then((token) => {
            if (token) {
                localStorage.setItem('token', token.data);
                window.location.assign('/dashboard');
            } else {
                alert('Your username or password is incorrect. Please try again.');
            }
        })

    // TODO: check user information and compare to inputted data
}

const submit = document.querySelector('#login-btn');
submit.addEventListener('click', loginUser);
document.addEventListener("DOMContentLoaded", onLoad);