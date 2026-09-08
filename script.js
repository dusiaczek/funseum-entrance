// Get elements
const doorLeft = document.getElementById('doorLeft');
const doorRight = document.getElementById('doorRight');
const entranceContainer = document.getElementById('entrance-container') || document.querySelector('.entrance-container');
const contentPage = document.getElementById('contentPage');
let doorsOpened = false;

// Add click event listeners to doors
doorLeft.addEventListener('click', openDoors);
doorRight.addEventListener('click', openDoors);

function openDoors() {
    if (doorsOpened) return; // Prevent multiple clicks
    doorsOpened = true;
    
    // Add open animation to both doors
    doorLeft.classList.add('open');
    doorRight.classList.add('open');
    
    // After doors open, zoom out and show content
    setTimeout(() => {
        entranceContainer.classList.add('zoom-out');
        
        // Show content page after zoom animation
        setTimeout(() => {
            contentPage.classList.add('active');
        }, 800);
    }, 1200);
}

// Go back function
function goBack() {
    // Hide content page
    contentPage.classList.remove('active');
    
    // Reset entrance
    setTimeout(() => {
        entranceContainer.classList.remove('zoom-out');
        doorLeft.classList.remove('open');
        doorRight.classList.remove('open');
        doorsOpened = false;
    }, 300);
}

// Optional: Allow keyboard interaction (spacebar to open)
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && !doorsOpened) {
        e.preventDefault();
        openDoors();
    }
});

// Optional: Add touch support for mobile
document.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    const target = document.elementFromPoint(touch.clientX, touch.clientY);
    
    if (target === doorLeft || target === doorRight) {
        if (!doorsOpened) {
            openDoors();
        }
    }
}, { passive: true });