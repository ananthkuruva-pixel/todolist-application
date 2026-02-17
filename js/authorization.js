// ===== SIGNUP =====
function signupUser() {
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !phone || !password) {
    alert("Please fill all fields");
    return;
  }

  const user = { email, phone, password };
  localStorage.setItem("user", JSON.stringify(user));

  alert("Signup successful! Please login.");
  window.location.href = "login.html";
}


// ===== LOGIN =====
function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const savedUser = JSON.parse(localStorage.getItem("user"));

  if (!savedUser) {
    alert("No user found. Please signup first.");
    window.location.href = "signup.html";
    return;
  }

  if (email === savedUser.email && password === savedUser.password) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "index.html";
  } else {
    alert("Invalid email or password");
  }
}


// ===== PAGE PROTECTION =====
if (window.location.pathname.includes("index.html")) {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
  }
}


// ===== LOGOUT =====
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}
