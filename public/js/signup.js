async function newUser(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim().toLowerCase();
    const password = document.querySelector('#password-signup').value.trim();
    const firstName = document.querySelector('#first-name-signup').value.trim();
    const lastName = document.querySelector('#last-name-signup').value.trim();

    const signupRequest = {
        username: username,
        userPassword: password,
        userFirst: firstName,
        userLast: lastName
    };

    const response = await fetch(`/api/users`, {
        method: 'POST',
        body: JSON.stringify(signupRequest),
        headers: { 'Content-Type': 'application/json'}
    })

    if (response.ok) {
        document.location.replace('/dashboard');
    }
}

const submit = document.querySelector('#signup-btn');
submit.addEventListener('click', newUser);