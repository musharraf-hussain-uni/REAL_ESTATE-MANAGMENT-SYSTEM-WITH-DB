// Get references to the buttons
const rentButton = document.getElementById('rentButton');
const purchaseButton = document.getElementById('purchaseButton');

// Add click event listeners
rentButton.addEventListener('click', function() {
  window.location.href = 'properties.html?mode=rent';
});

purchaseButton.addEventListener('click', function() {
  window.location.href = 'properties.html?mode=purchase';
});

