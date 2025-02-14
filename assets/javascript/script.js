$(document).ready(function () {
    $(".testimonials-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        navText: [
            "<i class='fas fa-chevron-left'></i>",
            "<i class='fas fa-chevron-right'></i>"
        ],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 2,
                nav: true
            },
            1024: {
                items: 3,
                nav: true
            }
        }
    });
});


let scrollTop = document.querySelector('.scroll-top');
let fixedButtons = document.querySelectorAll('.fixed-buttons');

// Toggle scroll-top visibility
function toggleScrollTop() {
    if (scrollTop) {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
}

// Scroll to top functionality
scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Toggle visibility for all fixed buttons
function toggleFixedButtons() {
    fixedButtons.forEach(button => {
        window.scrollY > 100 ? button.classList.add('active') : button.classList.remove('active');
    });
}

window.addEventListener('load', () => {
    toggleScrollTop();
    toggleFixedButtons();
});

document.addEventListener('scroll', () => {
    toggleScrollTop();
    toggleFixedButtons();
});




document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Reset error messages
            document.querySelectorAll('.error-message').forEach(el => {
                el.style.display = 'none';
            });
            
            // Get form fields
            const name = document.getElementById('name');
            const contact = document.getElementById('contact');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            // Validate fields
            let isValid = true;
            
            // Name validation
            if (!name.value.trim()) {
                document.getElementById('nameError').style.display = 'block';
                isValid = false;
            }
            
            // Contact validation (simple phone format check)
            const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
            if (!contact.value.trim() || !phoneRegex.test(contact.value.trim())) {
                document.getElementById('contactError').style.display = 'block';
                isValid = false;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            }
            
            if (isValid) {
               
                const formData = {
                    name: name.value.trim(),
                    contact: contact.value.trim(),
                    email: email.value.trim(),
                    message: message.value.trim()
                };
                
               
                setTimeout(() => {
                
                    document.getElementById('successMessage').style.display = 'block';
                    
                    contactForm.reset();
                    
                    setTimeout(() => {
                        document.getElementById('successMessage').style.display = 'none';
                    }, 5000);
                    
                    console.log('Form data would be sent to Hello@Ledgerbooks.app:', formData);
                }, 1500);
            }
        });
    }
});
