// script.js

document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const contentBox = document.getElementById('sidebar-content');

    // Function to update content box
    const updateContent = (contentId) => {
        // Here you can define different content based on contentId
        // For now, we'll use dummy text
        let content = '';

        switch (contentId) {
            case 'main':
                content = '<p>This is the Main section. Replace this with your main content.</p>';
                break;
            case 'resume':
                content = '<p>This is the Resume section. You can embed your resume here.</p>';
                break;
            case 'bci-speller':
                content = '<p>Details about the BCI Speller project.</p>';
                break;
            case 'flexible-input-networks':
                content = '<p>Details about the Flexible Input Networks project.</p>';
                break;
            case 'autonomous-rover':
                content = '<p>Details about the Autonomous Rover project.</p>';
                break;
            case 'awards':
                content = '<p>This is the Awards section. List your awards here.</p>';
                break;
            default:
                content = '<p>Welcome to my personal page! This is some dummy text. Feel free to customize it.</p>';
        }

        contentBox.innerHTML = content;
    };

    // Add event listeners to nav buttons
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const contentId = button.getAttribute('data-content');
            updateContent(contentId);
        });
    });

    // Add event listeners to dropdown items
    dropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            const contentId = item.getAttribute('data-content');
            updateContent(contentId);
        });
    });
});
