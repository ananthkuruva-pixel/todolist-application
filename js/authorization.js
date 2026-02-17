// ===== SIGNUP =====
function signupUser() {
  const email = document.getElementById("signupEmail").value.trim();
  const phone = document.getElementById("signupPhone").value.trim();
  const password = document.getElementById("signupPassword").value.trim();

  if (!email || !phone || !password) {
    alert("Please fill all fields");
    return;
  }

  const user = { email, phone, password };
  localStorage.setItem("user", JSON.stringify(user));

  alert("Signup successful! Redirecting to login...");

  window.location.href = "login.html";   // 🔴 THIS does redirect
}




// ===== LOGIN =====
function loginUser() {
  const email = document.getElementById("loginEmail").value.trim();
  const phone = document.getElementById("loginPhone").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  const savedUser = JSON.parse(localStorage.getItem("user"));

  if (!savedUser) {
    alert("No user found. Please signup first.");
    window.location.href = "signup.html";
    return;
  }

  if (
    email === savedUser.email &&
    phone === savedUser.phone &&
    password === savedUser.password
  ) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "index.html";
  } else {
    alert("Invalid login details");
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
