// clubEdit.js

// Banner preview
const bannerInput = document.getElementById('bannerInput');
const bannerPreview = document.getElementById('bannerPreview');
bannerInput.addEventListener('change', () => {
    const file = bannerInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
        bannerPreview.src = reader.result;
    };
    reader.readAsDataURL(file);
});

// Profile preview
const clubImageInput = document.getElementById('clubImage');
const clubPreview = document.getElementById('clubPreview');
clubImageInput.addEventListener('change', () => {
    const file = clubImageInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
        clubPreview.src = reader.result;
    };
    reader.readAsDataURL(file);
});

// Load existing data if any
window.addEventListener('DOMContentLoaded', () => {
    const savedData = JSON.parse(localStorage.getItem('clubData'));
    if (!savedData) return;

    document.getElementById('clubName').value = savedData.name;
    document.getElementById('clubIntro').value = savedData.intro;
    document.getElementById('clubRules').value = savedData.rules;
    bannerPreview.src = savedData.banner;
    clubPreview.src = savedData.profile;
});

// Save function
function saveClub() {
    const clubData = {
        name: document.getElementById('clubName').value,
        intro: document.getElementById('clubIntro').value,
        rules: document.getElementById('clubRules').value,
        banner: bannerPreview.src,
        profile: clubPreview.src
    };

    localStorage.setItem('clubData', JSON.stringify(clubData));
    alert('UwU Club info saved! ✧(>ω<)✧');

    // Redirect to clubProfile page
    window.location.href = 'clubProfile.html'; // <-- change this path if needed
}


