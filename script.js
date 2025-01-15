const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.features-tab-content');
const faqQuestions = document.querySelectorAll('.faq-question');
const newsletterForm = document.querySelector('.newsletter-form');
const emailInput = document.getElementById('email');
const errorMessage = document.querySelector('.error-message');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.dataset.tab;

        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        button.classList.add('active');
        document.querySelector(`.features-tab-content[data-tab-content="${tabId}"]`).classList.add('active');
    });
});

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        question.classList.toggle('active');
        if (question.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = 0;
        }
    });
});

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (email === '') {
        emailInput.parentNode.classList.add('error');
        errorMessage.textContent = 'Whoops, looks like you forgot to add your email';
    } else if (!isValidEmail(email)) {
        emailInput.parentNode.classList.add('error');
        errorMessage.textContent = 'Please provide a valid email address';
    } else {
        emailInput.parentNode.classList.remove('error');
        errorMessage.textContent = '';
        // Submit the form or handle success
        alert('Thank you for subscribing!');
        newsletterForm.reset();
    }
});

emailInput.addEventListener('input', () => {
    if (emailInput.parentNode.classList.contains('error')) {
        emailInput.parentNode.classList.remove('error');
        errorMessage.textContent = '';
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}