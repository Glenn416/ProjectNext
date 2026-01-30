// Select all sidebar buttons
const sidebarBtns = document.querySelectorAll('.sidebar-btn');

sidebarBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault(); // prevent default link behavior

        const action = btn.dataset.action;

        // Send message to parent (main page)
        window.parent.postMessage({ action }, '*');
    });
});
