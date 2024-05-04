const toggleModeButton = document.getElementById('toggle-mode');
const body = document.body;

toggleModeButton.addEventListener('click', function() {
    // Toggle between light and dark mode
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');

    // Toggle visibility of sun and moon icons
    const sunIcon = document.querySelector('.mode-toggle .fa-sun');
    const moonIcon = document.querySelector('.mode-toggle .fa-moon');
    sunIcon.classList.toggle('hidden');
    moonIcon.classList.toggle('hidden');

    // Save user preference in local storage (optional)
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('isDarkMode', isDarkMode);
});

// Check user preference from local storage (optional)
const isDarkMode = localStorage.getItem('isDarkMode') === 'true';
if (isDarkMode) {
    body.classList.add('dark-mode');
    // Hide sun icon in dark mode
    document.querySelector('.mode-toggle .fa-sun').classList.add('hidden');
} else {
    body.classList.add('light-mode');
    // Hide moon icon in light mode
    document.querySelector('.mode-toggle .fa-moon').classList.add('hidden');
}
