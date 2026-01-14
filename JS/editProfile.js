// Select elements
// Elements
const nameField = document.getElementById('name-field');
const bioField = document.getElementById('bio-txt-field');
const gmailField = document.getElementById('gmail-field');
const phoneField = document.getElementById('phoneNo-field');
const saveBtn = document.querySelector('.saveButton button');
const profileImgContainer = document.querySelector('.profileImg-container');
const profileUpload = document.getElementById('profile-upload');

// ===== Load saved data on page load =====
window.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('profileData')){
        const data = JSON.parse(localStorage.getItem('profileData'));
        nameField.value = data.name || '';
        bioField.value = data.bio || '';
        gmailField.value = data.gmail || '';
        phoneField.value = data.phone || '';
        if(data.photo){
            profileImgContainer.innerHTML = `<img src="${data.photo}" alt="Profile" style="width:100%;height:100%;border-radius:50%;">`;
        }
    }
});

// ===== Upload photo =====
profileImgContainer.addEventListener('click', () => {
    profileUpload.click();
});

profileUpload.addEventListener('change', () => {
    const file = profileUpload.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = function(e){
            const base64 = e.target.result;
            profileImgContainer.innerHTML = `<img src="${base64}" alt="Profile" style="width:100%;height:100%;border-radius:50%;">`;

            // Save immediately in localStorage
            let data = JSON.parse(localStorage.getItem('profileData')) || {};
            data.photo = base64;
            localStorage.setItem('profileData', JSON.stringify(data));
        };
        reader.readAsDataURL(file);
    }
});

saveBtn.addEventListener('click', () => {
    const profileData = JSON.parse(localStorage.getItem('profileData')) || {};

    profileData.name = nameField.value;
    profileData.bio = bioField.value;
    profileData.gmail = gmailField.value;
    profileData.phone = phoneField.value;

    localStorage.setItem('profileData', JSON.stringify(profileData));

    // Optional feedback
    alert("Profile saved successfully!");

    // Redirect to settings page
    window.location.href = "settings.html";  // <- change if your path is different
});



