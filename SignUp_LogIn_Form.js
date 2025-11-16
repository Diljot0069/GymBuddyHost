const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

// toggle login/register
registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

// handle login form
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Dummy login check
    if (username === "Fee_Project" && password === "6969") {
        alert("Login successful!");
        window.location.href = "index.html"; // redirect to main website
    } else {
        alert("Invalid username or password!");
    }
});
