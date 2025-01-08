let index = 0;

function moveSlide(step) {
    const images = document.querySelectorAll(".carousel-images img");
    index += step;

    if (index < 0) {
        index = images.length - 1; // Vuelve a la última imagen
    } else if (index >= images.length) {
        index = 0; // Vuelve a la primera imagen
    }

    const offset = -index * 100; // Calcula el desplazamiento en porcentaje
    document.querySelector(".carousel-images").style.transform = `translateX(${offset}%)`;
}