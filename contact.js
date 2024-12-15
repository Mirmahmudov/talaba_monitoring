document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    // Form validation
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }
  
    // Create a contact object
    const contact = {
      name: name,
      email: email,
      message: message,
      date: new Date().toLocaleString()
    };
  
    // Save contact data to localStorage
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
  
    // Show success message
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = "Your message has been sent successfully!";
    responseMessage.classList.remove('error');
    responseMessage.style.display = 'block';
  
    // Clear the form
    document.getElementById('contactForm').reset();
  });
  