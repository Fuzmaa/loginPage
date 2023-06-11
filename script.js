const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simulating login functionality
  if (username === 'admin' && password === 'password') {
    // Redirect to a success page or perform other actions
    alert('Login successful!');
  } else {
    // Display an error message
    errorMessage.textContent = 'Invalid username or password';
  }
});
