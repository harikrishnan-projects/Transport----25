document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navBar = document.querySelector(".navBar");

  if (!hamburger || !navBar) {
    console.error("Hamburger or navBar not found", hamburger, navBar);
    return;
  }

  hamburger.addEventListener("click", function () {
    navBar.classList.toggle("active");
  });
});








// Validate -> If valid: clear fields -> go to your existing 404 page
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  function isValidPhone(phone) {
    const digits = (phone || '').replace(/\D/g, '');
    return digits.length >= 10 && digits.length <= 13;
  }

  function validate() {
    const name = form.querySelector('#name');
    const phone = form.querySelector('#phone');
    const email = form.querySelector('#email');
    const message = form.querySelector('#message');

    [name, phone, email, message].forEach(el => el.classList.remove('input-error'));

    if (name.value.trim().length < 2) { name.classList.add('input-error'); return false; }
    if (!isValidPhone(phone.value))   { phone.classList.add('input-error'); return false; }
    if (!isValidEmail(email.value))   { email.classList.add('input-error'); return false; }
    if (message.value.trim().length < 5) { message.classList.add('input-error'); return false; }

    return true;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!validate()) {
      alert('plz fill valid details');
      return;
    }

    // ✔ Clear all inputs
    form.reset();

    // ✔ Redirect to your already-existing 404 page
    window.location.href = './404.html'; // use exact filename of your error page
  });
});
