document.addEventListener('DOMContentLoaded', function () {
    const faqs = document.querySelectorAll('.faq h3');
    
    faqs.forEach(faq => {
        faq.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });
});