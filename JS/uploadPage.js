const uploadBtn = document.getElementById("uploadBtn");
const uploadInput = document.getElementById("uploadInput");
const mediaBox = document.getElementById("mediaBox");
const mediaPreview = document.getElementById("mediaPreview");
const avatarImg = document.getElementById("userAvatar");
const avatarIcon = document.getElementById("avatarIcon");

uploadBtn.onclick = () => uploadInput.click();

uploadInput.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    mediaPreview.src = URL.createObjectURL(file);
    mediaBox.hidden = false;
};

function removeMedia() {
    mediaPreview.src = '';
    mediaBox.hidden = true;
    uploadInput.value = '';
}

// Set user avatar if available
const profilePhoto = null; // replace with backend value
if (profilePhoto) {
    avatarImg.src = profilePhoto;
    avatarImg.hidden = false;
    avatarIcon.style.display = "none";
}

const postText = document.getElementById("postText");

postText.addEventListener("input", () => {
    postText.style.height = "auto";       // reset height
    postText.style.height = postText.scrollHeight + "px"; // set to scrollHeight
});

