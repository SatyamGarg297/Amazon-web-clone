// Function to handle click event on "Click here to go to amazon.in" link
document.addEventListener('DOMContentLoaded', function() {
    const linkToAmazonIndia = document.querySelector('.hero-msg a');
    linkToAmazonIndia.addEventListener('click', function(event) {
        event.preventDefault();
        // Redirect to amazon.in
        window.location.href = 'https://www.amazon.in';
    });
});
// Function to handle click event on "Add to Cart" button
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.box-content p');
    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const productName = button.parentElement.querySelector('h2').textContent;
            alert('Added ' + productName + ' to cart!');
        });
    });
});
// Function to handle scroll to top functionality
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.querySelector('.foot-panel1');
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
// JavaScript code for Amazon website

// Function to handle hover effect on navigation items
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.navbar div');
    
    navItems.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            item.classList.add('hover-effect');
        });
        item.addEventListener('mouseout', function() {
            item.classList.remove('hover-effect');
        });
    });
});

// Function to handle hover effect on product boxes
document.addEventListener('DOMContentLoaded', function() {
    const productBoxes = document.querySelectorAll('.box');
    
    productBoxes.forEach(function(box) {
        box.addEventListener('mouseover', function() {
            box.classList.add('box-hover');
        });
        box.addEventListener('mouseout', function() {
            box.classList.remove('box-hover');
        });
    });
});

// Function to handle parallax effect on hero section
document.addEventListener('scroll', function() {
    const heroSection = document.querySelector('.hero-section');
    const scrollPosition = window.scrollY;
    
    heroSection.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
});

