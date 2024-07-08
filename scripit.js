// Luhn Algorithm for Credit Card Validation
function isValidCreditCard(cardNumber) {
    let sum = 0;
    let shouldDouble = false;

    // Loop through the card number digits from right to left
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber.charAt(i));

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
}

// Form Validation
function validatePaymentForm(event) {
    event.preventDefault(); // Prevent form submission

    const cardNumber = document.getElementById('cardNumber').value.trim();
    const cardName = document.getElementById('cardName').value.trim();
    const expiryDate = document.getElementById('expiryDate').value.trim();
    const cvv = document.getElementById('cvv').value.trim();

    if (!cardNumber || !cardName || !expiryDate || !cvv) {
        alert('All fields are required!');
        return false;
    }

    if (!isValidCreditCard(cardNumber)) {
        alert('Invalid credit card number!');
        return false;
    }

    alert('Payment submitted successfully!');
    return true;
}

// Event Listener
document.getElementById('paymentForm').addEventListener('submit', validatePaymentForm);
// Dynamic Greeting Based on Time of Day
function displayGreeting() {
    const greetingElement = document.getElementById('greeting');
    const currentHour = new Date().getHours();

    let greetingMessage = '';

    if (currentHour < 12) {
        greetingMessage = 'Good Morning!';
    } else if (currentHour < 18) {
        greetingMessage = 'Good Afternoon!';
    } else {
        greetingMessage = 'Good Evening!';
    }

    greetingElement.textContent = greetingMessage;
}

// Form Validation
function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('All fields are required!');
        return false;
    }

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address!');
        return false;
    }

    alert('Form submitted successfully!');
    return true;
}

// Event Listeners
document.addEventListener('DOMContentLoaded', displayGreeting);
document.getElementById('contactForm').addEventListener('submit', validateForm);
