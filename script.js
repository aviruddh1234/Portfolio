// Smooth Scrolling for Navigation Links
document.querySelectorAll('header nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Check if the link is the mode toggle button, if so, don't smooth scroll
        if (this.parentElement.classList.contains('mode-toggle')) {
            return;
        }

        e.preventDefault(); // Prevent default anchor click behavior

        const targetId = this.getAttribute('href');
        // Ensure targetId is an actual section ID
        if (targetId && targetId.startsWith('#') && targetId.length > 1) {
             const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                 window.scrollTo({
                    top: targetSection.offsetTop - headerHeight, // Adjust for sticky header height
                    behavior: 'smooth' // Smooth scroll animation
                });
            }
        }
    });
});

// Light/Dark Mode Toggle
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;
const sunIcon = '<i class="fas fa-sun"></i>';
const moonIcon = '<i class="fas fa-moon"></i>';

// Check for saved theme preference in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    modeToggle.innerHTML = sunIcon; // Show sun icon in dark mode
} else {
    modeToggle.innerHTML = moonIcon; // Show moon icon in light mode
}


modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Update the button icon based on the current mode
    if (body.classList.contains('dark-mode')) {
        modeToggle.innerHTML = sunIcon;
        localStorage.setItem('theme', 'dark'); // Save preference
    } else {
        modeToggle.innerHTML = moonIcon;
        localStorage.setItem('theme', 'light'); // Save preference
    }
});


// Basic Contact Form Handling (Client-side only)
const contactForm = document.getElementById('contact-form'); // Use the added ID

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // In a real application, you would collect form data here
    // const formData = new FormData(contactForm);
    // for (let [key, value] of formData.entries()) {
    //     console.log(`${key}: ${value}`);
    // }

    // --- IMPORTANT ---
    // To actually send an email, you need a backend script or service.
    // This client-side JavaScript alone cannot send emails directly.
    // You would typically send the formData to a server using Fetch API or XMLHttpRequest.
    // Example using a hypothetical endpoint:
    /*
    fetch('/send-email', { // Replace '/send-email' with your backend endpoint
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Message sent successfully!');
            contactForm.reset(); // Clear the form
        } else {
            alert('Failed to send message.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while sending the message.');
    });
    */
    // --- End IMPORTANT ---

    // For this frontend-only example, we'll just show a success message
    // and clear the form after a short delay.
    alert('Thank you for your message! (Note: Email sending requires a backend setup.)');
    contactForm.reset(); // Clear the form
});