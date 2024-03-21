// DO NOT USE THIS IN PRODUCTION - it is insecure and does not handle errors properly

const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessageElement = document.getElementById('error-message');

function validateLogin(username, password) {

  // Simulate user validation (replace with your actual logic)
  if (username !== 'user' || password !== 'pass') {
    errorMessageElement.textContent = 'Invalid username or password.';
    return false;
  }

  return true; // Login successful
}

const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const username = usernameInput.value;
  const password = passwordInput.value;

  if (validateLogin(username, password)) {
    document.body.innerHTML = '<h2 class="success-message">Logged in</h2>';
  }
});
