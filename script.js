let isOnlineFlag = true; // Initialize the flag to true assuming the user is online initially
let onlinePopupTimer; // Timer to control the online popup display

// Function to check internet connection status
function isOnline() {
    return navigator.onLine;
}

// Function to show or hide the internet connection popup
function toggleInternetPopup() {
    const internetPopup = document.getElementById('internetPopup');
    if (isOnline()) {
        if (!isOnlineFlag) {
            // User returned from an offline condition, show the online status message
            isOnlineFlag = true; // Update the flag
            internetPopup.style.display = 'none'; // Hide the popup if online

            // Display the online status message for 300ms
            const onlineStatus = document.getElementById('onlineStatus');
            onlineStatus.style.display = 'block';
            clearTimeout(onlinePopupTimer); // Clear any previous timer
            onlinePopupTimer = setTimeout(() => {
                onlineStatus.style.display = 'none';
            }, 3000);
        } else {
            internetPopup.style.display = 'none'; // Hide the popup if online, and the user was already online
        }
    } else {
        isOnlineFlag = false; // Update the flag if the user goes offline
        internetPopup.style.display = 'block'; // Show the popup if offline
    }
}

// Add an event listener to check and toggle the popup on page load and whenever the connection status changes
window.addEventListener('load', toggleInternetPopup);
window.addEventListener('online', toggleInternetPopup);
window.addEventListener('offline', toggleInternetPopup);
