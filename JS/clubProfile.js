// clubProfile.js
window.addEventListener('DOMContentLoaded', () => {
    const clubData = JSON.parse(localStorage.getItem('clubData'));
    if (!clubData) return; // no saved data yet

    // Update banner image
    const bannerImg = document.querySelector('.banner-image img');
    bannerImg.src = clubData.banner;

    // Update profile image
    const profileImg = document.querySelector('.profile-Image img');
    profileImg.src = clubData.profile;

    // Update club name
    const clubName = document.querySelector('.club-name h2');
    clubName.textContent = clubData.name;

    // Update club introduction
    const clubIntro = document.querySelector('.club-introduction p');
    clubIntro.textContent = clubData.intro;

    // Update club rules
    const clubRules = document.querySelector('.club-rules p');
    clubRules.textContent = clubData.rules;
});
