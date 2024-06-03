const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

function loginWithGoogle() {
    // Redirect ke halaman Google untuk login
    window.location.href = 'https://accounts.google.com/o/oauth2/auth?response_type=token&client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=email profile openid&state=YOUR_STATE';
  
    // Set a timeout to redirect the user to the home.html page after they have logged in
    setTimeout(function() {
      window.location.href = 'home.html';
    }, 2000); // Adjust the timeout duration as needed
  }