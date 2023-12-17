function login() {
    const usernameOrEmail = document.getElementById('username').value;
    const password = document.getElementById('pass').value;

    if (!usernameOrEmail || !password) {
        alert("Please enter both username/email and password.");
        return;
    }

    const formData = {
        usernameOrEmail: usernameOrEmail,
        password: password
    };

    const Url = 'https://mock-api-template-cw-4.onrender.com/users';
    fetch(Url)
        .then(response => response.json())
        .then(data => {
            const user = data.find(u => (u.id === usernameOrEmail || u.email === usernameOrEmail) && u.password === password);

            if (user) {
                alert("Login successful!");
                window.location.href = '../index.html';
            } else {
                alert("Invalid username/email or password.");
            }
        })
        .catch(error => {
            console.error('Error during login:', error);
        });
}
