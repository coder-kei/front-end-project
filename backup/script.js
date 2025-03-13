// Simulación de carrito de compras
let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.closest('.card').querySelector('.card-title').textContent;
        cart.push(product);
        alert(`¡${product} añadido al carrito!`);
        console.log('Carrito:', cart);
    });
});

// Validación del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por contactarnos. Te responderemos pronto.');
    this.reset();
});