// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', function () {
        const isLiked = button.classList.toggle('liked'); // Добавя/премахва клас 'liked'
        const svgIcon = button.querySelector('svg');
        if (isLiked) {
            svgIcon.style.stroke = 'red'; // Запълва сърцето
        } else {
            svgIcon.style.stroke = 'black'; // Връща го към черно
        }
    });
});
