document.addEventListener('DOMContentLoaded', () => {
    const greetingHeader = document.getElementById('greeting');
    const hour = new Date().getHours();
    
    let welcomeText = "";
    if (hour < 12) welcomeText = "Good Morning!";
    else if (hour < 18) welcomeText = "Good Afternoon!";
    else welcomeText = "Good Evening!";
    
    greetingHeader.textContent = `${welcomeText} I'm Saran Chilakamarthi`;

    // 2. Form Validation
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent page refresh
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        
        if (name.length < 2) {
            alert("Please enter a valid name.");
            return;
        }
        
        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }
        
        alert(`Thank you, ${name}! Your message has been sent.`);
        contactForm.reset();
    });
});