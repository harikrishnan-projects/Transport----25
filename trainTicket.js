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









/* available train detals */
document.addEventListener("DOMContentLoaded", function() {
  const trainCards = document.querySelectorAll(".train-card");
  trainCards.forEach(card => {
    const btn = card.querySelector(".expand-btn");
    const collapse = card.querySelector(".train-details-collapse");
    btn.addEventListener("click", function(e) {
      e.stopPropagation();  // prevent event bubbling if needed
      const isOpen = card.classList.contains("expanded");
      if (isOpen) {
        card.classList.remove("expanded");
        btn.classList.remove("open");
      } else {
        card.classList.add("expanded");
        btn.classList.add("open");
      }
    });
  });
});









/* PNR section */
function downloadTicket() {
  alert("Ticket downloaded!");
  // Implement ticket download functionality here
}

function printTicket() {
  window.print();
}

function shareTicket() {
  alert("Ticket shared!");
  // Implement ticket sharing functionality here
}







/* FAQ section */
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;  // .faq-item
    item.classList.toggle('active');
  });
});












document.addEventListener("DOMContentLoaded", function() {

  // Search Form
  const searchForm = document.getElementById('searchForm');
  searchForm.addEventListener('submit', function(e) {
    if (!searchForm.checkValidity()) {
      // Prevent default submit only if form is invalid
      e.preventDefault();
      searchForm.reportValidity();
    } else {
      // Form is valid → redirect to error page
      window.location.href = './error.html';
    }
  });

  // Passenger Form
  const passengerForm = document.getElementById('passengerForm');
  passengerForm.addEventListener('submit', function(e) {
    if (!passengerForm.checkValidity()) {
      e.preventDefault();
      passengerForm.reportValidity();
    } else {
      window.location.href = './error.html';
    }
  });

});


