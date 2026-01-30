const sideNav = document.getElementById("sideNav");
const openBtn = document.getElementById("openSettings");
const closeBtn = document.getElementById("closeNav");

openBtn.addEventListener("click", () => {
    sideNav.style.width = "400px"; // open sidebar
});

closeBtn.addEventListener("click", () => {
    sideNav.style.width = "0"; // close sidebar
});

// ===== Load profile photo =====
window.addEventListener('DOMContentLoaded', () => {
    const profileBtn = document.querySelector('.profile-btn');
    const profileIcon = profileBtn.querySelector('#openSettings');

    if(localStorage.getItem('profileData')) {
        const data = JSON.parse(localStorage.getItem('profileData'));

        if(data.photo) {
            // Hide the icon but keep it for click events
            profileIcon.style.display = "none";

            // Create new image element
            const img = document.createElement('img');
            img.src = data.photo;
            img.alt = "Profile";
            img.className = "profile-pic";
            img.style.width = "32px";
            img.style.height = "32px";
            img.style.borderRadius = "50%";
            img.style.cursor = "pointer";

            // Clicking the image still opens sidebar
            img.addEventListener('click', () => {
                sideNav.style.width = "400px";
            });

            // Append the image
            profileBtn.appendChild(img);
        }
    }
});

window.addEventListener('message', (event) => {
    const data = event.data;

    if(!data.action) return;

    const sideNav = document.getElementById('sideNav');

    // Close sidebar
    sideNav.style.width = "0";

    // Handle actions
    switch(data.action) {
        case 'editProfile':
            console.log("Open Edit Profile section in main page");
            // Example: redirect main page to edit profile
            window.location.href = "editProfile.html";
            break;

        case 'profileView':
            console.log("Open Edit Profile section in main page");
            // Example: redirect main page to edit profile
            window.location.href = "profileView.html";
            break;

    }
});

if(localStorage.getItem('openSidebarAfterLoad') === 'true') {
        sideNav.style.width = "400px";
        localStorage.removeItem('openSidebarAfterLoad');
    }