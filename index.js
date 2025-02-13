document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const calendarContainer = document.getElementById('calendarContainer');

    toggleButton.addEventListener('click', function() {
        calendarContainer.classList.remove('hidden');
        toggleButton.style.display = 'none';
    });
});
