const rentFilter = document.getElementById('rent');
const purchaseFilter = document.getElementById('purchase');
const propertyList = document.querySelector('.property-list');

rentFilter.addEventListener('change', filterProperties);
purchaseFilter.addEventListener('change', filterProperties);

function filterProperties() {
  const selectedRent = rentFilter.value;
  const selectedPurchase = purchaseFilter.value;
  
  // Remove existing property listings
  while (propertyList.firstChild) {
    propertyList.firstChild.remove();
  }
  
  // Filter properties based on selected values
  const filteredProperties = properties.filter(property => {
    if (selectedRent === 'all' && selectedPurchase === 'all') {
      return true; // Show all properties
    } else if (selectedRent !== 'all' && selectedPurchase !== 'all') {
      return property.rent === selectedRent && property.purchase === selectedPurchase;
    } else if (selectedRent !== 'all') {
      return property.rent === selectedRent;
    } else {
      return property.purchase === selectedPurchase;
    }
  });
  
  // Display filtered properties
  filteredProperties.forEach(property => {
    const propertyCard = createPropertyCard(property);
    propertyList.appendChild(propertyCard);
  });
}

// Example property data
const properties = [
  { name: 'Property 1', rent: 'apartment', purchase: 'house' },
  { name: 'Property 2', rent: 'house', purchase: 'land' },
  { name: 'Property 3', rent: 'condo', purchase: 'commercial' },
  // Add more properties here
];

// Function to create a property card
function createPropertyCard(property) {
  const card = document.createElement('div');
  card.classList.add('property-card');
  
  const name = document.createElement('h3');
  name.textContent = property.name;
  
  const rent = document.createElement('p');
  rent.textContent = `Rent: ${property.rent}`;
  
  const purchase = document.createElement('p');
  purchase.textContent = `Purchase: ${property.purchase}`;
  
  card.appendChild(name);
  card.appendChild(rent);
  card.appendChild(purchase);
  
  return card;
}

// Initial filtering on page load
filterProperties();
    
function redirectToAgents() {
  window.location.href = 'Agents.html';
}


// contact alertbox

function showAlert(event) {
  event.preventDefault(); // Prevent the default behavior of the link

  const email = document.getElementById('emailInput').value;
  alert(`Email '${email}' successfully sent!`);
}

const sendLink = document.querySelector('.col a');
sendLink.addEventListener('click', showAlert);

