document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    document.getElementById('formResponse').innerText = `Thank you, ${name}! Your email ${email} has been received.`;
    
    // Reset the form fields
    this.reset();
});
