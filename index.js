// Fetch data from a public API (e.g., aviation-related API)
async function fetchFlightData() {
    try {
        const response = await fetch('https://api.example.com/flights'); // Replace with actual API URL
        const data = await response.json();
        displayFlights(data);
    } catch (error) {
        console.error('Error fetching flight data:', error);
    }
}

// Display flight data dynamically in the DOM
function displayFlights(flights) {
    const flightContainer = document.getElementById('flight-container');
    flightContainer.innerHTML = ''; // Clear previous data

    flights.forEach(flight => {
        const flightCard = document.createElement('div');
        flightCard.className = 'flight-card';
        flightCard.innerHTML = `
            <h3>${flight.airline}</h3>
            <p>Flight Number: ${flight.flight_number}</p>
            <p>Departure: ${flight.departure}</p>
            <p>Arrival: ${flight.arrival}</p>
        `;
        flightContainer.appendChild(flightCard);
    });
}

function handlePaymentMethodChange(event) {
    const cardDetails = document.getElementById('card-details');
    if (event.target.value === 'credit-card' || event.target.value === 'debit-card') {
        cardDetails.style.display = 'block';
    } else {
        cardDetails.style.display = 'none';
    }
}

// Handle form submission for booking
function handleBooking(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const bookingDetails = Object.fromEntries(formData.entries());
    console.log('Booking Details:', bookingDetails);
    alert(Booking successful for ${bookingDetails.name} traveling from ${bookingDetails['starting-station']} to ${bookingDetails.destination} on ${bookingDetails['travel-date']} at ${bookingDetails['departure-time']} with ${bookingDetails.passengers} passenger(s)! Special Condition: ${bookingDetails['special-condition']} Payment Method: ${bookingDetails['payment-method']});
}

const airports = [
    "Jomo Kenyatta International Airport (NBO)",
    "Heathrow Airport (LHR)",
    "John F. Kennedy International Airport (JFK)",
    "Dubai International Airport (DXB)",
    "Los Angeles International Airport (LAX)",
    "Changi Airport (SIN)",
    "Tokyo Haneda Airport (HND)",
    "Sydney Kingsford Smith Airport (SYD)",
    "Charles de Gaulle Airport (CDG)",
    "Frankfurt Airport (FRA)",
    "Hong Kong International Airport (HKG)",
    "Toronto Pearson International Airport (YYZ)",
    "San Francisco International Airport (SFO)",
    "Beijing Capital International Airport (PEK)",
    "Singapore Changi Airport (SIN)",
    "Amsterdam Schiphol Airport (AMS)",
    "Zurich Airport (ZRH)",
    "Munich Airport (MUC)",
    "Madrid Barajas Airport (MAD)",
    "Istanbul Airport (IST)",
    "Doha Hamad International Airport (DOH)",
    "Seoul Incheon International Airport (ICN)",
    "Kuala Lumpur International Airport (KUL)",
    "Bangkok Suvarnabhumi Airport (BKK)",
    "Vienna International Airport (VIE)",
    "Copenhagen Airport (CPH)",
    "Oslo Gardermoen Airport (OSL)",
    "Stockholm Arlanda Airport (ARN)",
    "Brussels Airport (BRU)",
    "Dublin Airport (DUB)",
    "Moscow Sheremetyevo Airport (SVO)",
    "Cape Town International Airport (CPT)",
    "Johannesburg O.R. Tambo Airport (JNB)",
    "Abu Dhabi International Airport (AUH)",
    "Athens International Airport (ATH)",
    "Lisbon Humberto Delgado Airport (LIS)",
    "Warsaw Chopin Airport (WAW)",
    "Prague Vaclav Havel Airport (PRG)",
    "Budapest Ferenc Liszt Airport (BUD)",
    "Helsinki Vantaa Airport (HEL)",
    "Osaka Kansai International Airport (KIX)",
    "Melbourne Tullamarine Airport (MEL)",
    "Auckland Airport (AKL)",
    "Brisbane Airport (BNE)",
    "Perth Airport (PER)",
    "Adelaide Airport (ADL)",
    "Gold Coast Airport (OOL)",
    "Christchurch Airport (CHC)",
    "Wellington Airport (WLG)",
    "Queenstown Airport (ZQN)",
    "Fiji Nadi International Airport (NAN)",
    "Honolulu Daniel K. Inouye Airport (HNL)",
    "Seattle-Tacoma International Airport (SEA)",
    "Denver International Airport (DEN)",
    "Chicago O'Hare International Airport (ORD)",
    "Atlanta Hartsfield-Jackson Airport (ATL)",
    "Miami International Airport (MIA)",
    "Dallas/Fort Worth International Airport (DFW)",
    "Houston George Bush Intercontinental Airport (IAH)",
    "Phoenix Sky Harbor International Airport (PHX)",
    "Orlando International Airport (MCO)",
    "Las Vegas McCarran International Airport (LAS)",
    "Boston Logan International Airport (BOS)",
    "Detroit Metropolitan Airport (DTW)",
    "Minneapolis-Saint Paul Airport (MSP)",
    "Philadelphia International Airport (PHL)",
    "Salt Lake City International Airport (SLC)",
    "San Diego International Airport (SAN)",
    "Tampa International Airport (TPA)",
    "Portland International Airport (PDX)",
    "Vancouver International Airport (YVR)",
    "Montreal-Trudeau International Airport (YUL)",
    "Calgary International Airport (YYC)",
    "Edmonton International Airport (YEG)",
    "Winnipeg James Armstrong Richardson Airport (YWG)",
    "Halifax Stanfield International Airport (YHZ)",
    "Ottawa Macdonald-Cartier Airport (YOW)",
    "Quebec City Jean Lesage Airport (YQB)",
    "St. John's International Airport (YYT)",
    "Victoria International Airport (YYJ)",
    "Kelowna International Airport (YLW)",
    "Regina International Airport (YQR)",
    "Saskatoon John G. Diefenbaker Airport (YXE)",
    "Thunder Bay International Airport (YQT)",
    "London Gatwick Airport (LGW)",
    "Manchester Airport (MAN)",
    "Birmingham Airport (BHX)",
    "Edinburgh Airport (EDI)",
    "Glasgow Airport (GLA)",
    "Belfast International Airport (BFS)",
    "Cardiff Airport (CWL)",
    "Newcastle Airport (NCL)",
    "Liverpool John Lennon Airport (LPL)",
    "Leeds Bradford Airport (LBA)"
];

function populateAirports() {
    const startingStation = document.getElementById('starting-station');
    const destination = document.getElementById('destination');

    airports.forEach(airport => {
        const option1 = document.createElement('option');
        option1.value = airport;
        option1.textContent = airport;
        startingStation.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = airport;
        option2.textContent = airport;
        destination.appendChild(option2);
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    fetchFlightData();
    populateAirports(); // Populate the dropdown menus with airports

    const bookingForm = document.getElementById('booking-form');
    bookingForm.addEventListener('submit', handleBooking);

    const paymentMethod = document.getElementById('payment-method');
    paymentMethod.addEventListener('change', handlePaymentMethodChange);
});