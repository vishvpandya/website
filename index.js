document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const calendarContainer = document.getElementById('calendarContainer');
    const backButton = document.getElementById('backButton');
    const container = document.querySelector('.container');

    toggleButton.addEventListener('click', function() {
        calendarContainer.classList.remove('hidden');
        container.style.display = 'none';
    });

    backButton.addEventListener('click', function() {
        calendarContainer.classList.add('hidden');
        container.style.display = 'block';
    });
});
