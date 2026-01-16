window.addEventListener('DOMContentLoaded', () => {
    const clubData = JSON.parse(localStorage.getItem('clubData'));
    const title = document.getElementById('registerTitle');

    if(clubData && clubData.name){
        title.textContent = `${clubData.name} Registeration`;
    } else {
        title.textContent = "Register";
    }
});

function registerUser() {
    const fullName = document.getElementById('fullName').value.trim();
    const studentID = document.getElementById('studentID').value.trim();
    const contactInfo = document.getElementById('contactInfo').value.trim();

    if(!fullName || !studentID || !contactInfo){
        alert("Please fill in all fields!");
        return;
    }

    const userData = {
        fullName,
        studentID,
        contactInfo
    };

    localStorage.setItem('registeredUser', JSON.stringify(userData));
    alert("Registered successfully!");
    
    window.location.href = "clubProfile.html";
}
