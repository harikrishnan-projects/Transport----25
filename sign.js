document.addEventListener("DOMContentLoaded", () => {
  const signinForm  = document.getElementById("signin-form");
  const forgotForm  = document.getElementById("forgot-form");
  const signupForm  = document.getElementById("signup-form");

  const sectionSignin = document.getElementById("signin-section");
  const sectionForgot = document.getElementById("forgot-section");
  const sectionSignup = document.getElementById("signup-section");

  function showSection(section) {
    sectionSignin.style.display = "none";
    sectionForgot.style.display = "none";
    sectionSignup.style.display = "none";
    section.style.display = "block";
    clearAllErrors();
  }

  // validators
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPassword = (p) => typeof p === "string" && p.length >= 6;
  const isNonEmpty = (v) => typeof v === "string" && v.trim().length > 0;

  // error helpers
  function showError(errId, msg) {
    const el = document.getElementById(errId);
    if (el) el.textContent = msg;
  }
  function clearAllErrors() {
    document.querySelectorAll(".error").forEach(e => e.textContent = "");
  }

  // show sign in initially
  showSection(sectionSignin);

  // ---------- Signin ----------
  signinForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
    clearAllErrors();

    const emailEl = document.getElementById("signin-email");
    const pwdEl   = document.getElementById("signin-password");

    const email = emailEl.value.trim();
    const pwd = pwdEl.value.trim();

    let hasError = false;

    if (!isNonEmpty(email) || !isValidEmail(email)) {
      showError("signin-email-error", "Please enter a valid email address.");
      hasError = true;
    }
    if (!isNonEmpty(pwd) || !isValidPassword(pwd)) {
      showError("signin-password-error", "Please enter a valid password (min 6 chars).");
      hasError = true;
    }

    if (hasError) return; // STOP — do not navigate

    // VALID -> per your requirement, go to error page (404)
    window.location.href = "./error.html";
  });

  // ---------- Forgot ----------
  forgotForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
    clearAllErrors();

    const forgotEmailEl = document.getElementById("forgot-email");
    const email = forgotEmailEl.value.trim();

    if (!isNonEmpty(email) || !isValidEmail(email)) {
      showError("forgot-email-error", "Please enter a valid email address.");
      return; // STOP
    }

    // VALID -> navigate to 404 (per your requirement)
    window.location.href = "./error.html";
  });

  // ---------- Signup ----------
  signupForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
    clearAllErrors();

    const nameEl = document.getElementById("signup-name");
    const emailEl = document.getElementById("signup-email");
    const pwdEl = document.getElementById("signup-password");
    const confirmEl = document.getElementById("signup-confirm");

    const name = nameEl.value.trim();
    const email = emailEl.value.trim();
    const pwd = pwdEl.value.trim();
    const confirm = confirmEl.value.trim();

    let hasError = false;

    if (!isNonEmpty(name)) {
      showError("signup-name-error", "Please enter your full name.");
      hasError = true;
    }
    if (!isNonEmpty(email) || !isValidEmail(email)) {
      showError("signup-email-error", "Please enter a valid email address.");
      hasError = true;
    }
    if (!isNonEmpty(pwd) || !isValidPassword(pwd)) {
      showError("signup-password-error", "Password must be at least 6 characters.");
      hasError = true;
    }
    if (!isNonEmpty(confirm) || pwd !== confirm) {
      showError("signup-confirm-error", "Passwords must match.");
      hasError = true;
    }

    if (hasError) return; // STOP

    // VALID -> navigate to 404 (per requirement)
    window.location.href = "./error.html";
  });

  // Link handlers that show sections
  document.getElementById("link-forgot").addEventListener("click", (ev) => {
    ev.preventDefault(); showSection(sectionForgot);
  });
  document.getElementById("link-signup").addEventListener("click", (ev) => {
    ev.preventDefault(); showSection(sectionSignup);
  });
  document.getElementById("back-to-signin-from-forgot").addEventListener("click", (ev) => {
    ev.preventDefault(); showSection(sectionSignin);
  });
  document.getElementById("back-to-signin-from-signup").addEventListener("click", (ev) => {
    ev.preventDefault(); showSection(sectionSignin);
  });
});
