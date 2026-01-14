// Get body and theme button
const themeBtn = document.querySelector('.themeSetting');
const themeText = document.getElementById('theme-text');

// ===== Load saved theme =====
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    if(themeText) themeText.textContent = "Change Theme";
    if(themeBtn) themeBtn.querySelector('i').className = "fi fi-rr-sun";
}

// ===== Toggle theme =====
if(themeBtn){
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        if(document.body.classList.contains('dark')){
            localStorage.setItem('theme', 'dark');
            if(themeText) themeText.textContent = "Light Theme";
            themeBtn.querySelector('i').className = "fi fi-rr-sun";
        } else {
            localStorage.setItem('theme', 'light');
            if(themeText) themeText.textContent = "Dark Theme";
            themeBtn.querySelector('i').className = "fi fi-rr-dark-mode-alt";
        }
    });
}

