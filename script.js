function openTab(tabName) {
    const tabLinks = document.getElementsByClassName("tab-links");
    const tabContents = document.getElementsByClassName("tab-contents");
    
    for (let tablink of tabLinks) {
        tablink.classList.remove("active-link");
    }
    
    for (let tabcontent of tabContents) {
        tabcontent.classList.remove("active-tab");
    }
    
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
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
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    // In a real-world scenario, you'd send this data to a backend service
});
