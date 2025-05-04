// Button click: change text and background
const button = document.getElementById('myBtn');
button.addEventListener('click', () => {
  button.textContent = "Clicked!";
  button.style.backgroundColor = "blue";
});

// Keypress detection
document.addEventListener('keydown', (e) => {
    console.log(`You pressed: ${e.key}`);
    if (e.key === 's') {
      alert('You pressed "s"for Secret!');
    }
  });

// double clicking
button.addEventListener('dblclick', () => {
    alert("Double-click detected! You've unlocked the secret 🎉");
  });

// long-press detection
let pressTimer;
button.addEventListener('mousedown', () => {
  pressTimer = setTimeout(() => {
    alert("Long press detected! Secret unlocked.");
  }, 1000); // 1 second press
});
button.addEventListener('mouseup', () => {
  clearTimeout(pressTimer); 
});



// Slideshow functionality
const images = [
  "Assets/image1.jpg",
  "Assets/image2.jpg",
  "Assets/image3.jpg",
  "Assets/image4.jpg"
];

let index = 0;
const slideImage = document.getElementById("slideImage");

setInterval(() => {
  index = (index + 1) % images.length;
  slideImage.classList.remove("show"); // fade out
  setTimeout(() => {
    slideImage.src = images[index];
    slideImage.classList.add("show");  // fade in
  }, 200);
}, 3000);

// Fade-in animation on load
slideImage.classList.add("fade-in");
setTimeout(() => slideImage.classList.add("show"), 100);

// Tab functionality
function openTab(tabId) {
  document.querySelectorAll(".tabContent").forEach(tab => {
    tab.style.display = "none";
  });
  document.getElementById(tabId).style.display = "block";
}


// Form validation
const form = document.getElementById('signupForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const emailFeedback = document.getElementById('emailFeedback');
const passwordFeedback = document.getElementById('passwordFeedback');

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

email.addEventListener('input', () => {
  if (!email.value) {
    emailFeedback.textContent = "Email is required.";
    emailFeedback.classList.remove("valid");
  } else if (!emailRegex.test(email.value)) {
    emailFeedback.textContent = "Invalid email format.";
    emailFeedback.classList.remove("valid");
  } else {
    emailFeedback.textContent = "Valid email!";
    emailFeedback.classList.add("valid");
  }
});

password.addEventListener('input', () => {
  if (!password.value) {
    passwordFeedback.textContent = "Password is required.";
    passwordFeedback.classList.remove("valid");
  } else if (password.value.length < 8) {
    passwordFeedback.textContent = "Password must be at least 8 characters.";
    passwordFeedback.classList.remove("valid");
  } else {
    passwordFeedback.textContent = "Strong password!";
    passwordFeedback.classList.add("valid");
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (
    emailRegex.test(email.value) &&
    password.value.length >= 8
  ) {
    alert("Form submitted successfully!");
    form.reset();
    emailFeedback.textContent = "";
    passwordFeedback.textContent = "";
  } else {
    alert("Please correct the errors before submitting.");
  }
});
