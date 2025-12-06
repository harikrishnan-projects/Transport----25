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