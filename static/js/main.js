// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });
}

// Adventure category filters
const filterButtons = document.querySelectorAll(".filter-btn");
const packageCards = document.querySelectorAll(".package-card");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedCategory = button.dataset.filter;

        filterButtons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");

        packageCards.forEach((card) => {
            const shouldShow =
                selectedCategory === "all" ||
                card.dataset.category === selectedCategory;

            card.classList.toggle("hidden", !shouldShow);
        });
    });
});

// Front-end-only contact form demo
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        const visitorName = document.getElementById("fullName").value.trim();
        formMessage.textContent = `Thanks, ${visitorName}! Your demo enquiry is ready.`;
        contactForm.reset();
    });
}
