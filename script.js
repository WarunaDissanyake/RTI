document.getElementById('contactForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Regular expression for a valid email address
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Regular expression for a valid phone number (only digits)
    const phonePattern = /^[0-9]{10}$/;

    // Check if any field is empty
    if (name === '' || email === '' || phone === '' || message === '') {
        alert('Please fill in all fields.');
        event.preventDefault();
    }
    // Check if the email is in the correct format
    else if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    }
    // Check if the phone number consists only of digits and is 10 digits long
    else if (!phonePattern.test(phone) || phone.length !== 10) {
        alert('Please enter a valid 10-digit phone number.');
        event.preventDefault();
    }
});
