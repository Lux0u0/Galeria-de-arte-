document.addEventListener("DOMContentLoaded", function() {
    const gallerySection = document.querySelector('.gallery');
    
    // Simulación de carga de dibujos
    const dibujos = ['dibujo1.jpg', 'dibujo2.jpg', 'dibujo3.jpg']; // Aquí deberías poner las rutas de los dibujos subidos

    dibujos.forEach(dibujo => {
        const img = document.createElement('img');
        img.src = dibujo;
        img.alt = 'Dibujo de un compañero';
        gallerySection.appendChild(img);
    });
});
