async function newUser(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim().toLowerCase();
    const password = document.querySelector('#password-signup').value.trim();
    const firstName = document.querySelector('#first-name-signup').value.trim();
    const lastName = document.querySelector('#last-name-signup').value.trim();

    await axios.post(`/api/users`, {
        username: username,
        userPassword: password,
        userFirst: firstName,
        userLast: lastName
    })
        .then((token) => {
            if (token) {
                localStorage.setItem('token', token.data);
                window.location.assign('/dashboard');
            } else {
                alert('Your form data is incorrect. Please resubmit.');
            }
        });
}

const submit = document.querySelector('#signup-btn');
submit.addEventListener('click', newUser);