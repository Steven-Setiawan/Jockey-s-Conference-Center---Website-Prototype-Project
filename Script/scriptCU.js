const header = document.querySelector('header');
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
  link.addEventListener('click', () => {
    header.style.backgroundColor = 'black';
  });
});

var contactForm = document.getElementById('contactForm');

contactForm.addEventListener('mouseenter', function() {
  contactForm.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
});

contactForm.addEventListener('mouseleave', function() {
  contactForm.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;
  var contactMethod = [];

  if (document.getElementById("contactPhone").checked) {
    contactMethod.push("Phone");
  }

  if (document.getElementById("contactEmail").checked) {
    contactMethod.push("Email");
  }

  if (
    validateName(name) &&
    validateEmail(email) &&
    validatePhone(phone) &&
    validateMessage(message) &&
    validateContactMethod(contactMethod)
  ) {
    console.log("Form submitted successfully!");
    document.getElementById("contactForm").reset();
  }
});

function validateName(name) {
    if (!/^[A-Za-z]{3,}$/.test(name)) {
      alert("Please enter a valid name with at least 3 alphabetical characters.");
      return false;
    }
    return true;
  }

  function validateEmail(email) {
    if (email.trim() === "") {
      alert("Please enter your email.");
      return false;
    }
    
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    
    return true;
  }

function validatePhone(phone) {
  if (phone.trim() === "") {
    alert("Please enter your phone number.");
    return false;
  }
  var phonePattern = /^\d+$/;

  if (!phonePattern.test(phone)) {
    alert("Please enter a valid phone number.");
    return false;
  }

  return true;
}

function validateMessage(message) {
  if (message.trim() === "") {
    alert("Please enter your message.");
    return false;
  }
  return true;
}

function validateContactMethod(contactMethod) {
  if (contactMethod.length === 0) {
    alert("Please select at least one preferred contact method.");
    return false;
  }
  return true;
}