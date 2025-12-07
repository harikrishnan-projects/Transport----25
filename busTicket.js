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

















/* filter */
document.querySelector('input[name="priceRange"]').addEventListener('input', function() {
  const value = this.value;
  const min = this.min;
  const max = this.max;
  const priceValue = document.getElementById('priceValue');
  priceValue.textContent = `₹${min} - ₹${value}`;
});





/* seat selection */
// const seats = document.querySelectorAll('.seat');
// const nextStepButton = document.getElementById('nextStep');
// let selectedSeats = [];

// seats.forEach(seat => {
//   seat.addEventListener('click', () => {
//     const seatId = seat.dataset.seat;
//     if (selectedSeats.includes(seatId)) {
//       selectedSeats = selectedSeats.filter(s => s !== seatId);
//       seat.classList.remove('selected');
//     } else {
//       selectedSeats.push(seatId);
//       seat.classList.add('selected');
//     }
//     nextStepButton.disabled = selectedSeats.length === 0;
//   });
// });






/* passengerForm */
const passengerForm = document.getElementById('passengerForm');

passengerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(passengerForm);
  const passengerDetails = {};
  formData.forEach((value, key) => {
    passengerDetails[key] = value;
  });
  console.log('Passenger Details:', passengerDetails);
  // Proceed to payment step
});







/* paymentForm */
const paymentForm = document.getElementById('paymentForm');

paymentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const paymentMethod = document.getElementById('paymentMethod').value;
  console.log('Payment Method:', paymentMethod);
  // Proceed with payment processing
});









/* passenger information and payment  */
document.getElementById('nextToPayment').addEventListener('click', function() {
  // Validate passenger information form
  const passengerForm = document.getElementById('passengerForm');
  if (passengerForm.checkValidity()) {
    // Hide passenger info and show payment section
    document.querySelector('.form-step').classList.add('payment-step');
    document.querySelector('.payment-step').classList.add('active');
  } else {
    alert('Please fill in all the required fields.');
  }
});











/* Search Buses button */
document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
  event.preventDefault();
  const searchForm = document.getElementById('searchForm'); // Make sure your form has id="searchForm"
  if (searchForm.checkValidity()) {
    // Redirect to 404 page if form is valid
    window.location.href = '404.html'; // replace with your actual 404 page path
  } else {
    alert('Please fill in all the required fields.');
  }
});

/* Next: Payment button */
document.getElementById('nextToPayment').addEventListener('click', function() {
  const passengerForm = document.getElementById('passengerForm');
  if (passengerForm.checkValidity()) {
    // Redirect to 404 page if form is valid
    window.location.href = '404.html'; // replace with your actual 404 page path
  } else {
    alert('Please fill in all the required fields.');
  }
});
