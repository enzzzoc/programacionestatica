// Muestra el botón cuando se hace scroll
window.onscroll = function() {
    const backToTopButton = document.querySelector(".back-to-top");
    if (document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "flex";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Función para desplazarse al inicio
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
