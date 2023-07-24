




// // Function to handle button click event
// function handleContactButtonClick() {
//     // Replace this with your preferred method to handle contact form or redirect to contact page.
//     alert('Contact button clicked! Please contact us using the provided information.');
// }

// // Add event listener once the document is loaded
// document.addEventListener('DOMContentLoaded', () => {
//     const contactButton = document.querySelector('.contact-btn');
//     contactButton.addEventListener('click', handleContactButtonClick);
// });

// Function to handle button click event
function handleContactButtonClick() {
    // Replace this with your preferred method to handle contact form or redirect to the contact page.
    alert('Contact button clicked! Please contact us using the provided information.');
}

// Function to display tooltips on feature cards
function displayTooltip(event) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = event.target.title;
    event.target.appendChild(tooltip);

    // Position the tooltip at the bottom of the feature card
    const tooltipHeight = tooltip.offsetHeight;
    tooltip.style.top = `${event.target.offsetHeight - tooltipHeight}px`;
}

// Function to hide tooltips on feature cards
function hideTooltip(event) {
    const tooltip = event.target.querySelector('.tooltip');
    if (tooltip) {
        event.target.removeChild(tooltip);
    }
}

// Add event listeners once the document is loaded
document.addEventListener('DOMContentLoaded', () => {
    const contactButton = document.querySelector('.contact-btn');
    contactButton.addEventListener('click', handleContactButtonClick);

    const featureCards = document.querySelectorAll('.feature');
    featureCards.forEach((card) => {
        card.addEventListener('mouseenter', displayTooltip);
        card.addEventListener('mouseleave', hideTooltip);
    });
});



// Function to handle button click event
function handleContactButtonClick() {
    // Replace this with your preferred method to handle contact form or redirect to the contact page.
    alert('Contact button clicked! Please contact us using the provided information.');
}

// Function to display tooltips on feature cards
function displayTooltip(event) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = event.target.title;
    event.target.appendChild(tooltip);
}

// Function to hide tooltips on feature cards
function hideTooltip(event) {
    const tooltip = event.target.querySelector('.tooltip');
    if (tooltip) {
        event.target.removeChild(tooltip);
    }
}

// Add event listeners once the document is loaded
document.addEventListener('DOMContentLoaded', () => {
    const contactButton = document.querySelector('.contact-btn');
    contactButton.addEventListener('click', handleContactButtonClick);

    const featureCards = document.querySelectorAll('.feature');
    featureCards.forEach((card) => {
        card.addEventListener('mouseenter', displayTooltip);
        card.addEventListener('mouseleave', hideTooltip);
    });
});
