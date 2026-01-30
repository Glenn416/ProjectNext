// Load saved profile info and photo
window.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('profileData')){
        const data = JSON.parse(localStorage.getItem('profileData'));

        // Profile View Page
        const profileImgContainer = document.querySelector('.profileImg-container');
        const name = document.querySelector('.profileInfo .name');
        const bioEl = document.querySelector('.bio');
        const gmailEl = document.querySelector('.contact-info a');
        const phoneEl = document.querySelector('.contact-info p');

        if(profileImgContainer && data.photo){
            profileImgContainer.innerHTML = `<img src="${data.photo}" alt="Profile" style="width:100%;height:100%;border-radius:50%;">`;
        }

        if(name) name.textContent = data.name || '';
        if(bioEl) bioEl.textContent = data.bio || '';
        if(gmailEl) gmailEl.textContent = data.gmail || '';
        if(phoneEl) phoneEl.textContent = data.phone || '';

        // Settings Page
        const settingsName = document.querySelector('.profileViewMode .profileName');
        const settingsImg = document.querySelector('.profile .profileImg-container');

        if(settingsName) settingsName.textContent = data.name || 'Name';
        if(settingsImg && data.photo){
            settingsImg.innerHTML = `<img src="${data.photo}" alt="Profile" style="width:100%;height:100%;border-radius:50%;">`;
        }
    }
});
document.querySelector('.back-btn').addEventListener('click', () => {
    localStorage.setItem('openSidebarAfterLoad', 'true');
    window.location.href = "homePage.html";
});