function openTab(tabName) {
    const tabLinks = document.getElementsByClassName("tab-links");
    const tabContents = document.getElementsByClassName("tab-contents");
    
    for (let tablink of tabLinks) {
        tablink.classList.remove("active-link");
    }
    
    for (let tabcontent of tabContents) {
        tabcontent.classList.remove("active-tab");
    }
    
    // Find the clicked tab link and add active class
    const clickedTabLink = Array.from(tabLinks).find(link => link.getAttribute('onclick').includes(tabName));
    if (clickedTabLink) {
        clickedTabLink.classList.add("active-link");
    }
    
    // Show the selected tab content
    const selectedTabContent = document.getElementById(tabName);
    if (selectedTabContent) {
        selectedTabContent.classList.add("active-tab");
    }
}

function openMenu() {
    const sideMenu = document.getElementById('sidemenu');
    sideMenu.style.right = '0';
}

function closeMenu() {
    const sideMenu = document.getElementById('sidemenu');
    sideMenu.style.right = '-200px';
}

// Optional: Form submission handler (note: would need backend implementation)
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            // In a real-world scenario, you'd send this data to a backend service
        });
    }
});