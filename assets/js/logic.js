// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
function toggleMode() {
    const currentMode = document.body.classList.contains('light') ? 'light' : 'dark';
    const newMode = currentMode === 'light' ? 'dark' : 'light';
    document.body.classList.remove(currentMode);
    document.body.classList.add(newMode);
    localStorage.setItem('theme', newMode);
}

function applySavedTheme() {
    const theme = localStorage.getItem('theme');
    if (theme) {
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(theme);
    }
}

document.getElementById('toggle').addEventListener('click', toggleMode);
document.addEventListener('DOMContentLoaded', applySavedTheme);

// TODO: Create functions to read and write from local storage
function writeToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function readFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}