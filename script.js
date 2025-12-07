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





/* testimonials section */
const testimonials = document.querySelectorAll('.testimonial-card');
let current = 0;

function showNextTestimonial() {
  testimonials[current].classList.remove('active');
  testimonials[current].classList.add('exit-left');

  current = (current + 1) % testimonials.length;

  testimonials[current].classList.remove('exit-left');
  testimonials[current].classList.add('active');
}

// Initial display
testimonials[0].classList.add('active');

// Auto slide every 3 seconds
setInterval(showNextTestimonial, 3000);






/* safety section */
document.querySelectorAll('.acc-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    const panel = document.getElementById(targetId);
    const isOpen = btn.classList.contains('active');

    // close all
    document.querySelectorAll('.acc-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.acc-panel').forEach(p => p.style.maxHeight = null);

    if (!isOpen) {
      btn.classList.add('active');
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});











/* submit button js code */

const contactForm = document.getElementById("contactForm");
const formResponse = document.getElementById("formResponse");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Simple validation
  if (!name || !email || !message) {
    formResponse.textContent = "Please fill the valid details.";
    formResponse.style.color = "red"; // You can style as per your CSS
    return;
  }

  // Clear the form
  contactForm.reset();

  // Redirect to your error page
  window.location.href = "./error.html";
});












/* go-to-error-on-valid.js
   - Navigate to ./error.html only when the form is valid.
   - Prevent navigation otherwise and show validation messages.
   - Intercepts inline onclick navigation (capture phase) so it doesn't bypass validation.
*/

document.addEventListener('DOMContentLoaded', function () {
  const TARGET_URL = './error.html';

  // Helper: perform validation + navigate if valid
  function validateAndNavigate(form) {
    // Use HTML5 validity API
    if (form.checkValidity()) {
      // form is valid -> navigate
      window.location.href = TARGET_URL;
      return true;
    } else {
      // form invalid -> show browser UI
      form.reportValidity();
      return false;
    }
  }

  // Attach submit handler to every form
  document.querySelectorAll('form').forEach(form => {
    // If some forms intentionally shouldn't navigate, add class "no-auto-nav" to opt-out
    if (form.classList.contains('no-auto-nav')) return;

    form.addEventListener('submit', function (ev) {
      // prevent default navigation/submission
      ev.preventDefault();
      ev.stopImmediatePropagation();

      // run validation + navigate if valid
      validateAndNavigate(form);
    }, true /* use capture to be safe */);

    // Find submit buttons inside this form to intercept inline onclicks that may navigate immediately.
    const submitButtons = Array.from(form.querySelectorAll('button[type="submit"], input[type="submit"]'));

    submitButtons.forEach(btn => {
      const btnOnclick = btn.getAttribute('onclick') || '';

      // If button has inline onclick that navigates to TARGET_URL, intercept its click event
      // Also intercept if the onclick contains "window.location" or direct href to error page.
      if ( /error\.html|window\.location|location\.href/.test(btnOnclick) ) {
        // Add capture-phase handler to stop inline onclick from executing
        btn.addEventListener('click', function (ev) {
          // prevent the inline onclick from firing and stop other listeners
          ev.preventDefault();
          ev.stopImmediatePropagation();

          // do validation & navigate only when valid
          validateAndNavigate(form);

          // NOTE: we intentionally DO NOT call the inline onclick or submit() after,
          // this ensures navigation only happens via our controlled code.
        }, true); // capture = true so this runs before inline handlers
      }
    });

    // Also guard against programmatic form.submit() calls from other scripts
    // by overriding submit() on this form instance only (not globally).
    // This is safer than overriding prototype globally.
    const originalNativeSubmit = form.submit;
    form.submit = function () {
      // trigger our validation + navigation logic instead of native submit behavior
      // (we do not call originalNativeSubmit to avoid navigation)
      validateAndNavigate(form);
    };
  });

  // Global safety: intercept clicks on any button element that has the inline onclick navigating to TARGET_URL,
  // but is not inside a form (or inside a form without type=submit). This ensures standalone buttons are handled too.
  document.querySelectorAll('button, input[type="button"]').forEach(btn => {
    const onclick = btn.getAttribute('onclick') || '';
    if (/error\.html|window\.location|location\.href/.test(onclick)) {
      btn.addEventListener('click', function (ev) {
        // If button belongs to a form, let form handling manage it (we already attached handlers above).
        const parentForm = btn.closest('form');
        if (parentForm) {
          // if parent form exists, do nothing here — form handler will run first.
          return;
        }

        // if no parent form, block the inline onclick and show a simple validity check if needed:
        ev.preventDefault();
        ev.stopImmediatePropagation();

        // If you want to require some inputs near this button (custom logic), add checks here.
        // For now: simply navigate (because there's no form to validate), or optionally show an alert.
        // We'll navigate to TARGET_URL to match the requested behavior for non-form buttons.
        window.location.href = TARGET_URL;
      }, true);
    }
  });

  // Optional: expose function to programmatically validate a form and navigate
  window.validateFormAndGoToError = function (formSelectorOrElement) {
    const form = typeof formSelectorOrElement === 'string'
      ? document.querySelector(formSelectorOrElement)
      : formSelectorOrElement;
    if (!form) return false;
    return validateAndNavigate(form);
  };

});
