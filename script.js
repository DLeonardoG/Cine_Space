// script.js

document.querySelectorAll('.boton-menu').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.boton-menu').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});
