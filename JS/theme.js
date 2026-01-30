const themeBtn = document.querySelector('.themeSetting');
const themeText = document.getElementById('theme-text');

if (localStorage.getItem('theme') === 'dark') {
    // apply dark mode to parent and iframe
    parent.document.body.classList.add('dark');
    document.body.classList.add('dark'); // this is the iframe itself

    if(themeText) themeText.textContent = "Light Theme";
    if(themeBtn) themeBtn.querySelector('i').className = "fi fi-rr-sun";
}

if(themeBtn){
    themeBtn.addEventListener('click', () => {
        // toggle main page
        const isDarkParent = parent.document.body.classList.toggle('dark');
        // toggle sidebar itself (iframe content)
        const isDarkSelf = document.body.classList.toggle('dark');

        // save theme
        localStorage.setItem('theme', isDarkParent ? 'dark' : 'light');

        // update toggle text & icon
        if(themeText) themeText.textContent = isDarkParent ? "Light Theme" : "Dark Theme";
        themeBtn.querySelector('i').className = isDarkParent ? "fi fi-rr-sun" : "fi fi-rr-dark-mode-alt";
    });
}

