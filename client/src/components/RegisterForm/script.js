const registerFormHandler = async (event) => {
    event.preventDefault();

    const userName = document.querySelector('#register-username').value.trim();
    const password = document.querySelector('#register-password').value.trim();

    if (userName && password) {
        const response = await fetch('/api/User',{
            method:'POST',
            body: JSON.stringify({userName,password}),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.register-form').addEventListener('submit', registerFormHandler);