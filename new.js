// Function to open a new window and display service content
function openServiceWindow(title, tasks) {
    const newWindow = window.open('', '_blank', 'width=600,height=400');
    
    // Write the service content to the new window
    newWindow.document.write(
      ` <h2>${title}</h2>
        <p>${tasks.join('</p><p>')}</p>`
    );
}

// Service buttons with their respective titles and tasks
const services = [
    {
        buttonSelector: "button.webdesign",
        title: "Web Design",
        tasks: [
            "Creating wireframes and mockups: Planning the layout and structure of web pages using wireframing tools and design software.",
            "Designing visual elements: Developing graphics, icons, and other visual elements to enhance the look and feel of the website.",
            "User interface design: Designing user-friendly interfaces for web applications, ensuring a seamless and intuitive user experience.",
            "Collaborating with developers: Working closely with web developers to ensure that designs are implemented accurately and efficiently.",
            "Responsive design: Ensuring that websites are optimized for various devices and screen sizes, often through the use of responsive design techniques.",
            "Staying updated on design trends: Keeping up with the latest design trends, tools, and technologies to continuously improve the quality of web designs."
        ]
    },
    {
        buttonSelector: "button.webdevelop",
        title: "Web Development",
        tasks: [
            "Design the layout of a new webpage",
            "Write HTML structure for the webpage content",
            "Style the webpage using CSS",
            "Add interactivity with JavaScript",
            "Optimize images and media for fast loading",
            "Ensure the website is responsive for different devices",
            "Test the website across different browsers",
            "Ensure accessibility for all users",
            "Deploy the website to a hosting server",
            "Continuously improve and maintain the website"
        ]
    },
    {
        buttonSelector: "button.mobileapp",
        title: "Android Mobile App",
        tasks: [
            "Create User Interface",
            "Implement Forms",
            "Structure Content",
            "Integrate with CSS",
            "Implement Navigation",
            "Optimize for Mobile",
            "Access Device Features",
            "Integrate with Frameworks and Libraries",
            "Ensure Accessibility",
            "Testing and Debugging"
        ]
    },
    {
        buttonSelector: "button.photographer",
        title: "Photographer",
        tasks: [
            "Optimize images for web to ensure fast loading times",
            "Implement image galleries or sliders to showcase a photographer's portfolio",
            "Incorporate image optimization techniques such as lazy loading or responsive images",
            "Collaborate with web designers to ensure the visual aesthetics of the website align with the photographer's style",
            "Integrate social media sharing options to allow visitors to easily share the photographer's work",
            "Implement e-commerce functionality for selling prints or digital downloads of photographs",
            "Incorporate image metadata for search engine optimization (SEO) purposes",
            "Ensure the website is mobile-friendly and responsive, allowing users to view and interact with the photographer's work on various devices",
            "Implement image protection measures, such as watermarks or copyright notices, to safeguard the photographer's work"
        ]
    }
];

// Add click event listeners for each service button
services.forEach(service => {
    const serviceButtons = document.querySelectorAll(service.buttonSelector);
    serviceButtons.forEach(button => {
        button.addEventListener('click', () => openServiceWindow(service.title, service.tasks));
    });
});
// Function to handle the submit button click
function handleSubmission() {
    const newWindow = window.open('', '_blank', 'width=600,height=400');
    newWindow.document.write("<h3>Your message was successfully sent.</h3>");
}

// Add click event listeners for submit buttons
const submitButtons = document.querySelectorAll("button.submit");
submitButtons.forEach(button => {
    button.addEventListener('click', handleSubmission);
});
document.addEventListener("DOMContentLoaded", function () {
    const experiences = document.querySelectorAll(".experience");
    let animationTriggered = false;

    function fadeInElements() {
        experiences.forEach((experience, index) => {
            setTimeout(() => {
                experience.style.opacity = "1";
            }, index * 1500); // Adjust the delay between sections (in milliseconds)
        });
    }

    function handleScroll() {
        if (!animationTriggered) {
            const triggerPosition = window.innerHeight * 0.8; // Adjust the trigger position based on your preference
            const firstExperience = experiences[0];
            const firstExperiencePosition = firstExperience.getBoundingClientRect().top;

            if (firstExperiencePosition < triggerPosition) {
                fadeInElements();
                animationTriggered = true;
            }
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger animation on page load
});