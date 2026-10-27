document.addEventListener("DOMContentLoaded", () => {
  const loginBox = document.querySelector(".login-box");
  const registerBox = document.querySelector(".Register");
  const loginForm = document.querySelector(".login-form");
  const registerForm = document.querySelector(".register-form");
  const signupLink = document.querySelector(".signup a");
  const signinLink = document.querySelector(".signin-link a");
  const usernameEl = document.getElementById("username");
  const welcomeNameEl = document.getElementById("welcome-name");
  const logoutButton = document.getElementById("logout");

  const userName = (() => {
    try {
      return sessionStorage.getItem("username") || "Guest";
    } catch (err) {
      return "Guest";
    }
  })();

  if (usernameEl) {
    usernameEl.textContent = userName;
  }

  if (welcomeNameEl) {
    welcomeNameEl.textContent = userName;
  }

  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      try {
        sessionStorage.removeItem("username");
      } catch (err) {
        // ignore storage errors
      }
      window.location.href = "Specialize.html";
    });
  }

  if (!loginBox || !registerBox) {
    return;
  }

  function show(box) {
    loginBox.style.display = box === "login" ? "block" : "none";
    registerBox.style.display = box === "register" ? "block" : "none";
  }

  if (signupLink) {
    signupLink.addEventListener("click", (e) => {
      e.preventDefault();
      show("register");
    });
  }

  if (signinLink) {
    signinLink.addEventListener("click", (e) => {
      e.preventDefault();
      show("login");
    });
  }

  function goHome(username) {
    try {
      sessionStorage.setItem("username", username);
    } catch (err) {
      /* storage unavailable, home page will use a default name */
    }
    window.location.href = "home.html";
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = loginForm.querySelector('input[type="text"]').value.trim();
      const password = loginForm.querySelector('input[type="password"]').value;

      if (!username || !password) {
        alert("Please enter your username and password.");
        return;
      }
      goHome(username);
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = registerForm.querySelector('input[type="text"]').value.trim();
      const passwords = registerForm.querySelectorAll('input[type="password"]');

      if (!username) {
        alert("Please enter a username.");
        return;
      }
      if (passwords[0].value !== passwords[1].value) {
        alert("Passwords do not match.");
        return;
      }
      goHome(username);
    });
  }
});