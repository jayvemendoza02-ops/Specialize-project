
document.addEventListener('DOMContentLoaded', () => {
  const signInForm = document.querySelector('.login-box');
  const signUpForm = document.querySelector('.Register');
  const signUpButton = document.querySelector('.signup a');
  const signInLink = document.querySelector('.signin-link a');

  if (!signInForm || !signUpForm || !signUpButton) {
    return;
  }

  signUpButton.addEventListener('click', (event) => {
    event.preventDefault();
    signInForm.style.display = 'none';
    signUpForm.style.display = 'block';
  });

  if (signInLink) {
    signInLink.addEventListener('click', (event) => {
      event.preventDefault();
      signUpForm.style.display = 'none';
      signInForm.style.display = 'block';
    });
  }
});
